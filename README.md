# Web App from Scratch

## Live - Week 1

- http://nooroel.imamovicdesign.com/minor/web-app-from-scratch/wk1/

## Live - Week 2

- http://nooroel.imamovicdesign.com/minor/web-app-from-scratch/wk2/


## JavaScript frameworks/libaries

### Definitie
Een collectief aan componenten waar gebruik van gemaakt kan worden bij het programmeren van applicaties. Het kan eveneens gaan om afspraken onder een groep ontwikkelaars over het gebruik van bepaalde componenten. Het framework is geprogrammeerd in JavaScript en de code die via het framework wordt geschreven is JavaScript.

### Voordelen

#### Cross-browser-compatibiliteit
JavaScript-frameworks hebben in de meeste gevallen extra regels aan code voor verschillende browsers. Hierdoor wordt hen het werk bespaard of verminderd om de code die zij schrijven cross-browser-compatibel.

#### Eenvoudige selectie van DOM-elementen 
Een groot aantal JavaScript-frameworks bieden de mogelijkheid het DOM-element te doorlopen middels krachtige syntax van CSS selectors. Hierdoor is het mogelijk eenvoudigere code te schrijven om alsnog gewenste elementen te selecteren.

#### Hergebruik van code 
Websites worden met de tijd steeds interactiever, wat als gevolgd heeft dat er steeds mee JavaScript-code nodig is. In dit soort gevallen ontstaat er bij webontwikkelaars te behoefte aan een verzameling geteste en herbruikbare functionaliteiten. Het framework komt deze behoefte tegemoet.

#### Onderhoudbaarheid van code 
JavaScript-frameworks bestaan gewoonlijk uit één gecomprimeerd bestand. Deze worden dan vanuit HTML-code aangesproken. Als de framework is ingeladen, kan je overgaan tot het schrijven van je eigen JavaScript-code. Je kunt de code die jezelf schrijft hiermee simpelweg gescheiden houden van de framework-code. Indien het framework een update heeft, kan deze eenvoudig bijgewerkt worden.

#### Klasse-gebaseerde overerving
JavaScript doet aan overerving op basis van prototypes (prototype-based inheritance), in plaats van de traditionele overerving op basis van klassen (class-based inheritance). Een groot deel van de JavaScript-frameworks geven de programmeurs de mogelijkheid om met de traditionele overerving te werken. Hierdoor kunnen programmeurs die familiair zijn in het gebruik van de traditionele overerving op basis van klassen, deze alsnog toepassen in JavaScript.

### Nadelen

####Bestandsgrootte
Een JavaScript-framework neemt qua opslag al snel tientallen kilobytes in beslag. Bovendien komt je eigen code daarop bovenop. Dat kan betekenen dat de gebruikers met een langere laadtijd te maken krijgen én dat je server serieus belast kan worden.

####Laadtijd
Laadtijd wordt vanuit twee perspectieven gezien: vanuit de server én de eindgebruiker. 

####Kennis van JavaScript
Het gemak van de frameworks, denk aan knip-plak-werk van code, zorgt ervoor dat steeds minder programmeurs de moeite nemen om de scripttaal JavaScript te leren.


## JavaScript Single Page Web App

###Definitie
Een Single Page Application (SPA) is een applicatie/site waarbij de pagina nooit in zijn geheel herlaadt. De gebruikers ziet alles op één pagina gebeuren. Het gaat altijd om onderdelen van de applicatie/site die worden geladen en getoond.

###Voordelen

####Slechts relevante onderdelen herladen
Bij het herladen van traditionele websites worden alle onderdelen van de pagina herladen. In veel gevallen zijn de meeste onderdelen ongewijzigd herladen. In het geval van een SPA worden alleen die specifieke onderdelen herladen die ook echt veranderen.

####Besparing dataverkeer en reactietijd
Aangezien slechts een gedeelte wordt herladen, waar daarmee de dataverkeer en reactietijd beperkt. Prettig voor gebruikers en gunstig voor de server.

####Strikte scheiding voorkant (frontend) en achterkant (backend/server)
Vele SPA’s worden geschreven met een strikte scheiding tussen de frontend en backend/server. De communicatie vindt plaats via een JSON API. Een groot voordeel als er een tweede applicatie gebouwd moeten worden, zoals een native app.

###Nadelen

####Traditionele internetverkeer is afgestemd op multipage
Zoekmachines gaan nog uit van het traditioneel herladen van pagina’s. Op die manier crawlen ze dan ook door de door hun bezochte websites.

####Omgeving verschillen
De SPA voert de code grotendeels uit op de machine van de gebruiker. Deze omgevingen kan echter enorm verschillen. dit moet dan ook uitgebreid getest worden.

####Geheugengebruik
Aangezien de SPA in vergelijking met de traditionele herladende pagina’s continue blijft open staan, kan de geheugen oplopen. Deze wordt namelijk niet meer bij elke pagina geleegd. 


######Bronnen:
- http://docplayer.nl/5072853-Javascript-frameworks.html
- https://www.oberon.nl/whitepapers/single-page-applications
