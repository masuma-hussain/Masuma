export default function GetTargetLanguageCaption(context) {
    let currentLang = context.getLanguage();
    // Show the target language (what the user will switch to)
    return currentLang === 'en' ? 'FI' : 'EN';
}