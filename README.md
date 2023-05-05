# Pokedex App
This is a Java-based Pokedex app that uses the HTTP API to display information about Pokemon.

The app features a search section where users can search for a Pokemon by name, and upon clicking a Pokemon, a new layout is displayed showing its details, such as weight, height, and stats including HP, attack, defense, and speed. The image of the Pokemon is displayed as a GIF.

The app is simple and easy to use.

# Preview

![Alt Text](Animation.gif)

# Features:

List of all Pokemon with their names and images.

Search bar to search for Pokemon by name.

Details page for each Pokemon showing their weight, height, and stats (HP, attack, defense, speed).

Animated GIF image for each Pokemon.

Pagination to load more Pokemon as the user scrolls.


# Technologies 


Android SDK: Provides the foundation for the app's user interface and behavior.

Java: Used as the primary programming language for the app's logic.

Picasso: A powerful image loading and caching library that helps to display Pokemon images in the app.

AppCompat: Provides a consistent user interface across different versions of Android.

ConstraintLayout: Allows developers to create complex layouts in a flexible and efficient way.

JUnit: A testing framework used for unit testing in the app.

Espresso: A testing framework used for UI testing in the app.

CardView: Provides a Material Design card-like layout for displaying Pokemon details.

Legacy Support Library: Provides backwards compatibility for older versions of Android.

Glide: A fast and efficient image loading and caching library used to display Pokemon images in the app.

# API Used
This app does not use an external API. Instead, it uses a JSON file (available at https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json) to store information about the Pokemon. 

This allows the app to work offline and without relying on an external service.

# Getting started:

Clone or download the repository for your Pokedex app.

Open the project in Android Studio.

Run the app on an emulator or physical device.

The list of Pokemon should be displayed on the main screen.

Use the search bar to search for a Pokemon by name.

Click on a Pokemon to view its details on a new screen.
