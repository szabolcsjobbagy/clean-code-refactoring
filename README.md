Mindegyik feladatnál legelőször Unit Test-ekkel kialakítottam a safety net-et a refaktoráláshoz

calculateDiscountPercentage function:

-   Az alap (base) discount percentage értékeket kiszerveztem a constants.ts-be: DISCOUNT_PERCENTAGES_BASE

-   Az additional discount percentage értékeket kiszerveztem a constants.ts-be: DISCOUNT_PERCENTAGES_ADDITIONAL

-   A "level" paramétert átneveztem "membershipLevel"-re, így beszédesebb

-   Készítettem egy "getDiscount" függvényt, amivel az adott membershipLevel-hez tartozó base vagy additional discount percentage értékeket lehet kinyerni (ismeretlen membershipLevel esetén a DEFAULT lesz az érték)

-   És így sikerült a függvényt leegyszerűsíteni, illetve olvashatóságát és karbantarthatóságát is javítani

---

EmployeeManagementSystem class:

-   Készítettem egy public getter metódust: "getEmployees", ami visszaadja a class private "employees" property-jének értékét

-   A "calculatePayroll" metódust átneveztem "calculateTotalPayroll"-ra, így beszédesebb a neve

-   A "promoteEmployee" metódust áthelyeztem az "Employee" class-ba, szerintem inkább ott a helye

-   A "calculateTotalPayroll" és a "generateReports" metódusokat áttettem egy új, "EmployeeReport" nevű class-ba, hogy elkülönítsem a responsibility-ket (ezt még persze tovább lehet majd bontani különböző típusú EmployeeReport subclass-okra, és a class-okat külön fájlokba lehet szervezni modulárisan)

-   A class nevét "EmployeeManagementSystem"-ről "EmployeeRepository"-re változtattam, így sokkal fókuszáltabb a neve

-   A unit test-eket frissítettem

Employee class:

-   Készítettem egy public getter metódust: "getName", ami visszaadja a class private "name" property-jének értékét

-   És ahogy fentebb írtam, átkerült ide a "promoteEmployee" metódus

---

Student class:

-   Készítettem egy public getter metódust: "getName", ami visszaadja a private "name" property értékét

SchoolClass class:

-   Hozzáadtam egy "name" nevű private property-t (ami a valóságban "id" lenne), hogy legyen az iskolai osztályoknak azonosítója (a constructor-ba is betettem)

-   Készítettem egy public getter metódust: "getName", ami visszaadja a private "name" property értékét

-   Készítettem egy public metódust: "getStudentCount", ami visszaadja az iskolai osztály tanulóinak számát

School class:

-   A "classes" property-t átneveztem a beszédesebb "schoolClasses"-ra, és az "addClass" metódusban módosítottam, hogy ebbe a property-be ne a teljes schoolClass instance-ek kerüljenek, hanem csak a schoolClass-ok neve és tanulószáma ("name", "studentCount"). A "School" így nem tud semmit a "schoolClass"-on belüli student-ek adatairól.

-   Készítettem egy public getter metódust: "getSchoolClasses", ami visszaadja a private "schoolClasses" property értékét

-   Egyszerűsítettem a "getStudentCount" metódust a reduce függvény segítségével

---

ShoppingCart class:

-   Készítettem egy public getter metódust: "getItems", ami visszaadja a private "items" property értékét

-   Az "addItem" metódust módosítottam, hogy a külön "product", "price" paraméterek helyett magát a cartItem instance legyen az egyetlen paramétere

-   Egyszerűsítettem a "calculateTotal" metódust a reduce függvény segítségével

CartItem class:

-   A 2db property ("product", "price") public volt, ehelyett private-ra állítottam őket, és 2db public getter metódust készítettem: "getProduct", "getPrice" (és a ShoppingCart class "calculateTotal" metódusát is javítottam ez alapján)
