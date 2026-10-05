const initialDefaultProducts = [
    {
        id: "1",
        name: "تمر الفرض العماني",
        description: "من أشهر التمور العمانية، يتميز بلونه الأحمر الداكن وطعمه الأصيل.",
        price: 12,
        image: "images/fard.png",
        isOutOfStock: false
    },
    {
        id: "2",
        name: "تمر النغال العماني",
        description: "أول تباشير القيظ، يتميز بشكله الطويل وحلاوته الخفيفة المفضلة.",
        price: 8,
        image: "images/naghal.png",
        isOutOfStock: false
    },
    {
        id: "3",
        name: "تمر الخلاص العماني",
        description: "الخيار الأول للضيافة، يتميز بلونه الذهبي الفاتح وطعمه الذي يشبه الكراميل.",
        price: 6.5,
        image: "images/khalas.png",
        isOutOfStock: false
    }
];

function loadStoredProducts() {
    try {
        const stored = localStorage.getItem('almathkora_products');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed.map(p => ({
                    ...p,
                    isOutOfStock: typeof p.isOutOfStock === 'boolean' ? p.isOutOfStock : false
                }));
            }
        }
    } catch (e) {
        console.error('Error loading products from localStorage:', e);
    }
    try {
        localStorage.setItem('almathkora_products', JSON.stringify(initialDefaultProducts));
    } catch (e) {}
    return [...initialDefaultProducts];
}

let products = loadStoredProducts();
