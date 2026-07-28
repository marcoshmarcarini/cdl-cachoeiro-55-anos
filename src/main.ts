// CDL Cachoeiro 55 Anos - Vanilla JS / TS Interaction Logic
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

// Types
interface LeadSubmission {
  companyName: string;
  cnpj: string;
  phone: string;
  ownerName: string;
  email: string;
  submittedAt: string;
}

// Gallery Images Metadata
const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu71kY_yHTwR-O6Kg1qzY_766dTStBbPs9vYHdmT5nHq--RDpDFH7qVYYXCeaEBprlDjB2f4j8ovzv9NDGkwjgN91VxFlD5HgK8rp9HvCdSalssW_fDRMF4bew2lAYCwoVTe7_ewXugCR1EkOcpaH-r1y8jEdDdr_G1Dh7-_pAr_qZLy4uBn2X3UXRHWnAGE2BeDIeaqqqFFNwQR3onFGFW61ZKsFhO6iRXdA5-nRclmfFkDJCahUI14JGjuARd_EJkXOxHGCwFEio",
    caption: "Encontro Histórico dos Fundadores da CDL (1971)",
    category: "Fundadores (1971)",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaN5UdOfqkweoDnP3_Vuci0qFwC8oeYUcznf4pnqlh3kxVBiPlqw3fsb1P2HPyiBcRLSaRLCOGzRnnEIUUGXxmCxa1lFS2edb58X8oLwIHghfsni9if_HBJBrsil6YRQ8qCwsy0lpzAFNHUXQaHP1l2OHGvAMyrEYqQJD_gRXZj2fuzIWvhRFpUWgrg9i7xTSuuehQoNAEGwg2B5UeRAN-eIXpiRvxAlGosjBgL3a1DjxORKEFKtFom3BRT0MWaHs5u4SUNzk9UcTr",
    caption: "Inauguração da Sede Atual da CDL Cachoeiro",
    category: "Estrutura Física",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_qFSSuxQgKnMoUcht5lFwaUMKGlfUuSqjPotMgKTbFGtvTLg8ouiesLfIb3Y3bnp_KBS1WOvBE-c4XF8PP9-hmQZhhXQ05FsTBQOpUzWnso61vPWpcy4rZBgIXoaeLSKv__O_uhjQ96mTPsuDrMEuLpAoKhnXAGt0N14QO2G4b6C4GNW4r53Xh_hBZFgUOwS1nc0S9Nz9XRqFBwi2p2rGMSdAjx044wGHQrDnW2njkTxlKikbHdNWeCVnxy4Bv736ROF7IyyTYyD5",
    caption: "Grandes Reuniões com Lojistas do Sul Capixaba",
    category: "Convenção e Fórum",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    caption: "Equipe Técnica e Postos de Atendimento de Certificação Digital",
    category: "Tecnologia",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption: "Premiação Mérito Lojista e Eventos de Integração",
    category: "Comunidade",
  },
  {
    src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
    caption: "Varejo Regional Fortalecido pelas Soluções do SPC",
    category: "Ponto Comercial",
  },
];

// Initialize on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 800,
    easing: "ease-out-quad",
    once: true,
    offset: 120, // offset (in px) from the original trigger point
  });

  // Lucide Icons Render
  // @ts-ignore
  if (typeof lucide !== "undefined") {
    // @ts-ignore
    lucide.createIcons();
  }

  // --- MOBILE NAV MENU ---
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuToggle && mobileDropdown) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileDropdown.classList.toggle("hidden");
    });

    // Close mobile dropdown when clicking a link
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileDropdown.classList.add("hidden");
      });
    });
  }

  // --- SOLUTIONS ACCORDION (BENEFITS TOGGLE) ---
  const accordionButtons = document.querySelectorAll(".accordion-btn");
  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      if (!targetId) return;

      const targetList = document.getElementById(targetId);
      const icon = btn.querySelector(".accordion-icon");
      const textSpan = btn.querySelector(".accordion-text");

      if (targetList) {
        const isHidden = targetList.classList.contains("hidden");

        // Close all other accordions first for a clean accordion flow
        document.querySelectorAll(".accordion-btn").forEach((otherBtn) => {
          const otherTargetId = otherBtn.getAttribute("data-target");
          if (otherTargetId && otherTargetId !== targetId) {
            const otherList = document.getElementById(otherTargetId);
            const otherIcon = otherBtn.querySelector(".accordion-icon");
            const otherTextSpan = otherBtn.querySelector(".accordion-text");
            if (otherList) otherList.classList.add("hidden");
            if (otherIcon)
              (otherIcon as HTMLElement).style.transform = "rotate(0deg)";
            if (otherTextSpan)
              otherTextSpan.textContent = "Ver benefícios específicos";
          }
        });

        // Toggle current accordion
        if (isHidden) {
          targetList.classList.remove("hidden");
          if (icon) (icon as HTMLElement).style.transform = "rotate(180deg)";
          if (textSpan) textSpan.textContent = "Ocultar benefícios";
        } else {
          targetList.classList.add("hidden");
          if (icon) (icon as HTMLElement).style.transform = "rotate(0deg)";
          if (textSpan) textSpan.textContent = "Ver benefícios específicos";
        }
      }
    });
  });

  // --- SEJA ASSOCIADO CONTACT MODAL FLOW ---
  const contactModal = document.getElementById("contact-modal");
  const openContactBtn = document.getElementById("open-contact-btn");
  const openContactMobileBtn = document.getElementById(
    "open-contact-mobile-btn",
  );
  const ctaContactBtn = document.getElementById("cta-contact-btn");
  const closeContactModal = document.getElementById("close-contact-modal");
  const associationForm = document.getElementById("association-form");
  const formSuccessCard = document.getElementById("form-success-card");
  const successCloseBtn = document.getElementById("success-close-btn");

  const openContact = () => {
    if (contactModal && associationForm && formSuccessCard) {
      contactModal.classList.remove("hidden");
      contactModal.classList.add("flex");
      associationForm.classList.remove("hidden");
      formSuccessCard.classList.add("hidden");
    }
  };

  const closeContact = () => {
    if (contactModal) {
      contactModal.classList.add("hidden");
      contactModal.classList.remove("flex");
    }
  };

  if (openContactBtn) openContactBtn.addEventListener("click", openContact);
  if (openContactMobileBtn)
    openContactMobileBtn.addEventListener("click", openContact);
  if (ctaContactBtn) ctaContactBtn.addEventListener("click", openContact);
  if (closeContactModal)
    closeContactModal.addEventListener("click", closeContact);
  if (successCloseBtn) successCloseBtn.addEventListener("click", closeContact);

  // Close contact modal when clicking overlay background
  if (contactModal) {
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        closeContact();
      }
    });
  }

  // Handle Association Form Submission
  if (associationForm) {
    associationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const companyNameInput = document.getElementById(
        "company-name",
      ) as HTMLInputElement;
      const cnpjInput = document.getElementById("cnpj") as HTMLInputElement;
      const phoneInput = document.getElementById("phone") as HTMLInputElement;
      const ownerNameInput = document.getElementById(
        "owner-name",
      ) as HTMLInputElement;
      const emailInput = document.getElementById("email") as HTMLInputElement;

      const newSubmission: LeadSubmission = {
        companyName: companyNameInput?.value || "",
        cnpj: cnpjInput?.value || "",
        phone: phoneInput?.value || "",
        ownerName: ownerNameInput?.value || "",
        email: emailInput?.value || "",
        submittedAt: new Date().toISOString(),
      };

      // Real integration: store to localStorage
      try {
        const existingRaw = localStorage.getItem("cdl_submissions");
        const existingList = existingRaw ? JSON.parse(existingRaw) : [];
        existingList.push(newSubmission);
        localStorage.setItem("cdl_submissions", JSON.stringify(existingList));
      } catch (err) {
        console.error("Erro salvando submissão:", err);
      }

      // Toggle display
      associationForm.classList.add("hidden");
      if (formSuccessCard) {
        formSuccessCard.classList.remove("hidden");
      }

      // Reset form fields
      if (associationForm) (associationForm as HTMLFormElement).reset();
    });
  }

  // --- SIMPLE VIDEO MODAL FLOW ---
  const videoModal = document.getElementById("video-modal");
  const playVideoTrigger = document.getElementById("play-video-trigger");
  const closeVideoModalBtn = document.getElementById("close-video-modal");
  const institutionalVideo = document.getElementById(
    "institutional-video",
  ) as HTMLVideoElement;

  const openVideo = () => {
    if (videoModal && institutionalVideo) {
      videoModal.classList.remove("hidden");
      videoModal.classList.add("flex");
      institutionalVideo
        .play()
        .catch((e) =>
          console.log("Auto-play blocked, playing on user manual click"),
        );
    }
  };

  const closeVideo = () => {
    if (videoModal && institutionalVideo) {
      institutionalVideo.pause();
      videoModal.classList.add("hidden");
      videoModal.classList.remove("flex");
    }
  };

  if (playVideoTrigger) playVideoTrigger.addEventListener("click", openVideo);
  if (closeVideoModalBtn)
    closeVideoModalBtn.addEventListener("click", closeVideo);

  // Close video modal when clicking on overlay background
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        closeVideo();
      }
    });
  }

  // --- TIMELINE CAROUSEL SCROLLING ---
  const timelineCarousel = document.getElementById("timeline-carousel");
  const timelinePrevBtn = document.getElementById("timeline-prev-btn");
  const timelineNextBtn = document.getElementById("timeline-next-btn");

  if (timelineCarousel && timelinePrevBtn && timelineNextBtn) {
    timelinePrevBtn.addEventListener("click", () => {
      timelineCarousel.scrollBy({ left: -340, behavior: "smooth" });
    });
    timelineNextBtn.addEventListener("click", () => {
      timelineCarousel.scrollBy({ left: 340, behavior: "smooth" });
    });
  }

  // --- IMAGE GALLERY LIGHTBOX ---
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightboxModal = document.getElementById("lightbox-modal");
  const closeLightboxBtn = document.getElementById("close-lightbox");
  const lightboxImg = document.getElementById(
    "lightbox-img",
  ) as HTMLImageElement;
  const lightboxCounter = document.getElementById("lightbox-counter");
  const lightboxPrevBtn = document.getElementById("lightbox-prev");
  const lightboxNextBtn = document.getElementById("lightbox-next");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCategory = document.getElementById("lightbox-category");

  let currentImgIndex = 0;

  const updateLightboxImage = (index: number) => {
    if (index < 0 || index >= galleryImages.length) return;
    currentImgIndex = index;
    const item = galleryImages[index];

    if (lightboxImg && lightboxCounter && lightboxCaption && lightboxCategory) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.caption;
      lightboxCounter.textContent = `${index + 1} de ${galleryImages.length}`;
      lightboxCaption.textContent = item.caption;
      lightboxCategory.textContent = item.category;
    }
  };

  const openLightbox = (index: number) => {
    if (lightboxModal) {
      updateLightboxImage(index);
      lightboxModal.classList.remove("hidden");
      lightboxModal.classList.add("flex");
    }
  };

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.add("hidden");
      lightboxModal.classList.remove("flex");
    }
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const idxAttr = item.getAttribute("data-img-idx");
      if (idxAttr !== null) {
        const index = parseInt(idxAttr, 10);
        openLightbox(index);
      }
    });
  });

  if (closeLightboxBtn)
    closeLightboxBtn.addEventListener("click", closeLightbox);
  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener("click", () => {
      const nextIndex =
        (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightboxImage(nextIndex);
    });
  }
  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener("click", () => {
      const nextIndex = (currentImgIndex + 1) % galleryImages.length;
      updateLightboxImage(nextIndex);
    });
  }

  // Close lightbox when clicking overlay background
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard support for accessibility and ease of use
  document.addEventListener("keydown", (e) => {
    if (lightboxModal && !lightboxModal.classList.contains("hidden")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft" && lightboxPrevBtn) lightboxPrevBtn.click();
      if (e.key === "ArrowRight" && lightboxNextBtn) lightboxNextBtn.click();
    }
    if (videoModal && !videoModal.classList.contains("hidden")) {
      if (e.key === "Escape") closeVideo();
    }
    if (contactModal && !contactModal.classList.contains("hidden")) {
      if (e.key === "Escape") closeContact();
    }
  });

  // --- SCROLL TO TOP ACCELERATOR ---
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.remove("scale-0", "opacity-0");
        scrollTopBtn.classList.add("scale-100", "opacity-100");
      } else {
        scrollTopBtn.classList.remove("scale-100", "opacity-100");
        scrollTopBtn.classList.add("scale-0", "opacity-0");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
