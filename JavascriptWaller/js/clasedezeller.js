export class AlgoritmoDeZeller {
    constructor(FechaIngresada) {
        this.Month = FechaIngresada.getMonth();
        this.Date = FechaIngresada.getDate();
        this.Year = FechaIngresada.getFullYear();

        if (this.Month < 2) {
            this.Year--;
            this.Month = this.Month + 13;
        } else {
            this.Month++;
        }
    }

    calculoDeZeller() {
        this.MonthAdjustment = Math.floor(((13 * (this.Month + 1)) / 5));
        this.YearAdjustment = Math.floor(this.Year / 4);
        this.CenturyAdjustment = (this.Year / 100);
        this.FourCenturiesFactor = Math.floor(this.Year / 400);
        this.ZellerNumber = Math.floor(this.Date + this.MonthAdjustment + this.Year + this.YearAdjustment - this.CenturyAdjustment + this.FourCenturiesFactor);
        this.DayOfTheWeek = this.ZellerNumber % 7;

        switch (this.DayOfTheWeek) {
            case 0:
                return 'domingo';
            case 1:
                return 'lunes';
            case 2:
                return 'martes';
            case 3:
                return 'miércoles';
            case 4:
                return 'jueves';
            case 5:
                return 'viernes';
            case 6:
                return 'sábado';
        }
    }
}