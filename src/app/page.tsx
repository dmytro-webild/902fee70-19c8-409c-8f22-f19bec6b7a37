"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Facebook, Heart, Instagram, MessageCircle, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="medium"
        background="floatingGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Início", id: "hero" },
        { name: "Serviços", id: "services" },
        { name: "Sobre", id: "about" },
        { name: "Contato", id: "contact" },
      ]}
      brandName="Dra. Cristiane"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{ variant: "plain" }}
      title="Cuidado especializado para a saúde íntima da mulher"
      description="Restore pelvic health and eliminate discomfort with specialized care tailored to your needs."
      buttons={[
        { text: "Agendar consulta", href: "#contact" },
        { text: "Falar no WhatsApp", href: "https://wa.me/5519999999999" },
      ]}
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/winter-season-lodging-entrance_482257-103218.jpg", imageAlt: "Clinic environment" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-shot-stethoscope-syringe-bottle-medicine-piece-paper_181624-23615.jpg", imageAlt: "Clinic view 1" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/examination-bed-dry-needling-clinic_107420-65816.jpg", imageAlt: "Clinic view 2" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/woman-physiotherapy-making-physical-exercises-with-qualified-therapist_1157-38079.jpg", imageAlt: "Clinic view 3" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-diagnosing-melanoma-body-female-patient_23-2149365771.jpg", imageAlt: "Clinic view 4" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/front-view-interior-room-design-concept_23-2148786439.jpg", imageAlt: "Clinic view 5" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Fisioterapia Pélvica", description: "Tratamento especializado para disfunções do assoalho pélvico.", tag: "Especialidade", imageSrc: "http://img.b2bpic.net/free-photo/dna-genetic-biotechnology-science-gold-neon-graphic_53876-167299.jpg" },
        { id: "f2", title: "Fisioterapia para Gestantes", description: "Preparação física e alívio de dores durante a gestação.", tag: "Gestação", imageSrc: "http://img.b2bpic.net/free-photo/abstract-acrylic-texture_23-2148132191.jpg" },
        { id: "f3", title: "Pós-parto", description: "Recuperação funcional e bem-estar no pós-parto imediato e tardio.", tag: "Recuperação", imageSrc: "http://img.b2bpic.net/free-photo/mother-spending-time-with-her-beloved-child_23-2149505182.jpg" },
        { id: "f4", title: "Saúde Íntima Feminina", description: "Cuidado integral focado na funcionalidade e qualidade de vida.", tag: "Bem-estar", imageSrc: "http://img.b2bpic.net/free-photo/arrangement-paper-made-woman-crying_23-2148857185.jpg" },
      ]}
      title="Nossas Especialidades"
      description="Tratamentos focados no seu bem-estar feminino."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Cuidado que vai além do tratamento"
      description="A Dra. Cristiane oferece fisioterapia pélvica e obstétrica com um olhar humano. Cada atendimento é personalizado, garantindo que você se sinta acolhida e segura em cada etapa do seu processo de cura e bem-estar."
      imageSrc="http://img.b2bpic.net/free-photo/female-masseur-preparing-bed-massage-session_23-2150461391.jpg"
      imageAlt="Dra. Cristiane Fisioterapeuta"
    />
  </div>

  <div id="clinic-experience" data-section="clinic-experience">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="inline-image"
      useInvertedBackground={false}
      features={[
        { id: "c1", title: "Atendimento humanizado", description: "Foco total na sua história.", tag: "Destaque", imageSrc: "http://img.b2bpic.net/free-photo/students-learning-cafeteria_23-2147679038.jpg" },
        { id: "c2", title: "Estrutura moderna", description: "Tecnologia e aconchego.", tag: "Destaque", imageSrc: "http://img.b2bpic.net/free-photo/empty-hallway-background_23-2149408807.jpg" },
        { id: "c3", title: "Ambiente acolhedor", description: "Sinta-se em casa.", tag: "Destaque", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-physiotherapist-with-table_23-2149173470.jpg" },
      ]}
      title="Um ambiente pensado para o seu conforto"
      description="Projetamos cada detalhe para oferecer segurança, conforto e privacidade em um espaço exclusivo em Americana."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "José Amaral", imageSrc: "http://img.b2bpic.net/free-photo/female-patient-smiling-while-talking-doctor_107420-73983.jpg" },
        { id: "t2", name: "Monike Cristina", imageSrc: "http://img.b2bpic.net/free-photo/fashion-girl-posing-photo-studio_1157-33957.jpg" },
        { id: "t3", name: "Ana Silva", imageSrc: "http://img.b2bpic.net/free-photo/woman-s-studio-portrait-ideal-skin-blonde-straight-hair_633478-1288.jpg" },
        { id: "t4", name: "Beatriz Souza", imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg" },
        { id: "t5", name: "Carla Mendes", imageSrc: "http://img.b2bpic.net/free-photo/doctor-preparing-consult_23-2149309927.jpg" },
      ]}
      cardTitle="Depoimentos"
      cardTag="Clientes"
      cardAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "100%", title: "Atendimento", description: "Personalizado e atencioso", icon: Heart },
        { id: "m2", value: "+500", title: "Pacientes", description: "Mulheres cuidadas", icon: Users },
        { id: "m3", value: "24/7", title: "Apoio", description: "Suporte via WhatsApp", icon: MessageCircle },
      ]}
      title="Nossos Números"
      description="Dedicação contínua à excelência em fisioterapia pélvica."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Como é uma sessão inicial?", content: "Na primeira sessão, realizamos uma avaliação detalhada para entender seu histórico e definir um plano de tratamento personalizado." },
        { id: "q2", title: "O que é fisioterapia pélvica?", content: "É uma especialidade que trata disfunções musculares e nervosas do assoalho pélvico feminino." },
        { id: "q3", title: "Preciso de encaminhamento médico?", content: "Não necessariamente, mas é recomendado para uma avaliação interdisciplinar." },
        { id: "q4", title: "Como agendar?", content: "Você pode agendar diretamente pelo botão de WhatsApp em nosso site." },
      ]}
      title="Dúvidas Frequentes"
      description="Informações essenciais para seu tratamento."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      text="Cuide da sua saúde com quem realmente se importa."
      buttons={[
        { text: "Agendar agora", href: "https://wa.me/5519999999999" },
        { text: "WhatsApp", href: "https://wa.me/5519999999999" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Dra. Cristiane"
      copyrightText="© 2025 Dra. Cristiane | Fisioterapia Pélvica & Obstetrícia"
      socialLinks={[
        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
        { icon: Facebook, href: "#", ariaLabel: "Facebook" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}