export const commonHeaderMenuData = [
    { href: '/', text: 'Home' },
    { href: '/movies', text: 'Movies' },
    { href: '/categories', text: 'Categories' },
        
];

export const publicHeaderMenuData = [
    ...commonHeaderMenuData,
    { href: '/register', text: 'Register' },
    { href: '/login', text: 'Login' },
];

export const privateHeaderMenuData = [
    ...commonHeaderMenuData,
    { href: '/admin', text: 'Dashboard' },
    { href: '/logout', text: 'Dashboard' } 
];

export const contactInfoData = {
    title: 'Contact info',
    details: [
        { icon: 'fa fa-globe', text: '+370 6 1234567' },
        { icon: 'fa fa-globe', text: 'info@example.com' },
    ],
};

export const ourLocationData = {
    title: 'Our location',
    details: [
        { icon: 'fa fa-globe', text: 'Miestelis, Gatve 5, Lietuva' },
    ],
};

export const socialsData = {
    title: 'Social links',
    details: [
        { icon: 'fa fa-globe', href: '#' },
        { icon: 'fa fa-globe', href: '#' },
        { icon: 'fa fa-globe', href: '#' },
        { icon: 'fa fa-globe', href: '#' },
    ],
};