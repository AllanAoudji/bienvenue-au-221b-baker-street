import { Information } from "@/ocntexts/ProfileInformations";

type Response = {
    text: string;
    id: string;
    end?: boolean;
    to: string;
    condition?: {
        need?: Information[];
        not?: Information[];
    }
}

type Content = {
    rewardId?: Information;
    text: string;
    image?: string;
    responses: Response[];
}

const useContent: (id: string) => Content | null = (id) => {
    switch (id) {
        case "1":
            return {
                text: "C’est étrange, cette façade d’immeuble. Autour de vous, et ce quelque soit la direction où se pose votre regard, se prolonge à l’infini un abysse d’un noir profond. Au dessus de vous, là ou devraient se tenir le soleil, ou la lune et les étoiles, vous ne voyez rien. Dans ce vide immense, vous pourriez presque douter de l’existence du sol si vous n’étiez pas debout droit sur vos jambes. Et pourtant, dans ce monde étrange et inquiétant se tient devant vous cette façade en pierres brutes, comme si elle avait été arrachée à quelque réalité. La situation est d’autant plus étonnante : vous n’avez aucun souvenir d’être arrivé jusqu’à elle, comme si elle avait toujours été là, tout comme vous. En l’observant, vous remarquez une porte en bois, et sur sa droite une fenêtre d’où émane une vive lumière blanche aveuglante. Au dessus d’elle, une pancarte est fixée au mur, celle-ci indique « 221b Baker Street ».",
                responses: [
                    {
                        id: "1",
                        text: "Regarder par la fenêtre",
                        to: "2"
                    },
                    {
                        id: "2",
                        text: "Ouvrir la porte et entrer dans l’immeuble",
                        to: "4"
                    },
                    {
                        id: "3",
                        text: "S’en aller et se perdre dans l’abysse",
                        to: "3"
                    }
                ]
            }
        case "2":
            return {
                text: "En vous approchant de l’immeuble et de cette fenêtre, vous voyez la lueur émanant de l’intérieur s’intensifier. Arrivé à sa hauteur, vous vous rendez compte que la violence du rayonnement vous empêche de garder les yeux ouverts et de réussir à jeter un coup d’oeil. Si vous souhaitez savoir ce que cache cette façade, vous n’aurez pas le choix, il va falloir pénétrer par cette porte.",
                rewardId: "observezParLaFenetre",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir la porte et entrer dans l’immeuble",
                        to: "4",
                    },
                    {
                        id: "2",
                        text: "S’en aller et se perdre dans l’abysse",
                        to: "3",
                        condition: {
                            not: ["visiterLAbysse"]
                        }
                    },
                ]
            }
        case "3":
            return {
                text: "Tant pis pour cette façade. Tant pis pour cet immeuble. Tant pis pour le 221b Baker Street, il y aura peut-être quelque chose d’autre à découvrir dans cet abysse. Vous partez, à gauche, à droite, devant vous ou derrière vous, cela n’a pas vraiment d’importance. Vous marchez un temps sans réussir à ne pas jeter régulièrement un regard derrière vous pour apercevoir cette façade s’éloigner au rythme de vos pas, s’enfonçant petit à petit dans les limbes jusqu’à disparaître complètement. Puis une pensée dérangeante vient vous effleurer l’esprit, vous vous rendez compte que vous ne savez plus vraiment depuis combien de temps vous êtes en train de marcher, comme si le temps lui même n’avait aucune prise dans ce monde. C’est étrange, cette façade d’immeuble. La revoilà, devant vous. Vous n’arrivez pas à expliquer si c’est vous qui avez tourné en rond, ou si une force invisible vous a attiré jusqu’à elle, mais la revoilà. Implacable. Face à vous.",
                rewardId: "visiterLAbysse",
                responses: [
                    {
                        id: "1",
                        text: "Regarder par la fenêtre",
                        to: "2",
                        condition: {
                            not: ["observezParLaFenetre"]
                        }
                    },
                    {
                        id: "2",
                        text: "Ouvrir la porte et entrer dans l’immeuble",
                        to: "4",
                    },
                ]
            }
        case "4":
            return {
                text: "Vous décidez d’ouvrir la porte de la façade et de pénétrer à l’intérieur du 221b Baker Street. L’intérieur est sobrement décoré. Un grand tapis à motif floral multicolore est posé au sol. Deux tableaux sont accrochés aux murs, l’un représente une nature morte, l’autre un paysage montagneux. Au centre de la pièce une vieille femme est assise sur une chaise en bois. Elle est habillée d’une robe de soie rouge et porte sur la tête un immense chapeau en laine violet. Elle vous regarde, sans rien dire. Dans ses bras, la vieille femme tient une sorte de seau métallique, de là où vous êtes, impossible de dire ce qu’il contient.",
                responses: [
                    {
                        id: "1",
                        text: "Qui êtes-vous ?",
                        to: "5",
                    },
                    {
                        id: "2",
                        text: "Quel est cet endroit ?",
                        to: "6",
                    }
                ],
            }
        case "5":
            return {
                text: "La vieille femme continue de vous regarder, de vous sourire et ne vous répond pas. Vous douteriez presque d'avoir posé la question, et la sagesse qui se dégage de son regard vous empêche d'avoir envie de la brusquer. C’est après un long silence qui vous semble durer une éternité que la vieille femme prend la peine de vous parler. « Cette question a-t-elle vraiment de l’importance alors que vous ne vous êtes pas présenté ? » Ces simples mots vous coupent brusquement le souffle. De terreur, vous vous rendez compte que vous n’avez absolument aucun souvenir. Aucun souvenir de qui vous êtes, aucun souvenir de qui vous étiez. Après avoir pris la peine de vous laisser le temps de reprendre vos esprits, la vieille femme continue, comme si elle était au courant de votre questionnement soudain : « Ne me posez pas la question. Je serais incapable de vous le dire. La réponse ne viendra pas de moi, mais j’ai peut-être la possibilité de vous aider. Il vous suffit simplement de jeter un coup d’oeil à l’intérieur du seau que je tiens dans mes bras. »",
                responses: [
                    {
                        id: "1",
                        text: "Regarder à l’intérieur du seau",
                        to: "8",
                    },
                    {
                        id: "2",
                        text: "Détourner le regard",
                        to: "9",
                    },
                    {
                        id: "3",
                        text: "Quel est cet endroit ?",
                        to: "9",
                    }
                ],
            }
        case "6":
            return {
                text: "La vieille femme continue de vous regarder, de vous sourire et ne vous répond pas. Vous douteriez presque d'avoir posé la question, et la sagesse qui se dégage de son regard vous empêche d'avoir envie de la brusquer. C’est après un long silence qui vous semble durer une éternité que la vieille femme prend la peine de vous parler. « Pour l’instant, la réponse à cette question n’a que peu d’importance. »",
                responses: [
                    {
                        id: "1",
                        text: "Qui êtes-vous ?",
                        to: "7",
                    }
                ],
            }
        case "7":
            return {
                text: "« Ce n'est toujours pas la bonne question à me poser alors que vous ne vous êtes pas présenté. » Ces simples mots vous coupent brusquement le souffle. De terreur, vous vous rendez compte que vous n’avez absolument aucun souvenir. Aucun souvenir de qui vous êtes, aucun souvenir de qui vous étiez. Après avoir pris la peine de vous laisser le temps de reprendre vos esprits, la vieille femme continue, comme si elle était au courant de votre questionnement soudain : « Ne me posez pas la question. Je serais incapable de vous le dire. La réponse ne viendra pas de moi, mais j’ai peut-être la possibilité de vous aider. Il vous suffit simplement de jeter un coup d’oeil à l’intérieur du seau que je tiens dans mes bras. »",
                responses: [
                    {
                        id: "1",
                        text: "Regarder à l’intérieur du seau",
                        to: "8",
                    },
                    {
                        id: "2",
                        text: "Détourner le regard",
                        to: "9",
                    },
                ],
            }
        case "8":
            return {
                text: "Vous vous approchez doucement de la vieille femme et de son seau. Vous baissez la tête et vous vous rendez compte qu’il est rempli à raz-bord d’une eau claire. Sans comprendre l’utilité de la chose, vous levez les yeux pour essayer de trouver dans son regard muet l’intérêt que vous devriez porter à un simple seau d’eau. Pourtant, la réponse à vos questions s’y trouve bien. Dans cette eau, vous voyez un visage qui vous regarde. Votre reflet ? Le sentiment est étonnant, si aucun maléfice ne trompe vos sens, ce visage est bien le vôtre. C’est la première fois que vous le voyez et pourtant il vous semble si familier.",
                rewardId: "vuLEauDuSeau",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "10",
                    },
                ],
            }
        case "9":
            return {
                text: "Alors que la voix de la vieille femme était auparavant aussi douce et aussi sage que son regard, son ton se transforme brusquement pour prendre une intonation presque menaçante si l’on oubliait que son sourire était encore présent sur son visage. « Avez-vous donc si peur de découvrir qui vous êtes ? » Et aussi brusquement que le changement du ton de sa voix, la vieille femme lâche au sol le seau qu’elle tenait dans ses bras et fait claquer les doigts de sa main droite. Aussi brusquement que ce claquement de doigts, les quatre murs de la pièce, son sol et son plafond se transforment en miroir. Impossible d’y échapper, vous voyez votre reflet, votre visage et votre corps se reflétant encore et encore et encore, partout, à l’infini. Puis cette vision disparaît aussi rapidement qu’elle était arrivée.",
                rewardId: "vuLesMiroirs",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "10",
                    },
                ],
            }
        case "10":
            return {
                text: "Vous voyez la vieille femme se lever doucement de sa chaise : « Maintenant que vous en savez un peu plus sur vous même, je vais pouvoir vous dire qui je suis, et quel est cet endroit. Suivez-moi. » Lentement, la vieille femme se dirige vers une porte en bois au fond de la pièce et vous invite d’un geste de la main à la suivre. Vous n’aviez pas remarqué qu’une porte se trouvait là. Non, ce n’est pas ça. La porte n’était pas présente dans cette pièce avant que la vieille femme ne se lève de sa chaise.",
                responses: [
                    {
                        id: "1",
                        text: "Suivre la vieille femme",
                        to: "12",
                    },
                    {
                        id: "2",
                        text: "Rester là ou vous êtes",
                        to: "11",
                    },
                ],
            }
        case "11":
            return {
                text: "Comprenant que vous ne comptiez pas la suivre, la vieille femme se retourne, et avant de franchir la porte, vous la voyez une nouvelle fois vous sourire et vous dire ces quelques mots : « il serait presque dangereux de rester seul dans ce lieu, sans souvenir, sans personne pour vous guider. Suivez-moi. Je ne vous veux aucun mal. »",
                responses: [
                    {
                        id: "1",
                        text: "Suivre la vieille femme",
                        to: "12",
                    },
                ],
            }
        case "12":
            return {
                text: "Vous franchissez la porte et arrivez dans une pièce avec une atmosphère bien distincte de la précédente. Ici, plongé dans une ambiance rappelant fortement les Années Folles, ont été disposée une dizaine de meubles tous différents les uns des autres. Vous remarquez que leurs portes sont fermées par des cadenas. Pour accompagner ce décor, trois objets étranges sont posés ça et là, semblables à des mécanismes, des sortes d’énigmes à résoudre, liés d’une manière ou d’une autre à l’ouverture des différents cadenas. Dans cette pièce, cinq personnes sont en train de s’agiter pour tenter de comprendre la logique de tout ceci. Vous pouvez lire la joie sur leur visage à être partie prenante de ce jeu. Vous êtes là, debout à côté de la vieille dame à les observer, mais les cinq personnes ne semblent pas remarquer votre présence. Votre irruption dans cette pièce ne semble pas les avoir dérangé, ni perturbé, comme si vous étiez invisible à leurs yeux. Vous observez la vieille dame, qui semble prendre plaisir à voir ces personnes s’amuser. Et sans détourner le regard, elle finit par prendre la parole : « Tu l’auras peut-être deviné mais ces personnes ne peuvent pas entendre le son de nos voix, de la même manière qu’ils ne peuvent pas nous voir. S’ils venaient à tendre leur main dans notre direction, elle viendrait à traverser notre corps. Nous sommes bien tout les deux au 221b Baker Street, tout comme eux. Et pourtant, en un sens, nous nous situons à un endroit bien différent de nos cinq visiteurs. Eux sont actuellement à Dijon en train de jouer tout les cinq à un Escape Game. Nous sommes de notre côté, derrière les rideaux de ce jeu, dans le monde des idées, dans une certaine mesure, dans le monde des sentiments. Je suis l’un d’entre eux, tu peux m’appeler Joie, ou Amusement si tu préfères. Je suis présente partout, à chaque fois que des personnes décident de jouer ensemble. Je suis présente dans chaque jeu que les Hommes viennent à inventer pour passer le temps. » L’une des cinq personnes semble avoir trouvé comment déverrouiller un des cadenas, le groupe crie d’extase, Joie s’interrompt profitant de ce moment de bonheur, puis reprend : « Je ne sais pas comment tu t’es retrouvé ici avec moi, mais pour comprendre pourquoi tu es là, il va nous falloir comprendre qui tu es. Et je vais t’aider. » Joie s’interrompt de nouveau, cette fois-ci à cause de vous. Absorbé par la scène et l’agitation de ces cinq personnes, vous avez fini par ne plus l’écouter qu’à moitié. L’une des personnes a trouvé le fonctionnement d’un mécanisme, une porte dérobée s’ouvre, et les cinq personnes s’engouffrent dans la pièce dissimulée, découvrant de nouvelles énigmes, de nouveaux cadenas et de nouveaux mécanismes. Cela est évident, vous finissez vous aussi par sourire. Tout comme cette porte dérobée, le mécanisme semble avoir déverrouillé une partie de vos souvenirs.",
                rewardId: "hobbies",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "13",
                    },
                ],
            }
        case "13":
            return {
                text: "Joie vous laisse apprécier ces nouveaux souvenirs un moment avant de vous parler : « je vais devoir m’en aller, mais ne t’en fais pas, je vais laisser tes souvenirs aux mains d’un bon ami à moi. Tu verras, il peut être brusque parfois, mais cela vaut le coup d’avoir une conversation avec lui. Avant de partir, j’ai quelque chose pour toi, un présent. » Sur ces mots, Joie vous présente deux objets. Dans sa main droite une montre à gousset rouillée décorée d’enluminures. Dans sa main gauche, un vieux carnet abimé de toute part. « Je suis désolé, tu vas devoir choisir, je ne peux pas te confier ces deux objets en même temps. »",
                responses: [
                    {
                        id: "1",
                        text: "Choisir la montre à gousset",
                        to: "14",
                    },
                    {
                        id: "2",
                        text: "Choisir le vieux carnet",
                        to: "15"
                    }
                ],
            }
        case "14":
            return {
                text: "Joie sourit : « le choix est un processus important dans ta guérison. Maintenant, pour rencontrer mon ami, il te suffit de franchir la porte que nous avions prise pour arriver dans cette salle d’escape game. Ne t’en fais pas, tu t’en sors très bien, tout va bien se passer. » Et sur ces derniers mots, Joie disparait, comme si elle n’avait jamais été là. Mais vous le savez au fond de vous, elle n’a pas été le fruit de votre imagination. Son sourire, son sage regard et ses silences réfléchis ont toujours fait partie de vous. Avec elle, les cris de bonheur et les rires des cinq autres personnes se sont tues. Et maintenant que vous êtes seul dans cette pièce, vous regardez alternativement cette porte devant vous, puis cette montre que vous tenez fermement dans votre main.",
                rewardId: "choixDeLaMontre",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir la montre à gousset",
                        to: "16",
                    },
                    {
                        id: "2",
                        text: "Franchir la porte",
                        to: "18"
                    }
                ],
            }
        case "15":
            return {
                text: "Joie sourit : « le choix est un processus important dans ta guérison. Maintenant, pour rencontrer mon ami, il te suffit de franchir la porte que nous avions prise pour arriver dans cette salle d’escape game. Ne t’en fais pas, tu t’en sors très bien, tout va bien se passer. » Et sur ces derniers mots, Joie disparait, comme si elle n’avait jamais été là. Mais vous le savez au fond de vous, elle n’a pas été le fruit de votre imagination. Son sourire, son sage regard et ses silences réfléchis ont toujours fait partie de vous. Avec elle, les cris de bonheur et les rires des cinq autres personnes se sont tues. Et maintenant que vous êtes seul dans cette pièce, vous regardez alternativement cette porte devant vous, puis ce carnet que vous tenez fermement dans votre main.",
                rewardId: "choixDuCarnet",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir le vieux carnet",
                        to: "17",
                    },
                    {
                        id: "2",
                        text: "Franchir la porte",
                        to: "19"
                    }
                ],
            }
        case "16":
            return {
                text: "Vous ouvrez la montre. Chose inhabituelle, vous vous apercevez que ses aiguilles tournent à l’envers. Même le son du cliquetis semble être aspiré vers l’intérieur de la montre. Ce tempo continu finit par résonner dans votre tête, comme si vos pensées s’accordaient au diapason avec le son émis par la montre. Votre vision se floue, comme si elle laissait place pendant un temps au reste de vos sens. Puis elle revient aussi doucement qu’elle était partie, la montre est toujours là, la porte aussi. Mais quelque chose a changé dans vos souvenirs. Il est maintenant temps de rencontrer l’ami de Joie.",
                rewardId: "training",
                responses: [
                    {
                        id: "1",
                        text: "Franchir la porte",
                        to: "22"
                    }
                ],
            }
        case "17":
            return {
                text: "Vous feuilletez les nombreuses pages du carnet, la plupart sont remplies de notes écrites à la main, la plupart ont été barrées. Sur d’autres, vous pouvez voir des dessins de personnes et de paysages. Sur d’autres, des croquis indescriptibles. Certaines pages ont été visiblement arrachées. Tout ce qui en ressort est une pensée chaotique et irrégulière, vide de sens dans son ensemble. Pourtant à force de regarder ces notes, ces dessins et ces croquis, vous finissez par déchiffrer petit à petit le sens de ce carnet. Sans réussir à y donner une interprétation précise, tout ceci finit par résonner en vous, comme si une partie subconsciente de votre être était capable d’y lire un langage qui n’était adressé qu’à elle. Il est maintenant temps de rencontrer l’ami de Joie.",
                rewardId: "skills",
                responses: [
                    {
                        id: "1",
                        text: "Franchir la porte",
                        to: "22"
                    }
                ],
            }
        case "18":
            return {
                text: "Évidemment, la pièce dans laquelle vous venez d’entrer n’est plus la même que celle de tout à l’heure. Plus de tapis, plus de tableau, la chaise sur laquelle était assise Joie n’est pas là non plus. À leur place, vous vous trouvez dans une pièce cubique dont les murs, le sol et le plafond ont été peints d’une même couleur bleu ciel. En son centre, un homme d’une taille titanesque, assis à même le sol, vous regarde. Obligé de pencher le cou pour ne pas toucher le plafond, le corps de l’homme remplit pratiquement l’entièreté du lieu. Il est habillé d’un costume noir taillé parfaitement pour l’ampleur de son corps, et ses yeux entièrement teintés d’un noir aussi profond que son costume semblent percer votre être : « Je vois que tu n’as pas pris la peine d’ouvrir le présent que Joie t’a offert, je ne prendrais pas la peine de te parler tant que cela ne sera pas fait ». Sa voix grave rauque, semble venir des profondeurs de la terre.",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir la montre à gousset",
                        to: "20",
                    },
                ],
            }
        case "19":
            return {
                text: "Évidemment, la pièce dans laquelle vous venez d’entrer n’est plus la même que celle de tout à l’heure. Plus de tapis, plus de tableau, la chaise sur laquelle était assise Joie n’est pas là non plus. À leur place, vous vous trouvez dans une pièce cubique dont les murs, le sol et le plafond ont été peints d’une même couleur bleu ciel. En son centre, un homme d’une taille titanesque, assis à même le sol, vous regarde. Obligé de pencher le cou pour ne pas toucher le plafond, le corps de l’homme remplit pratiquement l’entièreté du lieu. Il est habillé d’un costume noir taillé parfaitement pour l’ampleur de son corps, et ses yeux entièrement teintés d’un noir aussi profond que son costume semblent percer votre être : « Je vois que tu n’as pas pris la peine d’ouvrir le présent que Joie t’a offert, je ne prendrais pas la peine de te parler tant que cela ne sera pas fait ». Sa voix grave rauque, semble venir des profondeurs de la terre.",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir le vieux carnet",
                        to: "21",
                    },
                ],
            }
        case "20":
            return {
                text: "Vous ouvrez la montre. Chose inhabituelle, vous vous apercevez que ses aiguilles tournent à l’envers. Même le son du cliquetis semble être aspiré vers l’intérieur de la montre. Ce tempo continu finit par résonner dans votre tête, comme si vos pensées s’accordaient au diapason avec le son émis par la montre. Votre vision se floue, comme si elle laissait place pendant un temps au reste de vos sens. Puis elle revient aussi doucement qu’elle était partie, la montre est toujours là, la porte aussi. Mais quelque chose a changé dans vos souvenirs. Le géant n’a pas cligné une seule fois des yeux pendant tout ce temps, vous avez l’impression que son regard obscur est en train de vous sonder de la tête aux pieds.",
                rewardId: "training",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "23",
                    },
                ],
            }
        case "21":
            return {
                text: "Vous feuilletez les nombreuses pages du carnet, la plupart sont remplies de notes écrites à la main, la plupart ont été barrées. Sur d’autres, vous pouvez voir des dessins de personnes et de paysages. Sur d’autres, des croquis indescriptibles. Certaines pages ont été visiblement arrachées. Tout ce qui en ressort est une pensée chaotique et irrégulière, vide de sens dans son ensemble. Pourtant à force de regarder ces notes, ces dessins et ces croquis, vous finissez par déchiffrer petit à petit le sens de ce carnet. Sans réussir à y donner une interprétation précise, tout ceci finit par résonner en vous, comme si une partie subconsciente de votre être était capable d’y lire un langage qui n’était adressé qu’à elle. Le géant n’a pas cligné une seule fois des yeux pendant tout ce temps, vous avez l’impression que son regard obscur est en train de vous sonder de la tête aux pieds.",
                rewardId: "skills",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "23",
                    },
                ],
            }
        case "22":
            return {
                text: "Évidemment, la pièce dans laquelle vous venez d’entrer n’est plus la même que celle de tout à l’heure. Plus de tapis, plus de tableau, la chaise sur laquelle était assise Joie n’est pas là non plus. À leur place, vous vous trouvez dans une pièce cubique dont les murs, le sol et le plafond ont été peints d’une même couleur bleu ciel. En son centre, un homme d’une taille titanesque, assis à même le sol, vous regarde. Obligé de pencher le cou pour ne pas toucher le plafond, le corps de l’homme remplit pratiquement l’entièreté du lieu. Il est habillé d’un costume noir taillé parfaitement pour l’ampleur de son corps, et ses yeux entièrement teintés d’un noir aussi profond que son costume semblent percer votre être : « Au vu de ton regard méfiant, je vois que Joie n’a pas pris la peine de me présenter. Cela lui ressemble bien. » Sa voix rauque, semble venir des profondeurs de la terre. « Je me nomme Savoir, Connaissance, et de temps à autres, Imagination. Je suis au courant pour ton problème de … » Il marque une pause. « … mémoire. Tourne sur toi même lentement veux-tu ? »",
                responses: [
                    {
                        id: "1",
                        text: "Lui obéir",
                        to: "24"
                    },
                    {
                        id: "2",
                        text: "Ne rien faire",
                        to: "25"
                    }
                ]
            }
        case "23":
            return {
                text: "« Bien, maintenant, passons aux choses sérieuses. Au vu de ton regard méfiant, je vois que Joie n’a pas pris la peine de me présenter. Cela lui ressemble bien. » Sa voix rauque, semble venir des profondeurs de la terre. « Je me nomme Savoir, Connaissance, et de temps à autres, Imagination. Je suis au courant pour ton problème de … » Il marque une pause. « … mémoire. Tourne sur toi même lentement veux-tu ? »",
                responses: [
                    {
                        id: "1",
                        text: "Lui obéir",
                        to: "24"
                    },
                    {
                        id: "2",
                        text: "Ne rien faire",
                        to: "25"
                    }
                ]
            }
        case "24":
            return {
                text: "Bien que la demande soit grotesque, vous obéissez à Savoir. Vous tournez sur vous même pendant que le géant vous observe attentivement. Revenu sur place, la demande suivante est encore de tourner sur place, mais cette fois, dans l’autre sens. Après ce deuxième tour, vous voyez Savoir se gratter la tête, se racler la gorge, puis passer ses doigts sur son menton, comme si vos actions venaient de lui apprendre quelque chose. Sans prévenir, le géant vient s’approcher de vous et vous tenir la tête qui paraît maintenant minuscule à l’intérieur de sa main colossale. Son visage est à quelques centimètres du vôtre : « Fascinant, ton corps parle pour toi. Je vais te laisser contempler ce que mon regard m’a appris de toi. » Sur ces mots, vous vous sentez partir. La poigne du géant qui vous retenait la tête et vous clouait sur place se relâche. Pendant un instant, vous avez l’impression de vous voir, comme si vous vous regardiez à travers les yeux de Savoir. Vous comprenez alors ce que le géant a vu en vous.",
                rewardId: "experiences",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "26"
                    },
                ]
            }
        case "25":
            return {
                text: "Sans prévenir, le géant vient s’approcher de vous et vous tenir la tête qui parait maintenant minuscule à l’intérieur de sa main colossale. Son visage est à quelques centimètres du vôtre : « Tu sauras que dès que je pose les yeux sur quelqu’un, plus rien en lui ne peut m’échapper. C’est fascinant, ton corps parle pour toi. Je vais te laisser contempler ce que mon regard m’a appris de toi. » Sur ces mots, vous vous sentez partir. La poigne du géant qui vous retenait la tête et vous clouait sur place se relâche. Pendant un instant, vous avez l’impression de vous voir, comme si vous vous regardiez à travers les yeux de Savoir. Vous comprenez alors ce que le géant a vu en vous.",
                rewardId: "experiences",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "26"
                    },
                ]
            }
        case "26":
            return {
                text: "« Le rôle que je devais tenir avec toi est maintenant terminé. » Au fur et à mesure des mots prononcés par Savoir, vous voyez sa taille, son corps diminuer petit à petit, jusqu’à prendre une proportion humaine. Derrière lui, vous pouvez maintenant remarquer que son corps dissimulait une porte en bois. Savoir se tourne vers elle est vous l’ouvre. « Il ne te reste maintenant qu’une seule et dernière chose à faire, avant de prendre une toute dernière décision. » Sa voix, dans ce corps est devenue douce et chaleureuse. « Mais avant de me quitter, Joie m’a demandé de te remettre ceci. »",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "27",
                        condition: {
                            not: ["choixDeLaMontre"],
                        }
                    },
                    {
                        id: "2",
                        text: "Continuer",
                        to: "28",
                        condition: {
                            not: ["choixDuCarnet"],
                        }
                    },
                ]
            }
        case "27":
            return {
                text: "L’homme tient dans sa main la montre à gousset que Joie avait gardé avec elle. Savoir vous le donne : « Je vais m’assurer que tu l’ouvres avant que tu ne franchisses cette porte. »",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir la montre à gousset",
                        to: "29"
                    },
                ]
            }
        case "28":
            return {
                text: "L’homme tient dans sa main le vieux carnet que Joie avait gardé avec elle. Savoir vous le donne : « Je vais m’assurer que tu l’ouvres avant que tu ne franchisses cette porte. »",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir le vieux carnet",
                        to: "30"
                    },
                ]
            }
        case "29":
            return {
                text: "Vous ouvrez la montre pendant que Savoir vous observe. Chose inhabituelle, vous vous apercevez que ses aiguilles tournent à l’envers. Même le son du cliquetis semble être aspiré vers l’intérieur de la montre. Ce tempo continu finit par résonner dans votre tête, comme si vos pensées s’accordaient au diapason avec le son émis par la montre. Votre vision se floue, comme si elle laissait place pendant un temps au reste de vos sens. Puis elle revient aussi doucement qu’elle était partie, la montre est toujours là, la porte aussi, Savoir aussi. Mais quelque chose a changé dans vos souvenirs. Il est donc temps de dire au revoir à Savoir.",
                rewardId: "training",
                responses: [
                    {
                        id: "1",
                        text: "Franchir la porte",
                        to: "31"
                    },
                ]
            }
        case "30":
            return {
                text: "Pendant que Savoir vous observe, vous feuilletez les nombreuses pages du carnet. La plupart sont remplies de notes écrites à la main, la plupart ont été barrées. Sur d’autres, vous pouvez voir des dessins de personnes et de paysages. Sur d’autres, des croquis indescriptibles. Certaines pages ont été visiblement arrachées. Tout ce qui en ressort est une pensée chaotique et irrégulière, vide de sens dans son ensemble. Pourtant à force de regarder ces notes, ces dessins et ces croquis, vous finissez par déchiffrer petit à petit le sens de ce carnet. Sans réussir à y donner une interprétation précise, tout ceci finit par résonner en vous, comme si une partie subconsciente de votre être était capable d’y lire un langage qui n’était adressé qu’à elle. Il est donc temps de dire au revoir à Savoir.",
                rewardId: "skills",
                responses: [
                    {
                        id: "1",
                        text: "Franchir la porte",
                        to: "31"
                    },
                ]
            }
        case "31":
            return {
                text: "Les tableaux accrochés aux murs sont revenus, tout comme le tapis aux motifs floraux multicolores. La chaise sur laquelle était assise Joie est là elle aussi, faisant face à la porte qui vous a amené des abysses à l’intérieur du 221b Baker Street. Mais Joie n’est plus là, à sa place, un homme est assis dos à vous. Vous vous approchez de lui, il ne semble pas avoir remarqué votre présence, ou plutôt, il ne semble pas faire attention à vous.",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "32",
                        condition: {
                            not: ["vuLesMiroirs"]
                        }
                    },
                    {
                        id: "2",
                        text: "Continuer",
                        to: "33",
                        condition: {
                            not: ["vuLEauDuSeau"]
                        }
                    },
                ]
            }
        case "32":
            return {
                text: "L’homme qui est là avec vous dans cette pièce est la personne que vous avez vu dans l’eau du seau que tenait Joie dans ses bras. Cet homme, c’est vous. L’homme vous regarde, vous vous regardez. L’un d’entre vous ne peut-être que le reflet de l’autre, pas vrai ? L’un d’entre vous est forcement une illusion. Vous êtes si proche de comprendre qui vous êtes.",
                responses: [
                    {
                        id: "1",
                        text: "Demander : « Qui êtes-vous ? »",
                        to: "34"
                    },
                    {
                        id: "2",
                        text: "Demander : « Qui suis-je ? »",
                        to: "35"
                    }
                ]
            }
        case "33":
            return {
                text: "L’homme qui est là avec vous dans cette pièce est la personne que vous avez vu dans les miroirs apparus d’un claquement de doigts de Joie. Cet homme, c’est vous. L’homme vous regarde, vous vous regardez. L’un d’entre vous ne peut-être que le reflet de l’autre, pas vrai ? L’un d’entre vous est forcement une illusion. Vous êtes si proche de comprendre qui vous êtes.",
                responses: [
                    {
                        id: "1",
                        text: "Demander : « Qui êtes-vous ? »",
                        to: "34"
                    },
                    {
                        id: "2",
                        text: "Demander : « Qui suis-je ? »",
                        to: "35"
                    }
                ]
            }
        case "34":
            return {
                text: "L’homme assis sur la chaise semble enfin faire attention à votre présence, il vous regarde en se levant de sa chaise, se passe la main dans les cheveux comme s’il était face à un miroir et vous demande :  « Qui es-tu ? »",
                rewardId: "informations",
                responses: [
                    {
                        id: "1",
                        text: "Fin",
                        to: "end",
                    },
                ]
            }
        case "35":
            return {
                text: "L’homme assis sur la chaise semble enfin faire attention à votre présence, il vous regarde en se levant de sa chaise, se passe la main dans les cheveux comme s’il était face à un miroir et vous répond :  « Tu l’as toujours su. »",
                rewardId: "informations",
                responses: [
                    {
                        id: "1",
                        text: "Fin",
                        to: "end",
                    },
                ]
            }
        default:
            return null;
    }
}

export default useContent;