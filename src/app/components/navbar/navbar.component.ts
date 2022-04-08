/*
 * The MIT License
 *
 * Copyright 2022 Martha Ribeiro Locks.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public selectedMenu = 'Home';

  constructor() { }

  ngOnInit(): void {
    this.scrolling();
  }

  public tellMe() {
    window.location.href = "https://api.whatsapp.com/send?phone=5548984330719&text=Olá,%20entre%20em%20contato%20para%20maiores%20informações."
  }

  public scrolling() {
    window.addEventListener('scroll', (e) => {

      const navbar = document.getElementById('navbar');
      const heightNavbar = <number>navbar?.offsetHeight;

      const services = document.getElementById('services');
      const topServices = <number>services?.getBoundingClientRect().top;
      const bottomServices = <number>services?.getBoundingClientRect().bottom;

      const faq = document.getElementById('faq');
      const topFaq = <number>faq?.getBoundingClientRect().top;
      const bottomFaq = <number>faq?.getBoundingClientRect().bottom;

      const portfolio = document.getElementById('portfolio');
      const topPortfolio = <number>portfolio?.getBoundingClientRect().top;
      const bottomPortfolio = <number>portfolio?.getBoundingClientRect().bottom;

      if (heightNavbar >= topServices && bottomServices >= heightNavbar) {
        this.selectedMenu = 'Services';
      } else if (heightNavbar >= topFaq && bottomFaq >= heightNavbar) {
        this.selectedMenu = 'Faq';
      } else if (heightNavbar >= topPortfolio && bottomPortfolio >= heightNavbar) {
        this.selectedMenu = 'Portfolio';
      } else {
        this.selectedMenu = 'Home';
      }
    });
  }

}
