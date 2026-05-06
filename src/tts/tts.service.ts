import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class TtsService {
  private openai: OpenAI;

  constructor(private configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  // Combat-specific voiceover hooks
  getCombatHooks(combatStyle: string): string[] {
    const hooks: Record<string, string[]> = {
      BOXING: [
        'This is what proper technique looks like.',
        'The transformation speaks for itself.',
        'Hard work beats talent when talent doesn\'t work hard.',
        'Every champion was once a contender that refused to give up.',
        'Pain is temporary. Glory is forever.',
      ],
      MMA: [
        'Technique wins fights. Heart wins wars.',
        'The cage doesn\'t lie.',
        'Every second in here counts.',
        'Elbows open cuts. Knees end fights.',
        'This is how champions are made.',
      ],
      BJJ: [
        'The mat doesn\'t lie.',
        'It\'s not about being the strongest. It\'s about being the smartest.',
        'Position before submission. Always.',
        'Tap or win. There is no lose.',
        'Roll with it.',
      ],
      KICKBOXING: [
        'Strike first. Strike hard. No mercy.',
        'Hands up. Chin down. Let\'s work.',
        'Every kick is a lesson.',
        'The mitts don\'t lie — technique is everything.',
        'Combinations win fights. Power finishes them.',
      ],
      WRESTLING: [
        'Wrestle hard. Win easy.',
        'The takedown sets the tone.',
        'Grind until they quit.',
        'Strong legs, strong will.',
        'This is how champions wrestle.',
      ],
      MUAY_THAI: [
        'Thai boxing: eight limbs, one mission.',
        'Elbows like knives. Knees like hammers.',
        'The body is a weapon. Sharpen it daily.',
        'Clinch work separates the good from the great.',
        'Every round is a battle.',
      ],
      JUDO: [
        'Maximum efficiency, minimum effort.',
        'The throw is the signature.',
        'Kuzushi is the key to every throw.',
        'Balance breaks create opportunities.',
        'Ippon ends it all.',
      ],
      TAEKWONDO: [
        'Precision over power.',
        'Every kick tells a story.',
        'Spin. Kick. Finish.',
        'Flexibility is strength.',
        'Forms become fights.',
      ],
    };
    return hooks[combatStyle] || hooks['BOXING'];
  }

  selectRandomHook(combatStyle: string): string {
    const available = this.getCombatHooks(combatStyle);
    return available[Math.floor(Math.random() * available.length)];
  }

  async generateVoiceover(text: string, voice: 'alloy' | 'nova' | 'shimmer' = 'alloy'): Promise<Buffer> {
    const apiKey = this.configService.get('OPENAI_API_KEY');
    if (!apiKey) {
      // Return empty buffer in demo mode
      return Buffer.alloc(0);
    }

    try {
      const mp3 = await this.openai.audio.speech.create({
        model: 'gpt-4o-mini-tts',
        voice,
        input: text,
        response_format: 'mp3',
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());
      return buffer;
    } catch (error) {
      console.error('TTS generation failed:', error);
      return Buffer.alloc(0);
    }
  }

  async generateFromTemplate(
    combatStyle: string,
    voice: 'alloy' | 'nova' | 'shimmer' = 'alloy',
  ): Promise<{ text: string; audioBuffer: Buffer }> {
    const text = this.selectRandomHook(combatStyle);
    const audioBuffer = await this.generateVoiceover(text, voice);
    return { text, audioBuffer };
  }
}
