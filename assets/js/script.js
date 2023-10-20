let chapters = {
    debut: {
        titre: "Il faut partir",
        description: "Trois ans après les événements impliquant Jack Torrance et sa famille, vous êtes le nouveau concierge de l'hôtel Overlook pour la saison hivernale. Malheureusement pour vous, les esprits tourmentés continuent de hanter l'établissement et vous tentez à votre tour de fuir avant la fin de votre mandat. Les esprits s'y opposent en créant des embûches, vous êtes désorienté et la météo n'est pas de votre côté. Alors que vous errez dans l'hôtel à la recherche d'une issue, un bruit inhabituel attire votre attention. Que faites-vous?",
        image: "assets/images/debut.webp",
        boutons: [
            { titre: "Aller vers le bruit", destination: "renfort" },
            { titre: "Fuir dans la direction opposée", destination: "ascenceur" },
            { titre: "Ignorer le bruit et continuer son chemin", destination: "jumelles" }
        ]
    },
    ascenceur: {
        titre: "Tricycle hanté",
        description: "Vous avez échappé au bruit, mais pas à la frayeur. Votre course vous a mené devant l'ascenceur principal. Vous trouvez étrange de voir, devant les portes closes, un tricycle qui semble avoir été abandonné. Vous fixez l'objet insolite un instant, puis lorsque vous vous apprêtez à bouger, celui-ci se met à rouler tout seul. Il se dirige vers l'ascenceur dont les portes s'ouvrent à son approche. Paralysé, vous restez immobile, les yeux ronds, alors qu'une gigantesque vague de sang provenant de l'intérieur de l'ascenceur déferle vers vous, vous noyant dans la peur.",
        image: "assets/images/tricycle.webp",
        boutons: [
            { titre: "Réessayer", destination: "debut" }
        ]
    },
    jumelles: {
        titre: "Les jumelles Grady",
        description: "Le bruit finit par s'estomper et vous n'y pensez plus. Toujours pensif en marchant, vous vous retrouvez dans un couloir sans issue. Tout au fond de celui-ci, juste devant le mur, se tiennent côte à côte des jumelles identiques. Elles tiennent chacune un couteau ensenglanté et arborent une expression impassible. Vous n'avez pas le temps de faire un geste; les deux couteaux se retrouvent plantés dans votre poitrine en l'espace d'une seconde.",
        image: "assets/images/jumelles.webp",
        boutons: [
            { titre: "Réessayer", destination: "debut" }
        ]
    },
    renfort: {
        titre: "La radio",
        description: "En suivant le bruit, vous vous retrouvez dans une partie de l'hôtel que vous n'aviez pas encore explorée. Le bruit provenait d'interférences émises par une radio VHF dont vous ignoriez la présence dans l'établissement. Dans un élan d'espoir, vous vous dites que vous pouvez appeler du renfort. Qui contactez-vous?",
        image: "assets/images/renfort.jpg",
        boutons: [
            { titre: "La police", destination: "jack" },
            { titre: "Un garde forestier", destination: "direction" }
        ]
    },
    jack: {
        titre: "Massacre",
        description: "Vous n'arrivez pas à rejoindre le poste de police malgré vos tentatives répétées. Alors que vous êtes concentré à tenter de modifier les paramètres de la radio, le fantôme de Jack Torrance lui-même surgit derrière vous et il se fait une joie de vous massacrer à coups de hache.",
        image: "assets/images/jack.png",
        boutons: [
            { titre: "Réessayer", destination: "debut" }
        ]
    },
    direction: {
        titre: "Poursuite",
        description: "Vous réussissez à établir un contact avec le garde forestier en service et vous lui expliquez votre situation. Il vous indique où vous pourrez trouver une motoneige en location qui vous permettra de rejoindre la ville, lorsque vous arriverez à quitter les lieux. Alors que vous sortez de la salle de radio et que vous tentez de retrouver votre chemin vers la sortie, un des esprits qui hantent l'hôtel vous prend en chasse de façon agressive. Vous vous mettez à courir et vous arrivez à un carrefour. De quel côté allez-vous?",
        image: "assets/images/direction.webp",
        boutons: [
            { titre: "Tout droit", destination: "bain" },
            { titre: "À gauche", destination: "maquette" },
            { titre: "À droite", destination: "redrum" }
        ]
    },
    bain: {
        titre: "Chambre 237",
        description: "Vous foncez tout droit vers une chambre dont la porte est ouverte, vous y entrez et refermez derrière vous. Une atmosphère lourde vous enveloppe et vos jambes vous mènent vers la salle de bain sans que vous ne le décidiez. Un instinct vous pousse à regarder dans la baignoire, où se trouve quelques centimètres d'eau sale. Vous apercevez le reflet d'une vieille femme horrifiante... puis des mains sortent de l'eau! Vous quittez la chambre à toute vitesse.",
        image: "assets/images/bain.webp",
        boutons: [
            { titre: "Continuer son chemin", destination: "porte" }
        ]
    },
    redrum: {
        titre: "REDRUM",
        description: "Après votre virage, vous décidez d'entrer dans une chambre pour vous cacher, car vous êtes trop essouflé pour continuer de courir. Vous regardez autour et vous constatez qu'il est écrit REDRUM en rouge partout sur les murs. Abasourdi, vous restez figé alors qu'une ombre indescriptible s'approche de vous lentement, et vous tranche la gorge sans que vous ne puissiez poser un seul geste.",
        image: "assets/images/redrum.jpg",
        boutons: [
            { titre: "Réessayer", destination: "debut" }
        ]
    },
    maquette: {
        titre: "La maquette",
        description: "Vous vous retrouvez avec, devant vos yeux, une reproduction miniature du labyrinthe de haies qui se trouve à l'extérieur, juste devant l'hôtel. Vous l'observez un instant et vous remarquez que les allées forment un motif répétitif. Vous réalisez que seuls 4 virages à droite permettent de s'échapper du labyrinthe.",
        image: "assets/images/shining_maze.jpg",
        boutons: [
            { titre: "Continuer son chemin", destination: "porte" }
        ]
    },
    porte: {
        titre: "Enfin la sortie",
        description: "Vous vous souvenez qu'on vous pourchasse et vous vous remettez à courir. Vous arrivez enfin devant une porte menant vers l'extérieur. De quelle porte s'agit-il?",
        image: "assets/images/porte.jpg",
        boutons: [
            { titre: "La porte avant", destination: "neige" },
            { titre: "La porte arrière", destination: "labyrinthe" }
        ]
    },
    neige: {
        titre: "Banc de neige",
        description: "Soulagé, vous vous précipitez pour ouvrir la porte, mais elle semble coincée. Vous avez beau pousser de toutes vos forces, elle bouge d'à peine quelques centimètres. Vous constatez qu'un énorme banc de neige obstrue la porte de l'extérieur, et qu'il faudrait une pelle mécanique pour la dégager. Vous avez à peine le temps de vous retourner pour réfléchir à un plan b, que l'ensemble des esprits malveillants d'Overlook vous entourent et vous torturent jusqu'à ce que mort s'ensuive.",
        image: "assets/images/neige.webp",
        boutons: [
            { titre: "Réessayer", destination: "debut" }
        ]
    },
    labyrinthe: {
        titre: "Le labyrinthe",
        description: "Vous sortez dans la tempête de neige. Vous entrez dans le labyrinthe de haies pour échapper à l'esprit. Avez-vous pu observer la maquette du labyrinthe?",
        image: "assets/images/labyrinthe.jpg",
        boutons: [
            { titre: "Oui", destination: "fin" },
            { titre: "Non", destination: "gel" }
        ]
    },
    gel: {
        titre: "Perdu",
        description: "Malgré vos efforts acharnés, vous tournez en rond pendant de trop longues minutes. L'esprit retourne dans l'hôtel, sachant très bien quel sort vous attend. Il ne faut que quelques heures pour que le froid ait raison de vous et que vous périssiez, complètement gelé.",
        image: "assets/images/gel.jpg",
        boutons: [
            { titre: "Réessayer", destination: "debut" }
        ]
    },
    fin: {
        titre: "Adieu Overlook",
        description: "Suivant le chemin que vous avez mémorisé en observant la maquette, vous sortez du labyrinthe en un temps record, semant l'esprit du même coup. Vous suivez les indications du garde forestier pour trouver une motoneige et vous réussissez à vous échapper de cet enfer pour de bon!",
        image: "assets/images/fin.jpg",
        boutons: [
            { titre: "Réessayer", destination: "debut" }
        ]
    }
};

let twist = false;

function goToChapter(cle) {
    const chapitre = chapters[cle];
    const boutons = document.querySelector('.boutons');
    document.getElementById("titre").innerHTML = chapitre.titre;
    document.getElementById("description").innerHTML = chapitre.description;
    document.getElementById("image").src = chapitre.image;

    if (chapitre) {
        if (chapitre === "maquette") {
            twist = true;
        }

        while (boutons.firstChild) {
            boutons.removeChild(boutons.firstChild);
        }

        for (let i = 0; i < chapitre.boutons.length; i++) {
            if (chapitre === "labyrinthe" && twist && i == 1) {
                continue;
            }
            const nouveauBtn = document.createElement('button');
            nouveauBtn.textContent = chapitre.boutons[i].titre;
            nouveauBtn.addEventListener('click', () => {
                setTimeout(function () {
                    goToChapter(chapitre.boutons[i].destination)
                }, 300);
            });

            boutons.appendChild(nouveauBtn);
        };

    } else {
        console.log("Mauvaise clé de chapitre");
    }
}

goToChapter("debut");

