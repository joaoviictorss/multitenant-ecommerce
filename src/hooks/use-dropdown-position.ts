import { RefObject } from "react";

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    // Obtém as dimensões e posição do elemento de referência (botão ou elemento que dispara o dropdown)
    const rect = ref.current.getBoundingClientRect();

    // Define a largura padrão do dropdown (w-60 = 15rem = 240px)
    const dropdownWidth = 240; 

    // Calcula a posição inicial alinhada ao elemento de referência
    // Adiciona o scroll da página para obter coordenadas absolutas
    let left = rect.left + window.scrollX;
    let top = rect.bottom + window.scrollY;

    // Verifica se o dropdown ultrapassa a borda direita da janela
    if (left + dropdownWidth > window.innerWidth) {
      // Realinha o dropdown para que sua borda direita coincida com a borda direita do elemento de referência
      left = rect.right + window.scrollX - dropdownWidth;

      // Se mesmo após o realinhamento o dropdown ficar fora da tela à esquerda
      // posiciona-o próximo à borda direita da janela com um padding de 16px
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    // Garante que o dropdown não ultrapasse a borda esquerda da janela
    // Adiciona um padding de 16px caso isso ocorra
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };

  return { getDropdownPosition };
};
