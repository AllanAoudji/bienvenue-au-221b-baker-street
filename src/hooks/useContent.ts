import { Information } from "@/ocntexts/ProfileInformations";

type Response = {
    text: string;
    id: string;
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
                text: "C’est étrange, cette façade d’immeuble. Autour de vous, et ce quelque soit la direction ou se pose votre regard, se prolonge à l’infini un abysse d’un noir profond. Au dessus de vous, là ou devrait se tenir le soleil, ou la lune et les étoiles, vous ne voyez rien. Dans ce vide immense, vous pourriez presque douter de l’existence du sol si vous n’étiez pas debout droit sur vos jambes. Et pourtant, dans ce monde étrange et inquiétant se tient devant vous cette façade en pierres brutes, comme si elle avait été arraché à quelque réalité. La situation est d’autant plus étonnante car vous n’avez aucun souvenir d’être arrivé jusqu’à elle, comme si elle avait toujours été là, tout comme vous. En l’observant, vous remarquez une porte en bois, et sur sa droite une fenêtre d’ou émane une vive lumière blanche aveuglante. Au dessus d’elle, une pancarte est fixé au mur, celle-ci indique « 221b Baker Street ».",
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
                text: "En vous approchant de l’immeuble et de cette fenêtre, vous voyez la lueur émanant de l’intérieur s’intensifier. Arrivé à sa hauteur, vous vous rendez compte que la violence du rayonnement vous empêche de garder les yeux ouverts et de réussir à y jeter un coup d’œil. Si vous souhaitez savoir ce que cache cette façade, vous n’aurez pas le choix, il va falloir pénétrer par cette porte.",
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
                text: "Tant pis pour cette façade. Tant pis pour cet immeuble. Tant pis pour le 221b Baker Street, il y aura peut-être quelque chose d’autre à découvrir dans cet abysse. Vous partez, à gauche, à droite, devant vous ou derrière vous, cela n’a pas vraiment d’importance. Vous marchez un temps sans réussir à ne pas jeter régulièrement un regard derrière vous pour apercevoir cette façade s’éloigner au rythme de vos pas, s’enfonçant petit à petit dans les limbes jusqu’à disparaître complètement. Puis une penser dérangeante vient vous effleurez l’esprit, vous vous rendez compte que vous ne savez plus vraiment depuis combien de temps vous êtes en train de marcher, comme si le temps lui même n’avais aucune prise dans ce monde. C’est étrange, cette façade d’immeuble. La revoilà, devant vous. Vous n’arrivez pas à expliquer si c’est vous qui avez tournez en rond, ou si une force invisible vous attirait jusqu’à elle, mais la revoilà. Implacable. Face à vous.",
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
                text: "Vous décidez d’ouvrir la porte de la façade et de pénétrer à l’intérieur à l’intérieur du 221b Baker Street. L’intérieur est sobrement décoré. Un grand tapis à motif floral multicolor est posé au sol. Au coin de la pièce à été placé une table basse dans un style rococo. Deux tableaux jonche les murs, l’un représente une nature morte, l’autre un paysage montagneux. Au centre de la pièce une vieille femme est assises sur une chaise en bois. Elle est habillée d’une robe de soie rouge et porte sur la tête un immense chapeau en laine violet. Elle vous regarde, sans rien. Dans ses bras, la vieille femme tient une sorte de seau métallique, de là ou vous êtes, impossible de dire ce qu’il contient.",
                responses: [
                    {
                        id: "1",
                        text: "Qui êtes-vous ?",
                        to: "5",
                    },
                    {
                        id: "1",
                        text: "Quel est cet endroit ?",
                        to: "6",
                    }
                ],
            }
        case "5":
            return {
                text: "La vieille femme continue de vous regarder, de vous sourire et ne vous répond pas. Vous douteriez presque d'avoir poser la question, et la sagesse qui se dégage de son regard vous empêche d'avoir envie de la brusquer. C’est après un long silence qui vous sembla durer une éternité que la vieille femme prend la peine de vous parler. « Cette question a-t-elle vraiment de l’importance alors que vous ne vous ne vous êtes pas présentez ? » Ces simples mots vous coupent brusquement le souffle. De terreur, vous vous rendez compte que vous n’avez absolument aucun aucun souvenir. Aucun souvenir de qui vous êtes, aucun souvenir de qui vous étiez. Après avoir pris la peine de vous laissez le temps de reprendre vos esprits, la vieille femme continue : « Ne me posez pas la question. Je serais incapable de vous le dire. La réponse ne viendra pas de moi, mais j’ai peut-être la possibilité de vous aidez. Il vous suffit simplement de jeter un coup d’oeil à l’intérieur du seau que je tiens dans mes bras. »",
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
                text: "La vieille femme continue de vous regarder, de vous sourire et ne vous répond pas. Vous douteriez presque d'avoir poser la question, et la sagesse qui se dégage de son regard vous empêche d'avoir envie de la brusquer. C’est après un long silence qui vous sembla durer une éternité que la vieille femme prend la peine de vous parler. « Pour l’instant, la réponse à cette question n’a que peut d’importance ».",
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
                text: "« Ce n'est toujours pas la bonne question me à posez alors que vous ne vous ne vous êtes pas présentez. » Ces simples mots vous coupent brusquement le souffle. De terreur, vous vous rendez compte que vous n’avez absolument aucun aucun souvenir. Aucun souvenir de qui vous êtes, aucun souvenir de qui vous étiez. Après avoir pris la peine de vous laissez le temps de reprendre vos esprits, la vieille femme continue : « Ne me posez pas la question. Je serais incapable de vous le dire. La réponse ne viendra pas de moi, mais j’ai peut-être la possibilité de vous aidez. Il vous suffit simplement de jeter un coup d’oeil à l’intérieur du seau que je tiens dans mes bras. »",
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
                text: "Vous vous approchez doucement de la vieille femme et de son seau. Vous baissez la tête et vous rendez compte qu’il est rempli à raz-bord d’une eau claire. Sans comprendre l’intérêt de la chose, vous levez les yeux pour essayer de trouver dans son regard muet l’attention que vous devriez porter à un simple seau d’eau. Pourtant, la réponse à vos questions s’y trouve bien. Dans cet eau, vous voyez un visage qui vous regarde. Votre reflet ? Le sentiment est étonnant, si aucun maléfice ne trompe vos sens, ce visage est bien le votre. C’est la première fois que vous le voyez et pourtant il vous semble si familier.",
                rewardId: "profilePicture",
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
                text: "Alors que la voix de la vieille femme était auparavant aussi douce et aussi sage que son regard, son ton se transforma brusquement pour prendre une intonation presque menaçante si l’on oubliait que son sourire était encore présent sur son visage. « Avez-vous donc si peur de découvrir qui vous êtes ? » Et aussi brusquement que le changement du ton de sa voix, toujours assis sur sa chaise, la vieille femme lâchas au sol le seau quelle tenait dans ses bras et fit claquer les doigts de sa main droite. Aussi brusquement que ce claquement de doigts, les quatre murs de la pièce, son sol et son plafond se transformèrent en miroir. Impossible d’y échapper, vous voyez votre reflet, votre visage et votre corps se reflétant encore et encore et encore, partout, à l’infini. Puis cette vision disparût aussi rapidement quelle était arrivé.",
                rewardId: "profilePicture",
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
                text: "Vous voyez la vieille femme se lever doucement de sa chaise : « Maintenant que vous en savez un peu plus sur vous même, je vais pouvoir vous dire qui je suis, et quel est cette endroit. Suivez-moi. » Lentement, la vieille femme se dirige vers une porte en bois au fond de la pièce et vous invites d’un geste de la main à la suivre. Vous n’aviez pas remarqué qu’une porte se trouvait là. Non, ce n’est pas ça. La porte n’était pas présente dans cette pièce avant que la vieille femme ne se lève de sa chaise.",
                responses: [
                    {
                        id: "1",
                        text: "Suivre la vieille femme",
                        to: "12",
                    },
                    {
                        id: "1",
                        text: "Rester là ou vous êtes",
                        to: "11",
                    },
                ],
            }
        case "11":
            return {
                text: "Comprenant que vous ne contiez pas la suivre, la vieille femme se retourne, et avant franchir la porte, vous la voyez une nouvelle fois vous sourire et vous dire ces quelques mots : « il serait presque dangereux de rester seul dans ce lieu, sans souvenir, sans personne pour vous guider. Suivez-moi. Je ne vous veux aucun mal. »",
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
                text: "Vous franchissez la porte et arrivez dans une pièce avec une atmosphère bien différente de la précédente. Ici, plongé dans une ambiance rappelant fortement les Années Folles, on été disposé une dizaines de meubles tous différents les uns des autres. Vous remarquez que toutes leurs portes sont fermés par des cadenas. Pour accompagné ce décors, trois objets étranges sont posés ça et là, semblables à des mécanismes, des sortes d’énigmes à résoudre lié d’une manière ou d’une autre à l’ouverture des cadenas. Dans cette pièce, cinq personnes sont en train de s’agiter pour tenter de comprendre la logique de tout ceci. Vous pouvez lire la joie sur leur visage à prendre partie de ce jeu. Vous êtes là, debout à côté de la vieille dame à les observer, mais les cinq personnes ne semblent pas remarquer votre présence. Votre irruption dans cette pièce ne semble pas les avoir dérangé, ni perturbé, comme si vous étiez invisible à leurs yeux. Vous observez la vieille dame, qui semble prendre plaisir à voir ces personnes s’amuser. Et sans détourner le regard, elle finit par prendre la parole : « Tu l’auras peut-être deviné mais ces personnes ne peuvent pas entendre le son de nos voix, de la même manière qu’ils ne peuvent pas nous voir. S’ils venaient à tendre leur main dans notre direction, elle viendrait à traverser notre corps. Nous sommes bien tout les deux au 221b Baker Street, tout comme eux. Et pourtant, en un sens, nous nous situons à un endroit bien différent de nos cinq visiteurs. Eux, sont actuellement à Dijon, et ils sont en train de jouer tout les cinq à un Escape Game. Nous somme de notre côté, derrière les rideaux de ce jeu, dans le monde des idées, dans une certaine mesure, dans le monde des sentiments. Je suis l’un d’entre eux, tu peux m’appeler Joie, ou Amusement si tu préfères. Je suis présente partout, à chaque fois que des personnes décident de jouer ensemble. Je suis présente dans chaque jeu que les Hommes viennent à inventer pour passer le temps. » L’une des cinq personnes semblent avoir trouver comment déverrouiller un des cadenas, le groupe cri d’extase, Joie s’interrompt profitant de ce moment de bonheur, puis reprend : « Je ne sais pas comment tu t’es retrouver ici avec moi, mais pour comprendre pourquoi tu es là, il va nous falloir comprendre qui tu es. Et je vais t’aider. » Joie s’interrompt de nouveau, cette fois-ci a cause de vous. Absorber par la scène et l’agitation de ces cinq personnes, vous avez fini par ne plus l’écouter qu’à moitié. L’une des personnes a trouvé le fonctionnement d’un mécanisme, une porte dérober s’ouvre, et les cinq personnes s’engouffrent dans la pièce dissimulée, découvrant de nouvelles énigmes, de nouveaux cadenas et de nouveaux mécanismes. Cela est évident, vous finissez vous aussi par sourire, le mécanisme semble aussi avoir déverrouillé une partie de vos souvenirs.",
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
                text: "Joie vous laisse apprécier ces nouveaux souvenirs un moment avant de vous parler : « je vais devoir m’en aller, mais ne t’en fais pas, je vais laisser tes souvenirs au main d’un bon ami à moi. Tu verras, il peut être brusque parfois, mais cela vaut le coup d’avoir une conversation avec lui. Avant de partir, j’ai quelque chose pour toi, un présent. » Sur ces mots, Joie vous présente deux objets. Dans sa main droite une montre à gousset rouillé décoré d’enluminure. Dans sa main gauche, un vieux carnet abimé de toute part. « Je suis désolé, tu vas devoir choisir, je ne peux pas te confier ces deux objets en même temps. »",
                responses: [
                    {
                        id: "1",
                        text: "Choisir la montre",
                        to: "14",
                    },
                    {
                        id: "2",
                        text: "Choisir le carnet",
                        to: "15"
                    }
                ],
            }
        case "14":
            return {
                text: "Joie sourit : « le choix est un processus important dans ta guérison. Maintenant, pour rencontrer mon ami, il te suffit de franchir la porte que nous avions pris pour arriver dans cette salle d’escape game. Ne t’en fais pas, tu t’en sors très bien, tout va bien se passer. » Et sur ces derniers mots, Joie disparait, comme si elle n’avait jamais été là. Mais vous le savez au fond de vous, elle n’a pas été le fruit de votre imagination. Son sourire, son sage regard et ses silences réfléchis ont toujours fait partie de vous. Avec elle, les cris de bonheur et les rires des cinq autres personnes se sont tuent. Et maintenant que vous êtes seul dans cette pièce, vous regardez alternativement cette porte devant vous, puis cette montre que vous tenez fermement dans votre main.",
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
                text: "Joie sourit : « le choix est un processus important dans ta guérison. Maintenant, pour rencontrer mon ami, il te suffit de franchir la porte que nous avions pris pour arriver dans cette salle d’escape game. Ne t’en fais pas, tu t’en sors très bien, tout va bien se passer. » Et sur ces derniers mots, Joie disparait, comme si elle n’avait jamais été là. Mais vous le savez au fond de vous, elle n’a pas été le fruit de votre imagination. Son sourire, son sage regard et ses silences réfléchis ont toujours fait partie de vous. Avec elle, les cris de bonheur et les rires des cinq autres personnes se sont tuent. Et maintenant que vous êtes seul dans cette pièce, vous regardez alternativement cette porte devant vous, puis cet carnet que vous tenez fermement dans votre main.",
                rewardId: "choixDuCarnet",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir le carnet",
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
                text: "Vous ouvrez la montre. Chose inhabituelle, vous vous apercevez que ses aiguilles tournent à l’envers. Même le son du cliquetis semble être aspiré vers l’intérieur de la montre. Ce tempo continu fini par résonner dans votre tête, comme si vos pensée s’accordait au diapason avec le son émis par la montre. Votre vision se floute, comme si elle laissait place pendant un temps au reste de vos sens. Puis elle revient aussi doucement qu’elle était parti, la montre est toujours là, la porte aussi. Mais quelque chose à changer dans vos souvenirs. Il est maintenant temps de rencontrer l’ami de Joie.",
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
                text: "Vous feuilletez les nombreuses pages du carnet, la plupart sont rempli de note écrite à la main, la plupart ont été barré. Sur d’autres, vous pouvez voir des dessins de personnes et de paysages. Sur d’autres, des croquis indescriptibles. Certaines pages ont été visiblement arraché. Tout ce qui en ressort est une pensée chaotique et irrégulière, vide de sens dans son ensemble. Pourtant à force de regarder ces notes, ces dessins et ces croquis, vous finissez par déchiffrer petit à petit le sens de ce carnet. Sans réussir à y donner une interprétation précise, tout ceci fini par résonner en vous, comme si une partie subconsciente de votre être était capable d’y lire un langage qui n’était adressé qu’à elle. Il est maintenant temps de rencontrer l’ami de Joie.",
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
                text: "Évidemment, la pièce dans laquelle vous venez d’entrer n’est plus la même que celle de tout à l’heure. Plus de tapis, plus de tableau, la chaise sur laquelle était assise Joie n’est pas là non plus. À leur place, vous vous trouvez dans une pièce cubic dont les murs, le sol et le plafond ont été peint d’une même couleur bleu ciel. En son centre, un homme d’une taille titanesque, assis à même le sol, vous regarde. Obligé de pencher le cou pour ne pas toucher le plafond, le corps de l’homme rempli pratiquement l’entièreté du lieu. Il est habillé d’un costume noir taillé parfaitement pour l’ampleur de son corps, et ses yeux entièrement teinté d’un noir aussi profond que son costume semble percer votre être : « Je vois que tu n’as pas pris la peine d’ouvrir le présent que Joie t’as offert, je ne prendrais pas la peine de te parler tant que cela ne sera pas fait ». Sa voix grave rauque, semble venir des profondeurs de la terre.",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrire la montre",
                        to: "20",
                    },
                ],
            }
        case "19":
            return {
                text: "Évidemment, la pièce dans laquelle vous venez d’entrer n’est plus la même que celle de tout à l’heure. Plus de tapis, plus de tableau, la chaise sur laquelle était assise Joie n’est pas là non plus. À leur place, vous vous trouvez dans une pièce cubic dont les murs, le sol et le plafond ont été peint d’une même couleur bleu ciel. En son centre, un homme d’une taille titanesque, assis à même le sol, vous regarde. Obligé de pencher le cou pour ne pas toucher le plafond, le corps de l’homme rempli pratiquement l’entièreté du lieu. Il est habillé d’un costume noir taillé parfaitement pour l’ampleur de son corps, et ses yeux entièrement teinté d’un noir aussi profond que son costume semble percer votre être : « Je vois que tu n’as pas pris la peine d’ouvrir le présent que Joie t’as offert, je ne prendrais pas la peine de te parler tant que cela ne sera pas fait ». Sa voix grave rauque, semble venir des profondeurs de la terre.",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrire le carnet",
                        to: "21",
                    },
                ],
            }
        case "20":
            return {
                text: "Vous ouvrez la montre. Chose inhabituelle, vous vous apercevez que ses aiguilles tournent à l’envers. Même le son du cliquetis semble être aspiré vers l’intérieur de la montre. Ce tempo continu fini par résonner dans votre tête, comme si vos pensée s’accordait au diapason avec le son émis par la montre. Votre vision se floute, comme si elle laissait place pendant un temps au reste de vos sens. Puis elle revient aussi doucement qu’elle était parti, la montre est toujours là, la porte aussi. Mais quelque chose à changer dans vos souvenirs. Le géant n’a pas cligné une fois des yeux pendant tout ce temps, vous avez l’impression que son regard obscure est en train de vous sonder de la tête aux pieds.",
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
                text: "Vous feuilletez les nombreuses pages du carnet, la plupart sont rempli de note écrite à la main, la plupart ont été barré. Sur d’autres, vous pouvez voir des dessins de personnes et de paysages. Sur d’autres, des croquis indescriptibles. Certaines pages ont été visiblement arraché. Tout ce qui en ressort est une pensée chaotique et irrégulière, vide de sens dans son ensemble. Pourtant à force de regarder ces notes, ces dessins et ces croquis, vous finissez par déchiffrer petit à petit le sens de ce carnet. Sans réussir à y donner une interprétation précise, tout ceci fini par résonner en vous, comme si une partie subconsciente de votre être était capable d’y lire un langage qui n’était adressé qu’à elle. Le géant n’a pas cligné une fois des yeux pendant tout ce temps, vous avez l’impression que son regard obscure est en train de vous sonder de la tête aux pieds.",
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
                text: "Évidemment, la pièce dans laquelle vous venez d’entrer n’est plus la même que celle de tout à l’heure. Plus de tapis, plus de tableau, la chaise sur laquelle était assise Joie n’est pas là non plus. À leur place, vous vous trouvez dans une pièce cubic dont les murs, le sol et le plafond ont été peint d’une même couleur bleu ciel. En son centre, un homme d’une taille titanesque, assis à même le sol, vous regarde. Obligé de pencher le cou pour ne pas toucher le plafond, le corps de l’homme rempli pratiquement l’entièreté du lieu. Il est habillé d’un costume noir taillé parfaitement pour l’ampleur de son corps, et ses yeux entièrement teinté d’un noir aussi profond que son costume semble percer votre être : « Au vu de ton regard méfiant, je vois que Joie n’a pas pris la peine de me présenter. Cela lui ressemble bien. » Sa voix grave rauque, semble venir des profondeurs de la terre. « Je me nomme Savoir, Connaissance, et de temps à autres, Imagination. Je suis au courant pour ton problème de … » Il marque une pause. « Mémoire. Tourne sur toi même lentement veux-tu ? »",
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
                text: "« Bien, maintenant, passons aux choses sérieuses. Au vu de ton regard méfiant, je vois que Joie n’a pas pris la peine de me présenter. Cela lui ressemble bien. » Sa voix grave rauque, semble venir des profondeurs de la terre. « Je me nomme Savoir, Connaissance, et de temps à autres, Imagination. Je suis au courant pour ton problème de … » Il marque une pause. « Mémoire. Tourne sur toi même lentement veux-tu ? »",
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
                text: "« Bien que la demande soit grotesque, vous obéissez à Savoir. Vous tournez sur vous même pendant que vous voyez le géant vous observe attentivement. Revenu sur place, la demande suivante est encore de tourner sur place, mais cette fois, dans l’autre sens. Après ce deuxième tour, vous observez Savoir se grater la tête, se racler la gorge, puis passer ses doigts sur son menton comme si vos actions venait de lui apprendre quelque chose. Et sans prévenir, le géant vient s’approcher de vous et vous tenir la tête qui parait maintenant minuscule à l’intérieur de sa main gigantesque. Son visage est a quelques centimètres du votre : « Fascinant, ton corps parle pour toi. Je vais te laisser contempler ce que mon regard m’a appris de toi. » Sur ces mots, vous vous sentez partir. La poigne du géant qui vous retenait la tête et vous clouait sur place se relâche. Pendant un instant, vous avez l’impression de vous voir, comme si vous vous regardiez à travers les yeux de Savoir. Vous comprenez alors ce que le géant a vu en vous.»",
                rewardId: "knowHow",
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
                text: "Sans prévenir, le géant vient s’approcher de vous et vous tenir la tête qui parait maintenant minuscule à l’intérieur de sa main gigantesque. Son visage est a quelques centimètres du votre : « Tu sauras que dès que je pose les yeux sur quelqu’un, plus rien en lui ne peut m’échapper. C’est fascinant, ton corps parle pour toi. Je vais te laisser contempler ce que mon regard m’a appris de toi. » Sur ces mots, vous vous sentez partir. La poigne du géant qui vous retenait la tête et vous clouait sur place se relâche. Pendant un instant, vous avez l’impression de vous voir, comme si vous vous regardiez à travers les yeux de Savoir. Vous comprenez alors ce que le géant a vu en vous.",
                rewardId: "knowHow",
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
                text: "« Le rôle que je devais tenir avec toi est maintenant terminer. » Au fur des mots prononcés par Savoir, vous voyez sa taille, son corps diminuer petit à petit, jusqu’à prendre une proportion humaine. Derrière lui, vous pouvez maintenant remarquer que son corps dissimulait une porte en bois. Savoir se tourne vers elle est vous l’ouvre. « Il te reste maintenant qu’une seule et dernière chose à faire, avant de prendre une toute dernière decision. » Sa voix, dans ce corps est devenu douce et chaleureuse. « Mais avant de me quitter, Joie m’a demander de te remettre ceci. »",
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
                        id: "1",
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
                text: "L’homme tient dans sa main la montre à gousset que Joie avait gardé avec elle. Savoir vous le donne : « Je vais m’assurer que tu l’ouvres avant que tu franchisses cette porte. »",
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
                text: "L’homme tient dans sa main le carnet que Joie avait gardé avec elle. Savoir vous le donne : « Je vais m’assurer que tu l’ouvres avant que tu franchisses cette porte. »",
                responses: [
                    {
                        id: "1",
                        text: "Ouvrir le carnet",
                        to: "30"
                    },
                ]
            }
        case "29":
            return {
                text: "Vous ouvrez la montre pendant que Savoir vous observe. Chose inhabituelle, vous vous apercevez que ses aiguilles tournent à l’envers. Même le son du cliquetis semble être aspiré vers l’intérieur de la montre. Ce tempo continu fini par résonner dans votre tête, comme si vos pensée s’accordait au diapason avec le son émis par la montre. Votre vision se floute, comme si elle laissait place pendant un temps au reste de vos sens. Puis elle revient aussi doucement qu’elle était parti, la montre est toujours là, la porte aussi. Mais quelque chose à changer dans vos souvenirs. Il est donc temps de dire au revoir à Savoir.",
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
                text: "Pendant que Savoir vous observe, vous feuilletez les nombreuses pages du carnet, la plupart sont rempli de note écrite à la main, la plupart ont été barré. Sur d’autres, vous pouvez voir des dessins de personnes et de paysages. Sur d’autres, des croquis indescriptibles. Certaines pages ont été visiblement arraché. Tout ce qui en ressort est une pensée chaotique et irrégulière, vide de sens dans son ensemble. Pourtant à force de regarder ces notes, ces dessins et ces croquis, vous finissez par déchiffrer petit à petit le sens de ce carnet. Sans réussir à y donner une interprétation précise, tout ceci fini par résonner en vous, comme si une partie subconsciente de votre être était capable d’y lire un langage qui n’était adressé qu’à elle. Il est donc temps de dire au revoir à Savoir.",
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
                text: "...",
                responses: [
                    {
                        id: "1",
                        text: "Continuer",
                        to: "31"
                    },
                ]
            }
        default:
            return null;
    }
}

export default useContent;