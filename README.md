# Glagolitica Transliterator

JavaScript alat za preslikavanje latiničnog teksta u glagoljicu metodom slovo-po-slovo. Projekt je u pre-alfa fazi i otvoren za sve sugestije, komentare i doprinose.

## Motivacija

Prilikom pretraživanja internetskih rješenja za transliteraciju u glagoljicu naišao sam na vrlo skromne alate koji formom i funkcionalnošću ne zadovoljavaju zamišljenu transliteraciju u punom obliku, pa shvatite ovo kao Open Source inicijativu u kojoj pozivam sve koji žele pomoći da se pridruže.

Kako bih popunio praznine koje sam uočio, par dana prije pisanja ovog programa prvi sam put pretipkao nekoliko riječi u glagoljici. Nisam stručnjak za glagoljicu, štoviše - potpuni sam laik u tom području, pa shodno tome prilagodite svoju komunikaciju.

## Trenutno stanje

- Preslikavanje osnovnih latiničnih slova
- Prepoznavanje i zamjena digrafa (DŽ, LJ, NJ)
- Podrška za osnovne dijakritičke znakove i fallback za akcentirane varijante
- Arhaični grafemi: yat, psi, izhe, uk, fita, shta, kso
- Jednostavni leksički izuzeci (npr. _djeca_, _dijete_)

> **Napomena:** Projekt još nije cjelovit i može sadržavati netočnosti u transliteraciji.

## Poziv na suradnju

Ako studirate ili radite na području glagoljice, vaše znanje i iskustvo su dobrodošli! Tražimo pomoć u:

- Dopunjavanju i ispravljanju pravila za dijakritike i arhaične grafeme  
- Unapređenju rječničkih izuzetaka i točnosti mappinga  
- Pisanja testova koji pokrivaju rubne slučajeve i ortografske varijante  
- Sugestijama za dvosmjernu transliteraciju (latinično ↔ glagoljica)  

Svaki komentar, savjet i pull request pomoći će da ovaj alat postane stručno i pouzdano rješenje.

## Kako početi

1. Testirajte `https://jazz-it.github.io/glagolitica/`

2. Klonirajte repozitorij  
   ```bash
   git clone git@github.com:jazz-it/glagolitica.git
   cd glagolitica
   ```

3. Otvorite `index.html` u pregledniku (trebat će vam serversko okruženje)

4. Uredite ili proširite modul `js/transliteration/`

5. Pošaljite PR s vašim izmjenama

## Licenca

Ovaj projekt objavljen je pod [MIT licencom](https://github.com/jazz-it/glagolitica?tab=MIT-1-ov-file). Slobodno koristite, modificirajte i dijelite s pripadajućom atribucijom.

## Autor

Početni razvoj i ideja: [Jazz (@jazz-it)](https://github.com/jazz-it)

Hvala svima koji će pomoći u očuvanju i daljnjem razvoju ovoga malog, ali nadam se jednom - značajnog alata za glagoljicu!
