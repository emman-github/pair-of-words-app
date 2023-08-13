import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public text: string = '';
  public originalWords: Array<string> = [];
  public shuffledWords: Array<string> = [];
  public shuffledButtons: Array<any> = [];
  public correctButtons: Array<any> = [];
  public currentOriginalWordIndex: number = 0;
  public shuffledButtonsSectionHeight: number = 0;
  @ViewChild('shuffledButtonsSection', { static: true }) shuffledButtonsSection!: ElementRef;

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.load();
  }

  ngAfterViewInit() {
    this.observeButtonsSectionHeightChanges();
  }

  public load(): void {
    this.text = 'This is a long form text here';
    this.originalWords = this.separateWords(this.text);
    this.shuffledWords = this.shuffleWords(this.originalWords);
    this.shuffledButtons = this.setButtonsData(this.shuffledWords);
    this.correctButtons = [];
    this.currentOriginalWordIndex = 0;
    console.log(this.text);
    console.log(this.originalWords);
    console.log(this.shuffledWords);
    console.log(this.shuffledButtons);
  }
  
  public separateWords(text: string): Array<string> {
    return text.split(' ');
  }

  public shuffleWords(words: Array<string>): Array<string> {
    const shuffledWords = [...words];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
    }
    return shuffledWords;
  }

  public setButtonsData(shuffledWords: Array<any>): Array<any> {
    const buttons: Array<any> = [];
    shuffledWords.map((word: string, index: number) => {
      const originalWordIndex = this.originalWords.indexOf(word);
      buttons[index] = {
        index: originalWordIndex,
        word: word,
        color: 'dark',
        isDisabled: false,
        isDisabledPermanently: false
      }
    });
    return buttons;
  }

  public async onTapButton(button: any) {
    this.enableDisableButtons();
    const buttonIndex = this.shuffledButtons.indexOf(button);
    if (this.currentOriginalWordIndex === button.index) {
      this.shuffledButtons[buttonIndex].color = 'success';
      this.shuffledButtons[buttonIndex].isDisabledPermanently = true;
      this.currentOriginalWordIndex++;
      setTimeout(async () => {
        this.correctButtons.push(button);
        this.enableDisableButtons();
        await this.showAllDoneAlert();
        this.shuffledButtons[buttonIndex].color = 'medium';
      }, 300)
    } else {
      this.enableDisableButtons();
      this.shuffledButtons[buttonIndex].color = 'danger';
      setTimeout(async () => {
        this.shuffledButtons[buttonIndex].color = 'dark';
      }, 300)
    }
  }

  enableDisableButtons() {
    this.shuffledButtons = this.shuffledButtons.map((shuffledButton) => {
      shuffledButton.isDisabled = !shuffledButton.isDisabled;
      return shuffledButton;
    });
  }

  async showAllDoneAlert() {
    if (this.currentOriginalWordIndex === this.originalWords.length) {
      const alert = await this.alertController.create({
        message: 'All done',
        buttons: ['OK'],
        backdropDismiss: false
      });
  
      await alert.present();
    }
  }

  reset() {
    this.load();
  }

  private observeButtonsSectionHeightChanges() {
    const targetElement = this.shuffledButtonsSection.nativeElement;
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (this.shuffledButtonsSectionHeight === 0) {
        this.shuffledButtonsSectionHeight = entry.contentRect.height;
        }
        console.log('Div height changed:', this.shuffledButtonsSectionHeight);
      }
    });
    resizeObserver.observe(targetElement);
  }
}
