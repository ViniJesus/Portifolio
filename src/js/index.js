document.addEventListener("DOMContentLoaded", () => {
  // const form = document.getElementById("contato-form");
  // const statusMessage = document.getElementById("form-status");

  // form.addEventListener("submit", async (e) => {
  //   e.preventDefault(); // impede recarregamento

  //   const data = new FormData(form);

  //   try {
  //     const response = await fetch("https://formspree.io/f/manjppdk", {
  //       method: "POST",
  //       body: data,
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       statusMessage.textContent = "Mensagem enviada com sucesso! 🎉";
  //       statusMessage.classList.remove("text-red-800", "bg-red-200");
  //       statusMessage.classList.add("text-green-800", "bg-green-200");
  //       form.reset();
  //     } else {
  //       statusMessage.textContent =
  //         "Ocorreu um erro ao enviar. Tente novamente.";
  //       statusMessage.classList.remove("text-green-800", "bg-green-200");
  //       statusMessage.classList.add("text-red-800", "bg-red-200");
  //     }
  //   } catch (error) {
  //     statusMessage.textContent = "Erro de rede. Verifique sua conexão.";
  //     statusMessage.classList.remove("text-green-800", "bg-green-200");
  //     statusMessage.classList.add("text-red-800", "bg-red-200");
  //   }

  //   // 🕒 Some com a mensagem após 4 segundos
  //   setTimeout(() => {
  //     statusMessage.textContent = "";
  //     statusMessage.classList.remove(
  //       "text-green-800",
  //       "bg-green-200",
  //       "text-red-800",
  //       "bg-red-200",
  //     );
  //   }, 4000);
  // });

  // document.getElementById("baixar-cv").addEventListener("click", function () {
  //   const link = document.createElement("a");
  //   link.href = "src/docs/Curriculo_Vinicius_Jesus.pdf"; // Caminho pro seu arquivo
  //   link.download = "vinicius-cv.pdf"; // Nome que será salvo
  //   link.click();
  // });

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.classList.toggle("rounded-b-md");
  });
});
