import React, { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons/Icons';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  isLocalGuide?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Carolina",
    role: "Hóspede",
    date: "há 2 meses",
    content: "A pousada é um encanto! Muito bem localizada no centro de Palmeiras, o que facilita muito o acesso a tudo. Os quartos são limpíssimos e o café da manhã é delicioso. Com certeza voltarei!",
    rating: 5,
    isLocalGuide: true
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Viajante",
    date: "há 3 semanas",
    content: "Excelente custo-benefício. Fui muito bem recebido, a equipe é extremamente atenciosa e me deram ótimas dicas de trilhas na Chapada. Recomendo para quem busca conforto e hospitalidade.",
    rating: 5
  },
  {
    id: 3,
    name: "Família Oliveira",
    role: "Hóspede",
    date: "há 1 mês",
    content: "Lugar maravilhoso e muito tranquilo. As crianças adoraram o jardim e nós adoramos a paz do lugar. É o ponto de partida perfeito para conhecer o Pai Inácio e a Pratinha.",
    rating: 5,
    isLocalGuide: true
  },
  {
    id: 4,
    name: "Juliana Santos",
    role: "Hóspede",
    date: "há 4 meses",
    content: "Sempre que venho para a Chapada me hospedo aqui. A sensação é de estar em casa. O ambiente é acolhedor e cada detalhe da decoração mostra o carinho dos donos com o lugar.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const googleReviewsUrl = "https://www.google.com/maps/place/Pousada+Encantos+de+Palmeiras/@-12.5150866,-41.5766814,17z/data=!4m8!3m7!1s0x769e1a49c04869d:0x51644425f0e576de!8m2!3d-12.5150866!4d-41.5741065!9m1!1b1!16s%2Fg%2F11f_v6m7m0";

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-4 bg-stone-50 px-6 py-2 rounded-full border border-stone-100 shadow-sm">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#3