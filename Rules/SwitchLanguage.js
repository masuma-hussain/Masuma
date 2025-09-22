
export default async function SwitchLanguage(context) {
    // Get current app language
    let currentLang = context.getLanguage();

    // Toggle language
    let targetLang = currentLang === 'en' ? 'fi' : 'en';

    // Trigger action
    await context.executeAction(
        targetLang === 'fi'
            ? '/demosampleapp/Actions/LanguageSwitchFI.action'
            : '/demosampleapp/Actions/LanguageSwitchEN.action'
    );

    // Refresh page so translations are applied
    context.getPageProxy().redraw();
}