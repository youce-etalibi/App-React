import React from "react";

const initState = {
    Vlogs : [
        {
            id : 1, 
            day : 1,
            Hour : '6-8 AM',
            Title : 'Je me suis réveillé pour faire une prière et me préparer à recevoir les jeunes',
            Description : 'Je me suis réveillé pour accomplir la prière de l\'aube et me préparer à recevoir les jeunes, j\'ai préparé du café, du thé et des gâteaux et j\'ai aménagé la maison.',
            Images : []
        },
        {
            id : 2, 
            day : 1,
            Hour : '8-10 AM',
            Title : 'J\'ai rencontré Alae et Karim puis nous sommes partis vers notre destination',
            Description : 'J\'ai rencontré Alae Hu d\'abord pour qu\'on puisse sauver la PlayStation4 à la maison, puis nous sommes partis à la rencontre de Karim, puis nous avons pris un taxi pour aller au marché aux poissons acheter un gros poisson à cuisiner, mais malheureusement il n\'y avait pas de poisson de qualité, alors nous avons pensé à cuisiner du poulet.  Puis nous avons rencontré mon amie Nour et sommes rentrés à la maison. Mais avant de rentrer, nous avons parcouru la promenade de Playa',
            Images : ['video1.mp4', 'img1.jpg', 'img2.jpg', 'img3.jpg']
        },
        {
            id : 3, 
            day : 1,
            Hour : '10-12 AM',
            Title : 'Nous avons reçu les jeunes, nous sommes tendu la main, avons collecté de l\'argent, puis sommes allés faire du shopping.',
            Description : 'Lorsque nous avons reçu les gars, le bruit dans la maison était quelque chose qui ne s\'était jamais produit auparavant, mais ce n\'était pas un problème.  Nous avons d\'abord bu du thé et mangé des gâteaux, puis nous avons collecté de l\'argent et sommes allés au marché faire du shopping avec Hisham, Abdel Salam et moi devant les jeunes, alors je suis resté à la maison pour jouer à FIFA.',
            Images : ['video2.mp4']
        },
        {
            id : 4, 
            day : 1,
            Hour : '1-3 PM',
            Title : 'A notre retour nous avons cuisiné une salade de poulet et de riz',
            Description : 'À notre retour, la première chose que nous avons faite a été d\'accomplir la prière de midi en congrégation, puis Abdel Salam, Ahmed et moi avons coopéré et cuisiné une salade de riz au thon et cuisiné quatre poulets.',
            Images : ['img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg']
        },
        {
            id : 5, 
            day : 1,
            Hour : '4-7 PM',
            Title : 'On a tous joué à FIFA en attendant le poulet',
            Description : 'Pendant cette période, nous jouions à FIFA et attendions que le poulet cuise au four, puis nous faisions la prière de l\'après-midi et lorsque le poulet avait fini de cuire, nous le dévorions.',
            Images : ['img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg']
        },
        {
            id : 6, 
            day : 1,
            Hour : '7-10 PM',
            Title : 'Ici, quand on mangeait, la moitié des gars quittaient la maison et l\'autre moitié restait sur place pour jouer à FIFA.',
            Description : 'Après avoir fini de manger, nous avons nettoyé l\'endroit et lavé les ustensiles, puis nous avons prié les prières du soir et du soir, puis nous avons joué un tournoi de FIFA.',
            Images : ['img12.jpg']
        },
        {
            id : 7, 
            day : 1,
            Hour : '10-11 PM',
            Title : 'Après avoir fini de manger, nous avons nettoyé l\'endroit et lavé les ustensiles, puis nous avons prié les prières du soir et du soir, puis nous avons joué un tournoi de FIFA.',
            Description : 'C\'était une super soirée, tout le monde était présent, tout le monde partageait, tout le monde collaborait, tout le monde était content, tout le monde jouait, c\'est le but de cette hospitalité.',
            Images : []
        },
        {
            id : 8, 
            day : 2,
            Hour : '6-8 AM',
            Title : 'Je me suis réveillé à 6 heures du matin pour effectuer le rituel',
            Description : 'Je suis une personne qui aime beaucoup vivre, je n\'aime pas perdre 3 heures de ma vie à dormir, donc j\'aime me réveiller tôt tous les jours, et j\'en vis beaucoup, et certaines d\'entre elles je prie.',
            Images : []
        },
        {
            id : 9, 
            day : 2,
            Hour : '8-12 AM',
            Title : 'J\'ai préparé mon propre petit-déjeuner et je l\'ai ensuite mangé avec ma famille',
            Description : 'J\'ai préparé le petit-déjeuner, puis je l\'ai mangé avec ma famille, puis j\'ai aménagé le lieu où j\'accueillais les déjeuners des jeunes, j\'ai fait la vaisselle et j\'ai rangé la maison.',
            Images : []
        },
        {
            id : 10, 
            day : 2,
            Hour : '12-3 PM',
            Title : 'J\'ai pris un peu de repos et j\'ai planifié la semaine prochaine',
            Description : 'J\'aime faire une pause pour voir la vie, puis prier la prière de midi, puis planifier la semaine suivante. Ceci est considéré comme important et quelque chose de nécessaire à faire.',
            Images : ['img16.jpg']
        },
        {
            id : 11, 
            day : 2,
            Hour : '3-6 PM',
            Title : 'Durant cette période, nous avons joué un match avec les jeunes',
            Description : 'Ahmed organise toujours chaque semaine des matchs dans lesquels nous jouons les uns contre les autres',
            Images : ['img15.jpg']
        },
        {
            id : 12, 
            day : 2,
            Hour : '6-10 PM',
            Title : 'J\'ai fait une pause et j\'ai vérifié la semaine',
            Description : 'J\'aime cette période, car cette période m\'aide à m\'épanouir, car je traite ou révise les erreurs que j\'ai commises dans la semaine ou à tout moment.',
            Images : []
        },
        {
            id : 13, 
            day : 2,
            Hour : '6-10 PM',
            Title : 'J\'ai organisé un appel avec mon amie Nour et lui ai expliqué un morceau de Dry React',
            Description : 'Je suis quelqu\'un que j\'aime comprendre la leçon et expliquer à mes amis cette chose me fait se développer dans les champs. Après avoir fini, je me suis endormi',
            Images : []
        },
        {
            id : 14, 
            day : 2,
            Hour : '6-10 PM',
            Title : 'J\'ai organisé un appel avec mon amie Nour et lui ai expliqué un morceau de Dry React',
            Description : 'Je suis quelqu\'un que j\'aime comprendre la leçon et expliquer à mes amis cette chose me fait se développer dans les champs. Après avoir fini, je me suis endormi',
            Images : []
        },
        {
            id : 15, 
            day : 3,
            Hour : '6-10 PM',
            Title : 'Je me suis réveillé à 6 heures du matin pour effectuer le rituel',
            Description : 'Je suis quelqu\'un que j\'aime comprendre la leçon et expliquer à mes amis cette chose me fait se développer dans les champs. Après avoir fini, je me suis endormi',
            Images : []
        },
        {
            id : 16, 
            day : 3,
            Hour : '6-8 PM',
            Title : 'Je me suis réveillé à 6 heures du matin pour effectuer le rituel',
            Description : 'Je suis quelqu\'un que j\'aime comprendre la leçon et expliquer à mes amis cette chose me fait se développer dans les champs. Après avoir fini, je me suis endormi',
            Images : []
        },
        {
            id : 17, 
            day : 3,
            Hour : '8-12 PM',
            Title : 'J\'ai conçu ce site',
            Description : 'Je pensais que je ferais d’une pierre deux coups.  J\'ai dû concevoir mes propres devoirs pour cette unité et concevoir un exercice dans React, j\'ai donc pensé à concevoir ce site Web qui mélange les deux.',
            Images : []
        },
        {
            id : 18, 
            day : 3,
            Hour : '12-7 PM',
            Title : 'J\'ai assisté à mon cours à ISTA',
            Description : 'J\'ai suivi deux cours React à ISTA ',
            Images : []
        },
        {
            id : 19, 
            day : 3,
            Hour : '7-11 PM',
            Title : 'J\'ai terminé ce site puis je me suis couché',
            Description : 'J\'ai terminé ce site puis je me suis couché',
            Images : []
        },
    ]
}

export default function Reducer(state = initState, action){
    switch(action.type){
        case 'ajoute' :
            return {...state, Vlogs : [...state.Vlogs, action.payload]}
        case 'update' :
            const V = state.Vlogs.find((item)=>item.id == action.payload.id);
            V.Title = action.payload.Title
            V.Description = action.payload.Description
            V.Hour = action.payload.Hour
            V.day = action.payload.day
            return state;
            default :
            return state;
    }
}