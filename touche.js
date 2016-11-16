function historyMessage(elhistory) {
    if (elhistory.length > 1) {
        switch (elhistory) {
            case "b4":
                i++;
                if (i + y == 6)
                    return "WIN !!! Vous avez attaqué la case : " + elhistory;
                else if (i == 3) return "Coulé !!! Vous avez attaqué la case : " + elhistory;
                else return "Touché !!! Vous avez attaqué la case : " + elhistory;
                break;
            case "b5":
                i++;
                if (i + y == 6)
                    return "WIN !!! Vous avez attaqué la case : " + elhistory;
                else if (i == 3) return "Coulé !!! Vous avez attaqué la case : " + elhistory;
                else return "Touché !!! Vous avez attaqué la case : " + elhistory;
                break;
            case "b6":
                i++;
                if (i + y == 6)
                    return "WIN !!! Vous avez attaqué la case : " + elhistory;
                else if (i == 3) return "Coulé !!! Vous avez attaqué la case : " + elhistory;
                else return "Touché !!! Vous avez attaqué la case : " + elhistory;
                break;
            case "d9":
                y++;
                if (i + y == 6)
                    return "WIN !!! Vous avez attaqué la case : " + elhistory;
                else if (y == 3) return "Coulé !!! Vous avez attaqué la case : " + elhistory;
                else return "Touché !!! Vous avez attaqué la case : " + elhistory;
                break;
            case "e9":
                y++;
                if (i + y == 6)
                    return "WIN !!! Vous avez attaqué la case : " + elhistory;
                else if (y == 3) return "Coulé !!! Vous avez attaqué la case : " + elhistory;
                else return "Touché !!! Vous avez attaqué la case : " + elhistory;
                break;
            case "f9":
                y++;
                if (i + y == 6)
                    return "WIN !!! Vous avez attaqué la case : " + elhistory;
                else if (y == 3) return "Coulé !!! Vous avez attaqué la case : " + elhistory;
                else return "Touché !!! Vous avez attaqué la case : " + elhistory;
                break;
        }
    }

} else if (i == 3) {

}

if (elhistory.value == "b4" | "b5" | "b6" | "d9" | "e9" | "f9") {
    return "Touché !!! Vous avez attaqué la case : " + elhistory;
}
}
}
