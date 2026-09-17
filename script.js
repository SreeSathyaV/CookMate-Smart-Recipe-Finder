/* =========================================================
   COOKMATE - MAIN JAVASCRIPT
   Multilingual + Search + Animation
   File: js/script.js
   ========================================================= */


/* =========================================================
   1. LANGUAGE TRANSLATIONS
========================================================= */

const translations = {

    en: {

        language: "Language",

        home: "Home",
        recipes: "Recipes",
        ingredients: "Ingredients",
        equipment: "Equipment",
        favourites: "Favourites",
        profile: "Profile",

        welcome: "Welcome to CookMate",
        cookToday: "Cook Something Delicious Today!",
        cookingCompanion:
            "Your smart cooking companion for simple and delicious recipes.",

        searchPlaceholder: "Search for a recipe...",
        search: "Search",

        exploreRecipes: "Explore Recipes",
        whatDoIHave: "What Do I Have?",

        cookSmarter: "COOK SMARTER",
        everythingYouNeed: "Everything You Need",

        ingredientsAtHome: "Ingredients at Home",
        ingredientsDescription:
            "Select the ingredients you have and discover recipes you can make.",
        findRecipes: "Find Recipes",

        kitchenEquipment: "Kitchen Equipment",
        equipmentDescription:
            "Choose the cooking equipment available in your kitchen.",
        checkEquipment: "Check Equipment",

        favouriteRecipes: "Favourite Recipes",
        favouriteDescription:
            "Save your favourite recipes and access them anytime.",
        viewFavourites: "View Favourites",

        explore: "EXPLORE",
        recipeCategories: "Recipe Categories",

        vegetarian: "Vegetarian",
        vegetarianDescription:
            "Healthy and delicious vegetarian recipes for everyday cooking.",
        viewVeg: "View Veg Recipes",

        nonVegetarian: "Non-Vegetarian",
        nonVegetarianDescription:
            "Tasty chicken, egg and other non-vegetarian recipes.",
        viewNonVeg: "View Non-Veg Recipes",

        sweets: "Sweets",
        sweetsDescription:
            "Sweet and delicious desserts for every occasion.",
        viewSweets: "View Sweets",

        snacks: "Snacks",
        snacksDescription:
            "Quick and crispy snacks for your evening cravings.",
        viewSnacks: "View Snacks",

        popular: "POPULAR",
        popularRecipes: "Popular Recipes",

        chickenBiryani: "Chicken Biryani",
        masalaDosa: "Masala Dosa",
        paneerButterMasala: "Paneer Butter Masala",
        gulabJamun: "Gulab Jamun",

        nonVeg: "Non-Veg",
        veg: "Veg",

        viewRecipe: "View Recipe",
        viewAllRecipes: "View All Recipes",

        smartCooking: "SMART COOKING",
        notSure: "Not Sure What to Cook?",

        chooseIngredients: "Choose Ingredients",
        chooseEquipment: "Choose Equipment",

        simpleSteps: "SIMPLE STEPS",
        howCookMateWorks: "How CookMate Works",

        step1Title: "Choose Ingredients",
        step1Description:
            "Select the ingredients available in your kitchen.",

        step2Title: "Choose Equipment",
        step2Description:
            "Select the cooking equipment you have available.",

        step3Title: "Find Your Recipe",
        step3Description:
            "CookMate recommends recipes based on your available items.",

        step4Title: "Start Cooking",
        step4Description:
            "Follow the step-by-step instructions and enjoy your meal.",

        footerDescription:
            "Your smart cooking companion for simple and delicious recipes.",

        madeForFoodLovers:
            "Made for food lovers ❤️",

        pleaseEnterRecipe:
            "Please enter a recipe name to search.",

        saved: "Saved!",
        saveRecipe: "Save Recipe",
        recipeSaved: "Recipe saved to favourites!",
        recipeRemoved: "Recipe removed from favourites."
    },


    ta: {

        language: "மொழி",

        home: "முகப்பு",
        recipes: "சமையல் குறிப்புகள்",
        ingredients: "பொருட்கள்",
        equipment: "சமையல் சாதனங்கள்",
        favourites: "விருப்பமானவை",
        profile: "சுயவிவரம்",

        welcome: "CookMate-க்கு வரவேற்கிறோம்",
        cookToday: "இன்று சுவையான உணவை சமைப்போம்!",
        cookingCompanion:
            "எளிமையான மற்றும் சுவையான உணவுகளை சமைக்க உங்கள் ஸ்மார்ட் சமையல் துணை.",

        searchPlaceholder: "சமையல் குறிப்பைத் தேடுங்கள்...",
        search: "தேடு",

        exploreRecipes: "சமையல் குறிப்புகளைப் பார்க்க",
        whatDoIHave: "என்னிடம் என்ன இருக்கிறது?",

        cookSmarter: "ஸ்மார்ட்டாக சமைக்கலாம்",
        everythingYouNeed: "உங்களுக்கு தேவையான அனைத்தும்",

        ingredientsAtHome: "வீட்டில் உள்ள பொருட்கள்",
        ingredientsDescription:
            "உங்களிடம் உள்ள பொருட்களைத் தேர்ந்தெடுத்து சமைக்கக்கூடிய உணவுகளை கண்டறியுங்கள்.",
        findRecipes: "சமையல் குறிப்புகளைக் கண்டுபிடி",

        kitchenEquipment: "சமையல் சாதனங்கள்",
        equipmentDescription:
            "உங்கள் சமையலறையில் உள்ள சாதனங்களைத் தேர்ந்தெடுக்கவும்.",
        checkEquipment: "சாதனங்களைப் பார்க்க",

        favouriteRecipes: "விருப்பமான சமையல் குறிப்புகள்",
        favouriteDescription:
            "உங்களுக்கு பிடித்த சமையல் குறிப்புகளை சேமித்து எப்போது வேண்டுமானாலும் பார்க்கலாம்.",
        viewFavourites: "விருப்பமானவற்றைப் பார்க்க",

        explore: "ஆராயுங்கள்",
        recipeCategories: "சமையல் வகைகள்",

        vegetarian: "சைவம்",
        vegetarianDescription:
            "தினசரி சமையலுக்கு ஆரோக்கியமான மற்றும் சுவையான சைவ உணவுகள்.",
        viewVeg: "சைவ உணவுகளைப் பார்க்க",

        nonVegetarian: "அசைவம்",
        nonVegetarianDescription:
            "சுவையான சிக்கன், முட்டை மற்றும் பிற அசைவ உணவுகள்.",
        viewNonVeg: "அசைவ உணவுகளைப் பார்க்க",

        sweets: "இனிப்புகள்",
        sweetsDescription:
            "அனைத்து சந்தர்ப்பங்களுக்கும் சுவையான இனிப்பு வகைகள்.",
        viewSweets: "இனிப்புகளைப் பார்க்க",

        snacks: "சிற்றுண்டிகள்",
        snacksDescription:
            "மாலை நேரத்திற்கு விரைவான மற்றும் மொறுமொறுப்பான சிற்றுண்டிகள்.",
        viewSnacks: "சிற்றுண்டிகளைப் பார்க்க",

        popular: "பிரபலமானவை",
        popularRecipes: "பிரபலமான சமையல் குறிப்புகள்",

        chickenBiryani: "சிக்கன் பிரியாணி",
        masalaDosa: "மசாலா தோசை",
        paneerButterMasala: "பனீர் பட்டர் மசாலா",
        gulabJamun: "குலாப் ஜாமூன்",

        nonVeg: "அசைவம்",
        veg: "சைவம்",

        viewRecipe: "செய்முறையைப் பார்க்க",
        viewAllRecipes: "அனைத்து சமையல் குறிப்புகளும்",

        smartCooking: "ஸ்மார்ட் சமையல்",
        notSure: "என்ன சமைப்பது என்று தெரியவில்லையா?",

        chooseIngredients: "பொருட்களைத் தேர்ந்தெடு",
        chooseEquipment: "சாதனங்களைத் தேர்ந்தெடு",

        simpleSteps: "எளிய படிகள்",
        howCookMateWorks: "CookMate எப்படி வேலை செய்கிறது?",

        step1Title: "பொருட்களைத் தேர்ந்தெடுக்கவும்",
        step1Description:
            "உங்கள் சமையலறையில் உள்ள பொருட்களைத் தேர்ந்தெடுக்கவும்.",

        step2Title: "சமையல் சாதனங்களைத் தேர்ந்தெடுக்கவும்",
        step2Description:
            "உங்களிடம் உள்ள சமையல் சாதனங்களைத் தேர்ந்தெடுக்கவும்.",

        step3Title: "சமையல் குறிப்பைக் கண்டுபிடிக்கவும்",
        step3Description:
            "உங்களிடம் உள்ள பொருட்களின் அடிப்படையில் CookMate உணவுகளை பரிந்துரைக்கும்.",

        step4Title: "சமைக்கத் தொடங்குங்கள்",
        step4Description:
            "படிப்படியான செய்முறையைப் பின்பற்றி உணவை அனுபவிக்கவும்.",

        footerDescription:
            "எளிமையான மற்றும் சுவையான உணவுகளை சமைக்க உங்கள் ஸ்மார்ட் சமையல் துணை.",

        madeForFoodLovers:
            "உணவு விரும்பிகளுக்காக உருவாக்கப்பட்டது ❤️",

        pleaseEnterRecipe:
            "தேடுவதற்கு ஒரு சமையல் குறிப்பின் பெயரை உள்ளிடவும்.",

        saved: "சேமிக்கப்பட்டது!",
        saveRecipe: "சமையல் குறிப்பை சேமி",
        recipeSaved: "சமையல் குறிப்பு விருப்பமானவற்றில் சேமிக்கப்பட்டது!",
        recipeRemoved: "சமையல் குறிப்பு விருப்பமானவற்றிலிருந்து நீக்கப்பட்டது."
    },


    hi: {

        language: "भाषा",

        home: "होम",
        recipes: "रेसिपी",
        ingredients: "सामग्री",
        equipment: "रसोई उपकरण",
        favourites: "पसंदीदा",
        profile: "प्रोफ़ाइल",

        welcome: "CookMate में आपका स्वागत है",
        cookToday: "आज कुछ स्वादिष्ट बनाएं!",
        cookingCompanion:
            "सरल और स्वादिष्ट भोजन बनाने के लिए आपका स्मार्ट कुकिंग साथी।",

        searchPlaceholder: "रेसिपी खोजें...",
        search: "खोजें",

        exploreRecipes: "रेसिपी देखें",
        whatDoIHave: "मेरे पास क्या है?",

        cookSmarter: "स्मार्ट कुकिंग",
        everythingYouNeed: "आपको जो कुछ चाहिए",

        ingredientsAtHome: "घर में उपलब्ध सामग्री",
        ingredientsDescription:
            "अपने पास मौजूद सामग्री चुनें और बनाई जा सकने वाली रेसिपी खोजें।",
        findRecipes: "रेसिपी खोजें",

        kitchenEquipment: "रसोई उपकरण",
        equipmentDescription:
            "अपनी रसोई में उपलब्ध उपकरण चुनें।",
        checkEquipment: "उपकरण देखें",

        favouriteRecipes: "पसंदीदा रेसिपी",
        favouriteDescription:
            "अपनी पसंदीदा रेसिपी सेव करें और कभी भी देखें।",
        viewFavourites: "पसंदीदा देखें",

        explore: "खोजें",
        recipeCategories: "रेसिपी श्रेणियां",

        vegetarian: "शाकाहारी",
        vegetarianDescription:
            "रोज़ाना के लिए स्वस्थ और स्वादिष्ट शाकाहारी भोजन।",
        viewVeg: "शाकाहारी रेसिपी देखें",

        nonVegetarian: "मांसाहारी",
        nonVegetarianDescription:
            "स्वादिष्ट चिकन, अंडा और अन्य मांसाहारी व्यंजन।",
        viewNonVeg: "मांसाहारी रेसिपी देखें",

        sweets: "मिठाइयां",
        sweetsDescription:
            "हर अवसर के लिए स्वादिष्ट मिठाइयां।",
        viewSweets: "मिठाइयां देखें",

        snacks: "स्नैक्स",
        snacksDescription:
            "शाम के लिए जल्दी बनने वाले कुरकुरे स्नैक्स।",
        viewSnacks: "स्नैक्स देखें",

        popular: "लोकप्रिय",
        popularRecipes: "लोकप्रिय रेसिपी",

        chickenBiryani: "चिकन बिरयानी",
        masalaDosa: "मसाला डोसा",
        paneerButterMasala: "पनीर बटर मसाला",
        gulabJamun: "गुलाब जामुन",

        nonVeg: "मांसाहारी",
        veg: "शाकाहारी",

        viewRecipe: "रेसिपी देखें",
        viewAllRecipes: "सभी रेसिपी देखें",

        smartCooking: "स्मार्ट कुकिंग",
        notSure: "क्या बनाएं समझ नहीं आ रहा?",

        chooseIngredients: "सामग्री चुनें",
        chooseEquipment: "उपकरण चुनें",

        simpleSteps: "सरल चरण",
        howCookMateWorks: "CookMate कैसे काम करता है?",

        step1Title: "सामग्री चुनें",
        step1Description:
            "अपनी रसोई में उपलब्ध सामग्री चुनें।",

        step2Title: "उपकरण चुनें",
        step2Description:
            "अपने पास उपलब्ध रसोई उपकरण चुनें।",

        step3Title: "रेसिपी खोजें",
        step3Description:
            "CookMate आपकी उपलब्ध चीज़ों के आधार पर रेसिपी सुझाएगा।",

        step4Title: "खाना बनाना शुरू करें",
        step4Description:
            "स्टेप-बाय-स्टेप निर्देशों का पालन करें और भोजन का आनंद लें।",

        footerDescription:
            "सरल और स्वादिष्ट भोजन बनाने के लिए आपका स्मार्ट कुकिंग साथी।",

        madeForFoodLovers:
            "खाने के शौकीनों के लिए बनाया गया ❤️",

        pleaseEnterRecipe:
            "कृपया खोजने के लिए रेसिपी का नाम लिखें।",

        saved: "सेव किया गया!",
        saveRecipe: "रेसिपी सेव करें",
        recipeSaved: "रेसिपी पसंदीदा में सेव की गई!",
        recipeRemoved: "रेसिपी पसंदीदा से हटा दी गई।"
    },


    ml: {

        language: "ഭാഷ",

        home: "ഹോം",
        recipes: "പാചകക്കുറിപ്പുകൾ",
        ingredients: "ചേരുവകൾ",
        equipment: "അടുക്കള ഉപകരണങ്ങൾ",
        favourites: "പ്രിയപ്പെട്ടവ",
        profile: "പ്രൊഫൈൽ",

        welcome: "CookMate-ലേക്ക് സ്വാഗതം",
        cookToday: "ഇന്ന് രുചികരമായ ഭക്ഷണം ഉണ്ടാക്കാം!",
        cookingCompanion:
            "ലളിതവും രുചികരവുമായ ഭക്ഷണം തയ്യാറാക്കാനുള്ള നിങ്ങളുടെ സ്മാർട്ട് കുക്കിംഗ് കൂട്ടുകാരൻ.",

        searchPlaceholder: "പാചകക്കുറിപ്പ് തിരയുക...",
        search: "തിരയുക",

        exploreRecipes: "പാചകക്കുറിപ്പുകൾ കാണുക",
        whatDoIHave: "എന്റെ കൈവശം എന്തുണ്ട്?",

        cookSmarter: "സ്മാർട്ട് കുക്കിംഗ്",
        everythingYouNeed: "നിങ്ങൾക്ക് ആവശ്യമുള്ളതെല്ലാം",

        ingredientsAtHome: "വീട്ടിലുള്ള ചേരുവകൾ",
        ingredientsDescription:
            "നിങ്ങളുടെ കൈവശമുള്ള ചേരുവകൾ തിരഞ്ഞെടുത്ത് ഉണ്ടാക്കാൻ കഴിയുന്ന വിഭവങ്ങൾ കണ്ടെത്തുക.",
        findRecipes: "പാചകക്കുറിപ്പുകൾ കണ്ടെത്തുക",

        kitchenEquipment: "അടുക്കള ഉപകരണങ്ങൾ",
        equipmentDescription:
            "നിങ്ങളുടെ അടുക്കളയിൽ ലഭ്യമായ ഉപകരണങ്ങൾ തിരഞ്ഞെടുക്കുക.",
        checkEquipment: "ഉപകരണങ്ങൾ കാണുക",

        favouriteRecipes: "പ്രിയപ്പെട്ട പാചകക്കുറിപ്പുകൾ",
        favouriteDescription:
            "നിങ്ങളുടെ പ്രിയപ്പെട്ട പാചകക്കുറിപ്പുകൾ സംരക്ഷിച്ച് എപ്പോൾ വേണമെങ്കിലും കാണുക.",
        viewFavourites: "പ്രിയപ്പെട്ടവ കാണുക",

        explore: "പര്യവേക്ഷണം",
        recipeCategories: "പാചക വിഭാഗങ്ങൾ",

        vegetarian: "സസ്യാഹാരം",
        vegetarianDescription:
            "ദൈനംദിനത്തിനുള്ള ആരോഗ്യകരവും രുചികരവുമായ സസ്യാഹാര വിഭവങ്ങൾ.",
        viewVeg: "സസ്യാഹാര വിഭവങ്ങൾ കാണുക",

        nonVegetarian: "മാംസാഹാരം",
        nonVegetarianDescription:
            "രുചികരമായ ചിക്കൻ, മുട്ട തുടങ്ങിയ മാംസാഹാര വിഭവങ്ങൾ.",
        viewNonVeg: "മാംസാഹാര വിഭവങ്ങൾ കാണുക",

        sweets: "മധുരപലഹാരങ്ങൾ",
        sweetsDescription:
            "എല്ലാ അവസരങ്ങൾക്കും രുചികരമായ മധുരപലഹാരങ്ങൾ.",
        viewSweets: "മധുരപലഹാരങ്ങൾ കാണുക",

        snacks: "സ്നാക്കുകൾ",
        snacksDescription:
            "വൈകുന്നേരത്തിനുള്ള വേഗത്തിൽ തയ്യാറാക്കാവുന്ന ക്രിസ്പി സ്നാക്കുകൾ.",
        viewSnacks: "സ്നാക്കുകൾ കാണുക",

        popular: "ജനപ്രിയം",
        popularRecipes: "ജനപ്രിയ പാചകക്കുറിപ്പുകൾ",

        chickenBiryani: "ചിക്കൻ ബിരിയാണി",
        masalaDosa: "മസാല ദോശ",
        paneerButterMasala: "പനീർ ബട്ടർ മസാല",
        gulabJamun: "ഗുലാബ് ജാമുൻ",

        nonVeg: "മാംസാഹാരം",
        veg: "സസ്യാഹാരം",

        viewRecipe: "പാചകക്കുറിപ്പ് കാണുക",
        viewAllRecipes: "എല്ലാ പാചകക്കുറിപ്പുകളും",

        smartCooking: "സ്മാർട്ട് കുക്കിംഗ്",
        notSure: "എന്ത് പാചകം ചെയ്യണമെന്ന് അറിയില്ലേ?",

        chooseIngredients: "ചേരുവകൾ തിരഞ്ഞെടുക്കുക",
        chooseEquipment: "ഉപകരണങ്ങൾ തിരഞ്ഞെടുക്കുക",

        simpleSteps: "ലളിതമായ ഘട്ടങ്ങൾ",
        howCookMateWorks: "CookMate എങ്ങനെ പ്രവർത്തിക്കുന്നു?",

        step1Title: "ചേരുവകൾ തിരഞ്ഞെടുക്കുക",
        step1Description:
            "നിങ്ങളുടെ അടുക്കളയിൽ ലഭ്യമായ ചേരുവകൾ തിരഞ്ഞെടുക്കുക.",

        step2Title: "ഉപകരണങ്ങൾ തിരഞ്ഞെടുക്കുക",
        step2Description:
            "നിങ്ങളുടെ കൈവശമുള്ള പാചക ഉപകരണങ്ങൾ തിരഞ്ഞെടുക്കുക.",

        step3Title: "പാചകക്കുറിപ്പ് കണ്ടെത്തുക",
        step3Description:
            "നിങ്ങളുടെ കൈവശമുള്ള സാധനങ്ങളുടെ അടിസ്ഥാനത്തിൽ CookMate വിഭവങ്ങൾ നിർദ്ദേശിക്കും.",

        step4Title: "പാചകം ആരംഭിക്കുക",
        step4Description:
            "ഘട്ടം ഘട്ടമായുള്ള നിർദ്ദേശങ്ങൾ പിന്തുടർന്ന് ഭക്ഷണം ആസ്വദിക്കുക.",

        footerDescription:
            "ലളിതവും രുചികരവുമായ ഭക്ഷണം തയ്യാറാക്കാനുള്ള നിങ്ങളുടെ സ്മാർട്ട് കുക്കിംഗ് കൂട്ടുകാരൻ.",

        madeForFoodLovers:
            "ഭക്ഷണപ്രേമികൾക്കായി ❤️",

        pleaseEnterRecipe:
            "തിരയാൻ ഒരു പാചകക്കുറിപ്പിന്റെ പേര് നൽകുക.",

        saved: "സംരക്ഷിച്ചു!",
        saveRecipe: "പാചകക്കുറിപ്പ് സംരക്ഷിക്കുക",
        recipeSaved: "പാചകക്കുറിപ്പ് പ്രിയപ്പെട്ടവയിൽ സംരക്ഷിച്ചു!",
        recipeRemoved: "പാചകക്കുറിപ്പ് പ്രിയപ്പെട്ടവയിൽ നിന്ന് നീക്കം ചെയ്തു."
    },


    te: {

        language: "భాష",

        home: "హోమ్",
        recipes: "వంటకాలు",
        ingredients: "పదార్థాలు",
        equipment: "వంటగది పరికరాలు",
        favourites: "ఇష్టమైనవి",
        profile: "ప్రొఫైల్",

        welcome: "CookMate కు స్వాగతం",
        cookToday: "ఈరోజు రుచికరమైన వంటకం తయారు చేద్దాం!",
        cookingCompanion:
            "సులభమైన మరియు రుచికరమైన వంటకాలు తయారు చేయడానికి మీ స్మార్ట్ కుకింగ్ సహాయకుడు.",

        searchPlaceholder: "వంటకం కోసం వెతకండి...",
        search: "వెతకండి",

        exploreRecipes: "వంటకాలను చూడండి",
        whatDoIHave: "నా దగ్గర ఏమి ఉన్నాయి?",

        cookSmarter: "స్మార్ట్ కుకింగ్",
        everythingYouNeed: "మీకు కావాల్సిన ప్రతిదీ",

        ingredientsAtHome: "ఇంట్లో ఉన్న పదార్థాలు",
        ingredientsDescription:
            "మీ దగ్గర ఉన్న పదార్థాలను ఎంచుకుని తయారు చేయగల వంటకాలను కనుగొనండి.",
        findRecipes: "వంటకాలను కనుగొనండి",

        kitchenEquipment: "వంటగది పరికరాలు",
        equipmentDescription:
            "మీ వంటగదిలో ఉన్న పరికరాలను ఎంచుకోండి.",
        checkEquipment: "పరికరాలను చూడండి",

        favouriteRecipes: "ఇష్టమైన వంటకాలు",
        favouriteDescription:
            "మీకు ఇష్టమైన వంటకాలను సేవ్ చేసి ఎప్పుడైనా చూడండి.",
        viewFavourites: "ఇష్టమైనవి చూడండి",

        explore: "అన్వేషించండి",
        recipeCategories: "వంటకాల విభాగాలు",

        vegetarian: "శాకాహారం",
        vegetarianDescription:
            "ప్రతిరోజూ తినడానికి ఆరోగ్యకరమైన మరియు రుచికరమైన శాకాహార వంటకాలు.",
        viewVeg: "శాకాహార వంటకాలు",

        nonVegetarian: "మాంసాహారం",
        nonVegetarianDescription:
            "రుచికరమైన చికెన్, గుడ్డు మరియు ఇతర మాంసాహార వంటకాలు.",
        viewNonVeg: "మాంసాహార వంటకాలు",

        sweets: "తీపి వంటకాలు",
        sweetsDescription:
            "ప్రతి సందర్భానికి రుచికరమైన తీపి వంటకాలు.",
        viewSweets: "తీపి వంటకాలు",

        snacks: "స్నాక్స్",
        snacksDescription:
            "సాయంత్రం కోసం త్వరగా తయారు చేయగల క్రిస్పీ స్నాక్స్.",
        viewSnacks: "స్నాక్స్ చూడండి",

        popular: "ప్రసిద్ధమైనవి",
        popularRecipes: "ప్రసిద్ధ వంటకాలు",

        chickenBiryani: "చికెన్ బిర్యానీ",
        masalaDosa: "మసాలా దోస",
        paneerButterMasala: "పనీర్ బటర్ మసాలా",
        gulabJamun: "గులాబ్ జామున్",

        nonVeg: "మాంసాహారం",
        veg: "శాకాహారం",

        viewRecipe: "వంటకం చూడండి",
        viewAllRecipes: "అన్ని వంటకాలు చూడండి",

        smartCooking: "స్మార్ట్ కుకింగ్",
        notSure: "ఏం వండాలో తెలియడం లేదా?",

        chooseIngredients: "పదార్థాలను ఎంచుకోండి",
        chooseEquipment: "పరికరాలను ఎంచుకోండి",

        simpleSteps: "సులభమైన దశలు",
        howCookMateWorks: "CookMate ఎలా పనిచేస్తుంది?",

        step1Title: "పదార్థాలను ఎంచుకోండి",
        step1Description:
            "మీ వంటగదిలో ఉన్న పదార్థాలను ఎంచుకోండి.",

        step2Title: "పరికరాలను ఎంచుకోండి",
        step2Description:
            "మీ దగ్గర ఉన్న వంటగది పరికరాలను ఎంచుకోండి.",

        step3Title: "వంటకాన్ని కనుగొనండి",
        step3Description:
            "మీ దగ్గర ఉన్న వస్తువుల ఆధారంగా CookMate వంటకాలను సూచిస్తుంది.",

        step4Title: "వంట ప్రారంభించండి",
        step4Description:
            "దశలవారీ సూచనలను అనుసరించి మీ భోజనాన్ని ఆస్వాదించండి.",

        footerDescription:
            "సులభమైన మరియు రుచికరమైన వంటకాలు తయారు చేయడానికి మీ స్మార్ట్ కుకింగ్ సహాయకుడు.",

        madeForFoodLovers:
            "ఆహార ప్రియుల కోసం ❤️",

        pleaseEnterRecipe:
            "వెతకడానికి వంటకం పేరు నమోదు చేయండి.",

        saved: "సేవ్ చేయబడింది!",
        saveRecipe: "వంటకాన్ని సేవ్ చేయండి",
        recipeSaved: "వంటకం ఇష్టమైన వాటిలో సేవ్ చేయబడింది!",
        recipeRemoved: "వంటకం ఇష్టమైన వాటి నుండి తొలగించబడింది."
    }

};


/* =========================================================
   2. LANGUAGE NAMES
========================================================= */

const languageNames = {
    en: "🇬🇧 English",
    ta: "🇮🇳 தமிழ்",
    hi: "🇮🇳 हिन्दी",
    ml: "🇮🇳 മലയാളം",
    te: "🇮🇳 తెలుగు"
};


/* =========================================================
   3. GET CURRENT LANGUAGE
========================================================= */

function getCurrentLanguage() {

    return localStorage.getItem("cookmateLanguage") || "en";

}


/* =========================================================
   4. SET LANGUAGE
========================================================= */

function setLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    localStorage.setItem(
        "cookmateLanguage",
        language
    );

    applyLanguage(language);

}


/* =========================================================
   5. APPLY LANGUAGE
========================================================= */

function applyLanguage(language = getCurrentLanguage()) {

    const dictionary =
        translations[language] || translations.en;


    /*
     * Change HTML language
     */
    document.documentElement.lang = language;


    /*
     * Change elements having data-i18n
     */
    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(element) {

            const key =
                element.getAttribute("data-i18n");

            if (dictionary[key]) {

                element.textContent =
                    dictionary[key];

            }

        });


    /*
     * Change placeholders
     */
    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(function(element) {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (dictionary[key]) {

                element.placeholder =
                    dictionary[key];

            }

        });


    /*
     * Update common existing text
     */
    translateExistingPage(language);


    /*
     * Update language selector
     */
    const selector =
        document.getElementById(
            "cookmateLanguageSelect"
        );

    if (selector) {

        selector.value = language;

    }

}


/* =========================================================
   6. TRANSLATE EXISTING PAGE
========================================================= */

function translateExistingPage(language) {

    const dictionary =
        translations[language] || translations.en;


    const textMap = {

        "Home": "home",
        "Recipes": "recipes",
        "Ingredients": "ingredients",
        "Equipment": "equipment",
        "Favourites": "favourites",
        "Profile": "profile",

        "Welcome to CookMate": "welcome",

        "COOK SMARTER": "cookSmarter",
        "Everything You Need": "everythingYouNeed",

        "Ingredients at Home": "ingredientsAtHome",
        "Kitchen Equipment": "kitchenEquipment",
        "Favourite Recipes": "favouriteRecipes",

        "EXPLORE": "explore",
        "Recipe Categories": "recipeCategories",

        "Vegetarian": "vegetarian",
        "Non-Vegetarian": "nonVegetarian",
        "Sweets": "sweets",
        "Snacks": "snacks",

        "POPULAR": "popular",
        "Popular Recipes": "popularRecipes",

        "Chicken Biryani": "chickenBiryani",
        "Masala Dosa": "masalaDosa",
        "Paneer Butter Masala": "paneerButterMasala",
        "Gulab Jamun": "gulabJamun",

        "Veg": "veg",
        "Non-Veg": "nonVeg",

        "View Recipe →": "viewRecipe",
        "View Recipe": "viewRecipe",
        "View All Recipes →": "viewAllRecipes",

        "SMART COOKING": "smartCooking",
        "Not Sure What to Cook?": "notSure",

        "Choose Ingredients": "chooseIngredients",
        "Choose Equipment": "chooseEquipment",

        "SIMPLE STEPS": "simpleSteps",
        "How CookMate Works": "howCookMateWorks",

        "Choose Ingredients": "step1Title",
        "Choose Equipment": "step2Title",
        "Find Your Recipe": "step3Title",
        "Start Cooking": "step4Title",

        "Made for food lovers ❤️": "madeForFoodLovers"

    };


    /*
     * Only translate small UI elements.
     * Avoid replacing large containers.
     */
    document
        .querySelectorAll(
            "a, button, h1, h2, h3, h4, h5, h6, " +
            "p, span, label, option"
        )
        .forEach(function(element) {

            /*
             * Skip elements with children.
             */
            if (
                element.children.length > 0 &&
                element.tagName !== "OPTION"
            ) {
                return;
            }


            const originalText =
                element.textContent.trim();


            const key =
                textMap[originalText];


            if (key && dictionary[key]) {

                element.textContent =
                    dictionary[key];

            }

        });


    /*
     * Search placeholders
     */
    document
        .querySelectorAll("input")
        .forEach(function(input) {

            const placeholder =
                input.getAttribute("placeholder");

            if (
                placeholder ===
                "Search for a recipe..."
            ) {

                input.placeholder =
                    dictionary.searchPlaceholder;

            }

        });

}


/* =========================================================
   7. CREATE LANGUAGE SELECTOR
========================================================= */

function createLanguageSelector() {

    /*
     * Don't create duplicate selector
     */
    if (
        document.getElementById(
            "cookmateLanguageSelect"
        )
    ) {
        return;
    }


    const navbar =
        document.querySelector(".navbar");


    if (!navbar) {
        return;
    }


    const selectorWrapper =
        document.createElement("div");


    selectorWrapper.className =
        "cookmate-language-wrapper";


    const label =
        document.createElement("span");


    label.className =
        "cookmate-language-label";


    label.textContent =
        "🌐";


    const select =
        document.createElement("select");


    select.id =
        "cookmateLanguageSelect";


    Object.keys(languageNames)
        .forEach(function(language) {

            const option =
                document.createElement("option");

            option.value =
                language;

            option.textContent =
                languageNames[language];

            select.appendChild(option);

        });


    select.value =
        getCurrentLanguage();


    select.addEventListener(
        "change",
        function() {

            setLanguage(
                this.value
            );

        }
    );


    selectorWrapper.appendChild(label);
    selectorWrapper.appendChild(select);


    navbar.appendChild(
        selectorWrapper
    );


    addLanguageStyles();

}


/* =========================================================
   8. LANGUAGE SELECTOR STYLE
========================================================= */

function addLanguageStyles() {

    if (
        document.getElementById(
            "cookmateLanguageStyles"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "cookmateLanguageStyles";


    style.textContent = `

        .cookmate-language-wrapper {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-left: 10px;
        }

        .cookmate-language-label {
            font-size: 18px;
        }

        #cookmateLanguageSelect {
            padding: 7px 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #ffffff;
            color: #333333;
            cursor: pointer;
            font-size: 13px;
            outline: none;
        }

        #cookmateLanguageSelect:focus {
            border-color: #d97706;
        }

        @media (max-width: 700px) {

            .cookmate-language-wrapper {
                margin-left: 0;
            }

            #cookmateLanguageSelect {
                font-size: 12px;
            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   9. HOME SEARCH
========================================================= */

function searchRecipe() {

    const searchInput =
        document.getElementById(
            "homeSearch"
        );


    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value.trim();


    if (searchText === "") {

        const language =
            getCurrentLanguage();


        alert(
            translations[language]
                .pleaseEnterRecipe
        );


        searchInput.focus();

        return;
    }


    window.location.href =
        "recipes.html?search=" +
        encodeURIComponent(searchText);

}


/* =========================================================
   10. SEARCH ENTER KEY
========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById(
            "homeSearch"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                searchRecipe();

            }

        }
    );

}


/* =========================================================
   11. BUTTON ANIMATION
========================================================= */

function setupButtonAnimation() {

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn"
        );


    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                button.classList.add(
                    "button-clicked"
                );


                setTimeout(
                    function() {

                        button.classList.remove(
                            "button-clicked"
                        );

                    },
                    250
                );

            }
        );

    });

}


/* =========================================================
   12. SCROLL ANIMATION
========================================================= */

function setupScrollAnimation() {

    const animatedElements =
        document.querySelectorAll(
            ".category-card, " +
            ".recipe-card, " +
            ".equipment-item, " +
            ".step"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        animatedElements.forEach(
            function(element) {

                element.classList.add(
                    "show-animation"
                );

            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show-animation"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(
        function(element) {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   13. CATEGORY CARD EFFECT
========================================================= */

function setupCategoryCards() {

    const cards =
        document.querySelectorAll(
            ".category-card"
        );


    cards.forEach(function(card) {

        card.addEventListener(
            "click",
            function() {

                card.classList.add(
                    "button-clicked"
                );


                setTimeout(
                    function() {

                        card.classList.remove(
                            "button-clicked"
                        );

                    },
                    200
                );

            }
        );

    });

}


/* =========================================================
   14. REMOVE # LINKS
========================================================= */

function setupEmptyLinks() {

    const links =
        document.querySelectorAll(
            "a[href='#']"
        );


    links.forEach(function(link) {

        link.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

            }
        );

    });

}


/* =========================================================
   15. SAVE LANGUAGE BEFORE LEAVING
========================================================= */

function keepLanguagePreference() {

    const currentLanguage =
        getCurrentLanguage();


    localStorage.setItem(
        "cookmateLanguage",
        currentLanguage
    );

}


/* =========================================================
   16. INITIALIZE COOKMATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
         * Create language selector
         */
        createLanguageSelector();


        /*
         * Apply selected language
         */
        applyLanguage();


        /*
         * Search
         */
        setupSearch();


        /*
         * Button animation
         */
        setupButtonAnimation();


        /*
         * Scroll animation
         */
        setupScrollAnimation();


        /*
         * Category cards
         */
        setupCategoryCards();


        /*
         * Empty links
         */
        setupEmptyLinks();


        /*
         * Keep language
         */
        keepLanguagePreference();


        console.log(
            "🍳 CookMate multilingual system loaded!"
        );

    }
);


/* =========================================================
   17. SUPPORT DYNAMIC CONTENT
========================================================= */

const languageObserver =
    new MutationObserver(
        function() {

            const selector =
                document.getElementById(
                    "cookmateLanguageSelect"
                );


            if (!selector) {
                createLanguageSelector();
            }


            applyLanguage(
                getCurrentLanguage()
            );

        }
    );


languageObserver.observe(
    document.body,
    {
        childList: true,
        subtree: true
    }
);
