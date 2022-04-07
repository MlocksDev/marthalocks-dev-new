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
declare var GLightbox: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  public portfolioItems = [
    {
      image: 'perfil_imoveis.png',
      name: 'Perfil Imóveis',
      category: 'Frontend',
      show: true
    },

    {
      image: 'perfil_imoveis_backend.png',
      name: 'Perfil Imóveis',
      category: 'Backend',
      show: true
    },

    {
      image: 'cidades_co.png',
      name: 'Cidades.co',
      category: 'Frontend',
      show: true
    },

    {
      image: 'cidades_co_backend.png',
      name: 'Cidades.co',
      category: 'Backend',
      show: true
    },

    {
      image: 'crieatividade.png',
      name: 'Crieatividade',
      category: 'Frontend',
      show: true
    },

    {
      image: 'crieatividade_backend.png',
      name: 'Crieatividade',
      category: 'Backend',
      show: true
    }

  ];

  constructor() {
  }

  ngOnInit(): void {

    this.initGLightbox();
  }

  public selecionar = ['category'];

  public filter(category: string) {

    this.portfolioItems.forEach(item => {

      if (category == 'All') {
        item.show = true;
      } else {
        item.show = (item.category == category);
      }
    });

    this.initGLightbox();
  }

  private initGLightbox(): void {
    setTimeout(() => {
      GLightbox({
        selector: '.glightbox-img',
        openEffect: 'zoom'
      });
    }, 500);
  }

}
