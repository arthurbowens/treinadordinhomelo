import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly whatsappNumber = '557391812387';

  protected readonly instagramUrl = 'https://www.instagram.com/treinadordinhomelo/';

  protected readonly menuOpen = signal(false);

  protected readonly navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Objetivos', href: '#objetivos' },
    { label: 'Como funciona', href: '#como-funciona' },
  ];

  protected readonly differentials = [
    'Treino totalmente personalizado',
    'Ajustes constantes conforme sua evolução',
    'Suporte para tirar dúvidas',
    'Estratégia voltada para o seu objetivo',
    'Acompanhamento próximo durante toda a jornada',
    'Método pensado para gerar resultados reais',
  ];

  protected readonly goals = [
    {
      title: 'Hipertrofia',
      description:
        'Ganhe massa muscular com um planejamento estruturado para acelerar sua evolução sem perder tempo.',
      icon: 'hypertrophy' as const,
    },
    {
      title: 'Emagrecimento',
      description:
        'Reduza gordura corporal de forma sustentável, preservando massa muscular e construindo hábitos duradouros.',
      icon: 'weightloss' as const,
    },
    {
      title: 'Performance',
      description:
        'Melhore força, resistência e condicionamento físico com um treino planejado para evoluir continuamente.',
      icon: 'performance' as const,
    },
  ];

  protected whatsappUrl(message: string): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  protected readonly messages = {
    hero: 'Olá, Dinho! Vim pelo site e quero começar agora. Pode me passar mais informações sobre o acompanhamento?',
    about: 'Olá, Dinho! Quero meu acompanhamento personalizado. Como funciona?',
    presencial: 'Olá, Dinho! Quero treinar presencialmente. Como podemos começar?',
    online: 'Olá, Dinho! Quero treinar online. Como funciona o acompanhamento?',
    final: 'Olá, Dinho! Quero começar meu acompanhamento. Pode me explicar como funciona?',
  };

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      this.menuOpen.set(false);
    }
  }
}
