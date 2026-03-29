import { useLanguage } from '../LanguageContext';

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Me',
      body: `I am a passionate developer with a focus on creating clean, accessible, and meaningful digital experiences. 
      Inspired by the philosophy of "Minimal Mistakes," I believe that content should always be the hero of any website.
      
      This project serves as a demonstration of a multilingual React application, supporting English, German, and Nepali. 
      It uses modern tools like Tailwind CSS for styling and Framer Motion for smooth transitions.`
    },
    de: {
      title: 'Über mich',
      body: `Ich bin ein leidenschaftlicher Entwickler mit Fokus auf die Erstellung sauberer, zugänglicher und bedeutungsvoller digitaler Erlebnisse. 
      Inspiriert von der Philosophie von "Minimal Mistakes" glaube ich, dass der Inhalt immer der Held jeder Website sein sollte.
      
      Dieses Projekt dient als Demonstration einer mehrsprachigen React-Anwendung, die Englisch, Deutsch und Nepali unterstützt. 
      Es verwendet moderne Tools wie Tailwind CSS für das Styling und Framer Motion für reibungslose Übergänge.`
    },
    ne: {
      title: 'मेरो बारेमा',
      body: `म एक भावुक विकासकर्ता हुँ जसले सफा, पहुँचयोग्य र अर्थपूर्ण डिजिटल अनुभवहरू सिर्जना गर्नमा ध्यान केन्द्रित गर्दछु।
      "Minimal Mistakes" को दर्शनबाट प्रेरित भएर, म विश्वास गर्छु कि सामग्री सधैं कुनै पनि वेबसाइटको नायक हुनुपर्छ।
      
      यो परियोजना अंग्रेजी, जर्मन र नेपालीलाई समर्थन गर्ने बहुभाषी रिएक्ट अनुप्रयोगको प्रदर्शनको रूपमा काम गर्दछ।
      यसले स्टाइलका लागि टेलविन्ड CSS र सहज ट्रान्जिसनका लागि फ्रेम मोशन जस्ता आधुनिक उपकरणहरू प्रयोग गर्दछ।`
    }
  };

  const current = content[language as keyof typeof content];

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold mb-8">{current.title}</h1>
      <div className="text-gray-600 leading-loose space-y-6 whitespace-pre-line">
        {current.body}
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-lg font-bold mb-4">Skills</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• React & TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• Internationalization (i18n)</li>
            <li>• UI/UX Design</li>
          </ul>
        </div>
        <div className="p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-lg font-bold mb-4">Interests</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• Open Source Software</li>
            <li>• Typography</li>
            <li>• Digital Minimalism</li>
            <li>• Language Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
