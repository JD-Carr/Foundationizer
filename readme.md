# Foundationizer
This is a program to help with worldbuilding efforts. A lot of tools exist but many require paying for subscriptions and some don't have functionality I wish they did, like generating random cities on the fly. Also this app it's a local program that is AGPL-3.0 open source so users can download and tinker with it to their heart's content.

The basic program flow is you create a World, which contains all your world information. Currently the plans are to support a calendar, gods/pantheon(s), Nations, Languages, and Organizations.

The app pulls data options from JSON files which you can edit outside of the program for right now.

Eventually I want to support editing the data options in the app itself. Much later down the road I may try to implement a more proper database system.

You'll be able to remove options you don't want so they won't display, and eventually later add new options. Some options will be available for multiple types of systems, so it may take me a bit to fine tune that system.

## Feature list and completion
**Feature List**
- [X] File- New World - Populates data fields from JSON files.
- [ ] File - Save World - Saves your current World data.
- [ ] File - Load World - Loads your previous world data.
- [ ] Calendar building - Create the calendar system for your world.
- [ ] Pantheon building - Create gods and pantheons.
- [ ] Nation building - Create nations and fill in their information.
- [ ] Language building - Create languages for the world.
- [ ] Organization building - Create organizations for the world.

## Calendar
Choose the number of days in year. Then create your days in a week, weeks in a month, months in a year. This will have functionality to automatically assign your calendar around specific desired numbers.

Eventually support for assigning holidays, leap year days, or non-standard calendar types (like every month having different weeks or days) will come. Also the option to have multiple calendars for the same world.

## Pantheons
Create gods, assign them domains, a rough # of adherents, names of their places of worship.

Eventually add the ability to create multiple pantheons per world.
## Nations
Create nations. Heads of state, important state leaders, population, size, number of settlements (towns/cities).

Eventually support for generating random cities and other things will come to help with fleshing out things without having to do it all by hand.
## Languages
Create spoken languages, create scripts and assign them to spoken languages, choose species that commonly speak them.

Eventually possibly try to do more to support conlang stuff, I will need to investigate possibilities.
## Organizations
Create organizations. This is meant to be a way to create anything non-state like cults, religions, guilds, mercenary companies, mercantile companies, etc. This I believe will require time to flesh out properly.

## Far off spitball ideas  
The ability to create timelines of important events for most categories like nations or organizations, so you can track important events.  

A wiki-like functionality to make it easier to navigate and add information to the different parts.
