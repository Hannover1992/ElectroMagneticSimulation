import { Component, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

// Add this line to declare MathJax
declare var MathJax: any;

@Component({
  selector: 'app-math-jax',
  standalone: true,
  imports: [],
  templateUrl: './math-jax.component.html',
  styleUrls: ['./math-jax.component.css']
})
export class MathJaxComponent implements AfterViewInit {
  @ViewChild('mathJaxContainer') mathJaxContainer!: ElementRef;
  @Input() mathContent: string = `
  <div>
    <section>
      <h2>Step 2: The Electric Field</h2>
      <p>The electric field E at a point in space is defined as the force F per unit charge q that a positive test charge would experience if placed at that point. It is given by:
      <p>\\[E = k \\cdot \\frac{q}{r^2}\\]</p>
    </section>
    <section>
      <h2>Step 3: Principle of Superposition</h2>
      <p>The total electric field due to multiple charges is the vector sum of the individual fields each charge contributes. This is expressed as:</p>
      <p>\\[E_{\\text{total}} = \\sum_{i=1}^{n} E_i\\]</p>
    </section>
  </div>
  `;

  loadMathJaxScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js';
      script.async = true;

      script.onload = () => resolve();
      script.onerror = () => reject('MathJax failed to load');

      document.head.appendChild(script);
    });
  }

  ngAfterViewInit() {
    this.loadMathJaxScript().then(() => {
      this.renderMath();
    });
  }

  renderMath() {
    if (this.mathContent) {
      this.mathJaxContainer.nativeElement.innerHTML = this.mathContent;
      MathJax.typesetPromise([this.mathJaxContainer.nativeElement]);
    }
  }
}
