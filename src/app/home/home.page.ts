import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Language, Translation } from '@capacitor-mlkit/translation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public englishText: string = '';
  public pairOfWords: Array<any> = [];
  // public readonly language = Language;
  // public translateFormGroup = new UntypedFormGroup({
  //   text: new UntypedFormControl(''),
  //   sourceLanguage: new UntypedFormControl(Language.English),
  //   targetLanguage: new UntypedFormControl(Language.German),
  //   translatedText: new UntypedFormControl(''),
  // });
  // public manageModelsFormGroup = new UntypedFormGroup({
  //   languages: new UntypedFormControl([]),
  // });
  // public disableSaveModelsButton = false;

  // private readonly githubUrl = 'https://github.com/robingenz/capacitor-mlkit';

  // constructor() {}

  // public ngOnInit(): void {
  //   this.getDownloadedModels();
  // }

  // public openOnGithub(): void {
  //   window.open(this.githubUrl, '_blank');
  // }

  // public async saveModels(): Promise<void> {
  //   this.disableSaveModelsButton = true;
  //   const languages: Language[] =
  //     this.manageModelsFormGroup.get('languages')?.value;
  //   if (!languages) {
  //     return;
  //   }
  //   for (const availableLanguage of Object.values(Language)) {
  //     if (languages.includes(availableLanguage)) {
  //       await Translation.downloadModel({ language: availableLanguage });
  //     } else {
  //       await Translation.deleteDownloadedModel({
  //         language: availableLanguage,
  //       });
  //     }
  //   }
  //   this.disableSaveModelsButton = false;
  // }

  // public async getDownloadedModels(): Promise<void> {
  //   const { languages } = await Translation.getDownloadedModels();
  //   this.manageModelsFormGroup.patchValue({ languages });
  // }

  // public async translate(): Promise<void> {
  //   const text = this.translateFormGroup.get('text')?.value;
  //   const sourceLanguage = this.translateFormGroup.get('sourceLanguage')?.value;
  //   const targetLanguage = this.translateFormGroup.get('targetLanguage')?.value;
  //   if (!text || !sourceLanguage || !targetLanguage) {
  //     return;
  //   }
  //   const result = await Translation.translate({
  //     text,
  //     sourceLanguage,
  //     targetLanguage,
  //   });
  //   this.translateFormGroup.patchValue({ translatedText: result.text });
  // }

  constructor() {
    this.englishText = 'horse,house,moon,landscape,car,woman';
    this.pairOfWords = [
      {
        english: 'horse',
        translated: 'auto'
      },
      {
        english: 'house',
        translated: 'frau'
      },
      {
        english: 'moon',
        translated: 'landschaft'
      },
      {
        english: 'landscape',
        translated: 'mond'
      },
      {
        english: 'car',
        translated: 'pferd'
      },
      {
        english: 'woman',
        translated: 'haus'
      }
    ]
  }
}
