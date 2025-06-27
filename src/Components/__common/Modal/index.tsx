import React from "react";
import ReactModal from "react-modal";
import { twMerge } from "tailwind-merge";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  backdropClassName?: string;
  contentLabel?: string;
  closeButtonClassName?: string;
}

export function Modal({
  isOpen,
  onRequestClose,
  children,
  className,
  overlayClassName,
  backdropClassName,
  contentLabel = "Modal",
  closeButtonClassName,
}: ModalProps) {
  // Configuração do elemento raiz para acessibilidade
  React.useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  // Classes base usando twMerge com animações
  const baseClasses = {
    content: twMerge(
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      "w-full h-full max-w-[90svw] max-h-[500px]",
      "bg-white rounded-[4px] shadow-lg",
      "outline-none p-4",
      "transition-opacity duration-300 ease-in-out", // Transição para animação
      isOpen ? "opacity-100" : "opacity-0", // Controle de visibilidade
      className
    ),
    overlay: twMerge(
      "fixed inset-0 z-50 flex items-center justify-center",
      "transition-opacity duration-300 ease-in-out", // Transição para animação
      isOpen ? "opacity-100" : "opacity-0", // Controle de visibilidade
      overlayClassName
    ),
    backdrop: twMerge(
      "fixed inset-0 bg-black bg-opacity-50",
      "bg-black/20",
      "transition-opacity duration-300 ease-in-out", // Transição para animação
      isOpen ? "opacity-100" : "opacity-0", // Controle de visibilidade
      backdropClassName
    ),
    closeButton: twMerge(
      "absolute cursor-pointer top-2 right-2 p-1 rounded-full outline-none",
      "text-gray-500 hover:text-gray-700",
      "hover:bg-gray-100 transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
      closeButtonClassName
    ),
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className={baseClasses.content}
      overlayClassName={baseClasses.overlay}
      closeTimeoutMS={300} // Ajustado para 300ms para combinar com a duração da animação
      overlayElement={(props, contentElement) => (
        <div {...props} className={baseClasses.overlay}>
          <div className={baseClasses.backdrop} onClick={onRequestClose} />
          {contentElement}
        </div>
      )}
    >
      <button
        onClick={onRequestClose}
        className={baseClasses.closeButton}
        aria-label="Fechar modal"
      >
        <IoClose className="w-5 h-5" />
      </button>
      
      {children}
    </ReactModal>
  );
}