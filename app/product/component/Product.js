"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const Product = () => {
  const imageUrls = [
    {
      id: 1,
      url: "/assest/product9.jpg",
      name: "Tea",
      des: "Indulge in the comforting warmth of freshly steeped green tea, a rejuvenating elixir that balances earthy undertones with a hint of grassy freshness.",
    },
    {
      id: 2,
      url: "/assest/product10.jpg",
      name: "Coffee",
      des: "Awaken your senses with the invigorating essence of freshly brewed coffee, where bold notes of roasted beans dance with the a rich, velvety crema.",
    },
  ];

  const imageUrls1 = [
    {
      id: 1,
      url: "/assest/Foxtail.jpg",
      name: "Foxtrail",
      des: "Foxtrail transforms city streets into a playground of intrigue and excitement, strategy, and exploration for an unforgettable outdoor adventure.",
    },
    {
      id: 2,
      url: "/assest/Rice.jpg",
      name: "Rice",
      des: " Rice is a staple food for a significant portion of the world's population, and there are various types, uses, and cultural aspects related to rice.",
    },
    {
      id: 2,
      url: "/assest/Paddy(Basmati).jpg",
      name: "Paddy(Basmati)",
      des: "Basmati rice plants reach maturity, the grains are harvested. At this stage, the rice is referred to as paddy.",
    },
  ];

  const imageUrls2 = [
    {
      id: 1,
      url: "/assest/Cashewnuts.jpg",
      name: "Cashewnuts",
      des: "Cashew nuts are a good source of healthy fats, protein, and various essential nutrients.",
    },
  ];

  const imageUrls3 = [
    {
      id: 1,
      url: "/assest/product21.jpg",
      name: "Cotton",
      des: "Cotton cultivation can have environmental implications, as it often involves the use of pesticides and water-intensive farming practices.",
    },
  ];

  const imageUrls4 = [
    {
      id: 1,
      url: "/assest/g4.jpg",
      name: "Jasmine",
      des: "Jasmine, a fragrant bloom of elegance, captivates with its sweet, floral notes, gracing gardens and perfumes with a timeless charm.",
    },
    {
      id: 2,
      url: "/assest/g5.jpg",
      name: "Lotus",
      des: "The lotus, emerging pristine from muddy waters, symbolizes purity and enlightenment, its delicate petals unfolding in serene elegance.",
    },
  ];

  const imageUrls5 = [
    {
      id: 1,
      url: "/assest/Bamboo.jpg",
      name: "Bamboo",
      des: "Bamboo, a resilient and versatile grass, stands tall in quiet strength, embodying flexibility and sustainability in its slender yet sturdy form.",
    },
    {
      id: 2,
      url: "/assest/Tamarindseed.jpg",
      name: "Tamarind seed",
      des: "The tamarind seed, encased within a tangy pod, holds a treasure of potential, prized for its versatile uses in culinary delights and traditional medicines.",
    },
    {
      id: 2,
      url: "/assest/tamarind.jpg",
      name: "Tamarind Fruit",
      des: "The tamarind fruit, with its brown, brittle shell, lending a distinctive flavor to cuisines across the globe.",
    },
  ];

  const imageUrls6 = [
    {
      id: 1,
      url: "/assest/Amla.jpg",
      name: "Amla",
      des: "Amla, also known as Indian gooseberry, is a small, vibrant green fruit revered for its potent health benefits, brimming with vitamin C and antioxidants.",
    },
    {
      id: 2,
      url: "/assest/Jackfruit.jpg",
      name: "Jack",
      des: "As a sustainable and nutritious marvel, the jackfruit's seeds are often roasted or boiled, offering a nutty delight, completing the wholesome profile of this tropical treasure.",
    },
    {
      id: 2,
      url: "/assest/Orange.jpg",
      name: "Orange",
      des: "The orange, a citrus jewel with a vibrant, sun-kissed hue, delivers a burst of refreshing sweetness, packing a citrusy punch in every juicy segment.",
    },
    {
      id: 1,
      url: "/assest/Papaya.jpg",
      name: "Papaya",
      des: "Papaya, with its luscious orange flesh and tropical allure, unfolds a symphony of flavors, marrying sweetness and a hint of musky richness.",
    },
    {
      id: 2,
      url: "/assest/Karbuja(muskmelon).jpg",
      name: "Karbuja",
      des: "Kharbuja, or muskmelon, boasts a juicy, pale orange interior encased in a textured rind, delivering a sweet and fragrant experience synonymous with summertime refreshment.",
    },
    {
      id: 2,
      url: "/assest/tender(coconut).jpg",
      name: "Tender Coconut",
      des: "Tender coconut, nature's hydrating elixir, offers a refreshing and mildly sweet water encased in a young, green husk, providing a tropical oasis in each sip.",
    },
    {
      id: 1,
      url: "/assest/Banana.jpg",
      name: "Banana",
      des: "Banana, the universally loved fruit, unveils its creamy, potassium-rich goodness, providing a convenient and nutritious snack wrapped in its yellow peel.",
    },
    {
      id: 2,
      url: "/assest/Guava.jpg",
      name: "Guava",
      des: "Guava stands as a nutritional powerhouse, its rich vitamin C content and unique taste making it a refreshing addition to fruit salads, juices, and culinary creations.",
    },
    {
      id: 2,
      url: "/assest/Mango.jpg",
      name: "Mango",
      des: "The 'king of fruits,' seduces the senses with its golden hues and succulent flesh, weaving a tropical symphony of sweetness that captures the essence of summer.",
    },
    {
      id: 2,
      url: "/assest/Nellikai.jpg",
      name: "Nelli kai",
      des: "Nelli Kai, or Indian gooseberry, stands as a potent source of Vitamin C, its small green orbs embodying both tangy taste and traditional wellness in various cuisines.",
    },
    {
      id: 2,
      url: "/assest/Watermelon.jpg",
      name: "Water Melon",
      des: "Watermelon, a quintessential summer treat, unfolds its vibrant pink interior, offering a juicy, hydrating experience that captures the essence of sunny days.",
    },
  ];

  const imageUrls7 = [
    {
      id: 1,
      url: "/assest/Bull.jpg",
      name: "Bull",
      des: "Bull meat, derived from mature male cattle, often utilized in various cuisines for dishes that celebrate its unique taste and texture.",
    },
    {
      id: 2,
      url: "/assest/Duck.jpg",
      name: "Duck",
      des: "Duck meat adds a gourmet touch to meals, creating a delightful harmony of taste and texture that is appreciated in both home cooking and fine dining.",
    },
    {
      id: 2,
      url: "/assest/buffalo1.jpg",
      name: " Buffalo",
      des: "Buffalo meat, derived from the male water buffalo, known as the 'he buffalo,' is prized for its lean quality and distinctive taste.",
    },
    {
      id: 1,
      url: "/assest/Ram.jpg",
      name: "Ram",
      des: "Ram meat, sourced from mature male sheep, offers a hearty and flavorful option in culinary landscapes. Known for its distinctive taste and tenderness.",
    },
    {
      id: 2,
      url: "/assest/calf1.jpeg",
      name: "Calf",
      des: "Calf meat, obtained from young cattle, is prized for its tender and delicate texture. Often utilized in various culinary creations, from succulent roasts to tender cutlets.",
    },
    {
      id: 2,
      url: "/assest/Egg.jpg",
      name: "Egg",
      des: "Egg, while not typically referred to as meat, is a protein-rich and versatile culinary ingredient. ",
    },
    {
      id: 1,
      url: "/assest/Hen.jpg",
      name: "Hen",
      des: "Hen meat, derived from mature female chickens. Commonly used in diverse culinary creations, hen meat is a versatile option in various cuisines.",
    },
    {
      id: 2,
      url: "/assest/Shebuffalo.jpg",
      name: "She Buffalo",
      des: "She buffalo meat, sourced from mature female water buffaloes, is prized for its robust and savory taste.",
    },
    {
      id: 2,
      url: "/assest/Cock.jpg",
      name: "Cock",
      des: "Cock meat, derived from mature male chickens, offers a distinctive and flavorful option in culinary pursuits. ",
    },
    {
      id: 2,
      url: "/assest/Fish.jpg",
      name: "Fish",
      des: "Fish meat, renowned for its lean protein and omega-3 fatty acids, presents a versatile option in diverse cuisines.",
    },
    {
      id: 2,
      url: "/assest/Ox.jpg",
      name: "Ox",
      des: "Ox meat becomes a canvas for chefs, offering a savory foundation for dishes that celebrate slow-cooking techniques and the melding of flavors.",
    },
    {
      id: 2,
      url: "/assest/Shegoat.jpg",
      name: "She Goat",
      des: "She goat meat, obtained from mature female goats, is prized for its lean and flavorful profile. Often featured in regional cuisines, from spicy curries to succulent roasts.",
    },
    {
      id: 2,
      url: "/assest/Cow.jpg",
      name: "Cow",
      des: "Cow meat, commonly known as beef, is a staple in many cuisines globally, valued for its rich flavor and versatility.",
    },
    {
      id: 2,
      url: "/assest/Goat.jpg",
      name: "Goat",
      des: "Goat meat, known as chevon or mutton, offers a flavorful and lean alternative in culinary landscapes. Its distinctive taste, enhances a variety of dishes.",
    },
    {
      id: 2,
      url: "/assest/Sheep.jpg",
      name: "Sheep",
      des: "Sheep meat, commonly known as lamb or mutton, presents a tender and flavorful option in diverse culinary traditions. ",
    },
  ];

  const imageUrls8 = [
    {
      id: 1,
      url: "/assest/Castor.jpg",
      name: "Caster Seed",
      des: "Caster seed, also known as castor bean or ricinus communis, doesn't typically produce a meat as it's primarily grown for its seeds.",
    },
    {
      id: 2,
      url: "/assest/Groundnuts.jpg",
      name: "Ground Nut Seed",
      des: "Groundnut, also known as peanut, offers a protein-rich and flavorful seed, commonly consumed as a snack or as a versatile ingredient in culinary creations.",
    },
    {
      id: 2,
      url: "/assest/Honge.jpg",
      name: "Honge Seed",
      des: "Honge seed, derived from the Pongamia pinnata tree, is valued for its oil extraction and use in biodiesel production. ",
    },
    {
      id: 1,
      url: "/assest/Safflower.jpg",
      name: "Safflower",
      des: "Safflower, a thistle-like plant, produces seeds used for extracting safflower oil. Known for its mild flavor and high oleic acid content.",
    },
    {
      id: 2,
      url: "/assest/Sunflower1.jpg",
      name: "Sunflower Seed",
      des: "Sunflower seeds, harvested from the vibrant sunflower plant, are nutrient-rich and popular as a wholesome snack.",
    },
    {
      id: 2,
      url: "/assest/Coconuts.jpeg",
      name: "Coconut Seed",
      des: "The coconut seed, commonly known as the coconut kernel or endosperm, is the edible part of the coconut fruit",
    },
    {
      id: 1,
      url: "/assest/Groundnut1.jpeg",
      name: "Groundnut",
      des: "Groundnut, also known as peanut, is a legume with a nutrient-rich seed that is a popular snack and ingredient in various cuisines.",
    },
    {
      id: 2,
      url: "/assest/Linseed.jpg",
      name: "Linseed",
      des: "Linseed is a rich in omega-3 fatty acids, fiber, and antioxidants, linseed is often incorporated into diets to promote heart health and digestive well-being.",
    },
    {
      id: 2,
      url: "/assest/Sesamum.jpg",
      name: "Sesamum",
      des: "sesame seeds are valued for their nutritional content, offering a source of healthy fats, protein, and various essential minerals.",
    },
    {
      id: 2,
      url: "/assest/Suva.jpg",
      name: "Suva",
      des: "suva is sometimes valued for its perceived carminative properties, contributing to digestive health and overall well-being.",
    },
    {
      id: 2,
      url: "/assest/Copra.jpg",
      name: "Copra",
      des: "Copra refers to the dried kernel or meat of coconuts. Its high oil content and versatile uses make copra a valuable commodity in tropical regions.",
    },
    {
      id: 2,
      url: "/assest/Groundnut.jpg",
      name: "Groundnut Split",
      des: "Groundnut splits are popular as snacks, toppings, and ingredients in both savory and sweet recipes, contributing to their versatility in various cuisines.",
    },
    {
      id: 2,
      url: "/assest/Mustard.jpg",
      name: "Mustard",
      des: "Mustard seeds are used in various culinary traditions worldwide, providing a unique taste and aroma to pickles, curries, and spice blends.",
    },
    {
      id: 2,
      url: "/assest/Soyabean.jpg",
      name: "Soyabean",
      des: "soybean oil, extracted from the seeds, is a widely utilized cooking oil and a common ingredient in various food products due to its neutral flavor and nutritional profile.",
    },
    {
      id: 2,
      url: "/assest/Taramira.jpg",
      name: "Taramira",
      des: "Taramira oil is utilized in cooking, especially in traditional cuisines, and is recognized for its potential health benefits.",
    },
    {
      id: 2,
      url: "/assest/Cottonseed.jpg",
      name: "Cotton Seed",
      des: "Cottonseed meal, a byproduct of oil extraction, is used as a protein-rich ingredient in livestock feed and fertilizers.",
    },
    {
      id: 2,
      url: "/assest/Gurellu.jpg",
      name: "Gurellu",
      des: "Gurellu used in culinary applications, especially in South Asian cuisines, gurellu adds a rich, earthy taste to various dishes.",
    },
    {
      id: 2,
      url: "/assest/Niger.jpg",
      name: "Niger seed",
      des: "Niger seeds are popular among bird enthusiasts as they are a common ingredient in birdseed mixes, attracting a variety of birds to feeders.",
    },
    {
      id: 2,
      url: "/assest/Sunflower.jpg",
      name: "Sunflower",
      des: "sunflowers contribute to agriculture and are cultivated for their seeds, oil, and their role in ecological initiatives like bee-friendly habitats.",
    },
    {
      id: 2,
      url: "/assest/Toria.jpg",
      name: "Toria",
      des: "The oil extracted from toria seeds is valued for its mild flavor and nutritional properties, contributing to its use in diverse cuisines and food products.",
    },
  ];

  const imageUrls9 = [
    {
      id: 1,
      url: "/assest/Butter.jpg",
      name: "Butter",
      des: "Butter, a dairy product made from churned cream, is cherished for its rich and creamy texture.",
    },
    {
      id: 2,
      url: "/assest/Ghee.jpg",
      name: "Ghee",
      des: "Ghee, clarified butter with milk solids removed, holds a prominent place in culinary traditions.",
    },
    {
      id: 2,
      url: "/assest/Castoroil.jpg",
      name: "Caster Oil",
      des: "Castor oil, derived from the seeds of the castor plant (Ricinus communis), is a multipurpose vegetable oil. ",
    },
    {
      id: 1,
      url: "/assest/Gingellyoil.jpg",
      name: "Gingelly Oil",
      des: "Gingelly oil, also known as sesame oil, is a flavorful cooking oil derived from sesame seeds. ",
    },
    {
      id: 2,
      url: "/assest/Coconutoil.jpg",
      name: "Coconut Oil",
      des: "Coconut oil, extracted from the kernel of coconuts, is a versatile cooking oil and widely used in skincare. ",
    },
    {
      id: 2,
      url: "/assest/Groungnutoil.jpg",
      name: "Ground Nut Oil",
      des: "Groundnut oil, also known as peanut oil, is derived from pressing the seeds of the groundnut plant.",
    },
    {
      id: 1,
      url: "/assest/dalda.webp",
      name: "Dalda",
      des: "Dalda is a brand of hydrogenated vegetable oil commonly used in cooking.",
    },
    {
      id: 2,
      url: "/assest/Mustard oil.jpg",
      name: "Mustard Oil",
      des: "Mustard oil, derived from mustard seeds, is a pungent and flavorful cooking oil with a distinct aroma.",
    },
  ];

  const imageUrls10 = [
    {
      id: 1,
      url: "/assest/Millets.jpg",
      name: "Millets",
      des: "Millets, encompassing varieties such as sorghum and finger millet, are celebrated for their gluten-free nature and rich nutrient profile and antioxidants. ",
    },
    {
      id: 2,
      url: "/assest/Goathair.jpg",
      name: "Goat Hair",
      des: "Goat hair make it a preferred material for cosmetic brushes, art brushes reflecting its versatility and widespread use in various industries.",
    },
    {
      id: 2,
      url: "/assest/Maida.jpg",
      name: "Maida Atta",
      des: "Maida atta refers to all-purpose flour commonly used in baking and cooking.",
    },
    {
      id: 1,
      url: "/assest/Sugar.jpg",
      name: "Sugar",
      des: "Sugar, a crystalline sweetener derived from sugar cane or sugar beets, is a ubiquitous ingredient in culinary applications.",
    },
    {
      id: 2,
      url: "/assest/Sugarcane.jpg",
      name: "SugarCane",
      des: "Sugar cane, a tall tropical grass, is a primary source of sugar production. The cane's sweet juice is extracted and processed to produce sugar, a versatile sweetener used globally. ",
    },
    {
      id: 2,
      url: "/assest/Jaggery.jpg",
      name: "Jaggery",
      des: "Jaggery unrefined sweetener is valued for its nutritional content and as a healthier alternative to processed sugars.",
    },
    {
      id: 1,
      url: "/assest/rubber.jpeg",
      name: "Rubber",
      des: "Rubber, a natural polymer derived from the latex of certain trees like the rubber tree (Hevea brasiliensis), is a crucial raw material for various industries. ",
    },
  ];

  const imageUrls11 = [
    {
      id: 1,
      url: "/assest/Beans.jpg",
      name: "Beans",
      des: "Beans, a diverse category of legumes, encompass a variety of shapes and sizes such as kidney beans and black beans.",
    },
    {
      id: 2,
      url: "/assest/Peasdry.jpg",
      name: "Peas Dry",
      des: " Peas, available in both dry and green forms, are versatile legumes appreciated for their sweet taste and nutritional benefits.",
    },
    {
      id: 2,
      url: "/assest/Peas.jpg",
      name: "Green Peas",
      des: " Peas, available in both dry and green forms, are versatile legumes appreciated for their sweet taste and nutritional benefits.",
    },
  ];

  const imageUrls12 = [
    {
      id: 1,
      url: "/assest/Ajwan.jpg",
      name: "Ajwan",
      des: "Ajwan is used in Indian cuisine, it adds a distinctive touch to various savory foods.",
    },
    {
      id: 2,
      url: "/assest/Chilired.jpg",
      name: "Chili Red ",
      des: "Red chili, with its fiery heat, is a staple spice in global cuisines.",
    },
    {
      id: 2,
      url: "/assest/Coconut.jpg",
      name: "Coconut",
      des: "Coconut, with its sweet, tropical flavor, is a versatile ingredient used in both savory and sweet dishes.",
    },
    {
      id: 1,
      url: "/assest/Garlic.jpg",
      name: "Garlic",
      des: "Garlic, renowned for its strong and pungent flavor, is a fundamental ingredient in countless recipes.",
    },
    {
      id: 2,
      url: "/assest/Methi.jpg",
      name: "Methi Seeds",
      des: "Methi seeds, or fenugreek seeds, have a slightly bitter taste and are commonly used in Indian cuisine.",
    },
    {
      id: 2,
      url: "/assest/Saffron.jpg",
      name: "Saffron",
      des: " Saffron, with its vibrant red-orange hue, is a luxurious spice prized for its unique flavor and aroma.",
    },
    {
      id: 1,
      url: "/assest/Betelnuts.jpg",
      name: "Betelnuts",
      des: "Betelnuts, often chewed as a stimulant in some cultures, have a mildly bitter and nutty taste.",
    },
    {
      id: 2,
      url: "/assest/Cinamon.jpg",
      name: "Cinamon",
      des: "Cinnamon, with its sweet and warm flavor, is a popular spice used in both sweet and savory dishes.",
    },
    {
      id: 2,
      url: "/assest/Corriander.jpg",
      name: "Corriander",
      des: "Coriander, available as seeds or fresh leaves (cilantro), offers a citrusy and slightly sweet flavor. ",
    },
    {
      id: 2,
      url: "/assest/Ginger.jpg",
      name: "Ginger",
      des: "Ginger, with its zesty and slightly spicy flavor, is a versatile spice used in both sweet and savory dishes. ",
    },
    {
      id: 2,
      url: "/assest/Nutmeg.jpg",
      name: "Nutmeg",
      des: "Nutmeg, known for its warm and nutty flavor, is often used in both sweet and savory dishes.",
    },
    {
      id: 2,
      url: "/assest/Soanf.jpg",
      name: "Soanf",
      des: "Soanf is used as a mouth freshener, it also adds a subtle and aromatic taste to both savory and sweet dishes.",
    },
    {
      id: 2,
      url: "/assest/Blackpepper.jpg",
      name: "Black Pepper",
      des: "Black pepper, prized for its pungent and spicy taste, is a ubiquitous spice used globally. ",
    },
    {
      id: 2,
      url: "/assest/Cloves1.jpg",
      name: "Cloves",
      des: "Cloves, with their warm and sweet-spicy flavor, are often used in both sweet and savory dishes. ",
    },
    {
      id: 2,
      url: "/assest/Cummin.jpg",
      name: "Cummin Seeds",
      des: "Cumin seeds, with their earthy and warm taste, are a staple in various cuisines.",
    },
    {
      id: 2,
      url: "/assest/Kacholam.jpg",
      name: "Kacholam",
      des: "Kacholam, also known as lesser galangal, has a pungent and citrusy flavor. Commonly used in Southeast Asian cuisine, it adds depth to curries and soups.",
    },
    {
      id: 2,
      url: "/assest/Pepergarbled.jpg",
      name: "Pepper Garbled",
      des: "Garbled pepper refers to high-quality, carefully sifted black pepper. It is a key spice in many culinary traditions.",
    },
    {
      id: 2,
      url: "/assest/Turmeric.jpg",
      name: "Turmeric",
      des: "Turmeric, with its warm and earthy flavor, is a staple spice, particularly in Indian cuisine. ",
    },
    {
      id: 2,
      url: "/assest/Cardamoms.jpg",
      name: "Cardamoms",
      des: "Cardamom, with its sweet and floral taste, is a versatile spice used in both sweet and savory dishes.",
    },
    {
      id: 2,
      url: "/assest/coca1.webp",
      name: "Coca",
      des: "Coca, known for its stimulant properties, is the source of the alkaloid cocaine.",
    },
    {
      id: 2,
      url: "/assest/Drychillies.jpg",
      name: "Dry Chillies",
      des: "Dry chilies, with their intense heat and smoky flavor, are a staple in many cuisines. It's add spiciness and depth to a variety of dishes.",
    },
    {
      id: 2,
      url: "/assest/Mace.jpg",
      name: "Mace",
      des: "Mace, the outer covering of the nutmeg seed, has a warm and fragrant flavor with a hint of sweetness.",
    },
    {
      id: 2,
      url: "/assest/Pepperungarbled.jpg",
      name: "Pepper Ungarbled",
      des: "Ungarbled pepper refers to black pepper that has not undergone sifting or sorting.",
    },
  ];

  const imageUrls13 = [
    {
      id: 1,
      url: "/assest/Greenbanana.jpg",
      name: "Banana Green",
      des: "Green bananas, unripe and starchy, are commonly used in savory dishes. ",
    },
    {
      id: 2,
      url: "/assest/Capsicum.jpg",
      name: "Capsicum",
      des: "Capsicum, also known as bell pepper, is a versatile vegetable available in various colors, including green. ",
    },
    {
      id: 2,
      url: "/assest/Greenchilli.jpg",
      name: "Green Chilli",
      des: "Green chilies, unripe and often more pungent than their red counterparts, are a staple in many cuisines. ",
    },
    {
      id: 1,
      url: "/assest/Papayaraw.jpg",
      name: "Papaya(Raw)",
      des: "Raw papaya, before ripening, is used in savory dishes for its firm texture and subtle taste. ",
    },
    {
      id: 2,
      url: "/assest/pumpkin1.jpg",
      name: "Sweet Pumpkin",
      des: "Sweet pumpkin, when unripe, has a firmer texture and a less sweet taste compared to its mature counterpart.",
    },
    {
      id: 2,
      url: "/assest/Saffron.jpg",
      name: "Saffron",
      des: "White pumpkin, with its mild flavor and soft texture, is often used in curries, stews, and desserts.",
    },
    {
      id: 1,
      url: "/assest/Beetroot.jpg",
      name: "Beetroot",
      des: "Beetroot, known for its vibrant color and earthy taste, is used in salads, juices, and as a natural food coloring agent. ",
    },
    {
      id: 2,
      url: "/assest/bottlegourd.jpg",
      name: "Bottle Gourd",
      des: "Bottle gourd is commonly used in curries and stews. Its mild taste and ability to absorb flavors make it a versatile vegetable in many cuisines.",
    },
    {
      id: 2,
      url: "/assest/Carrot.jpg",
      name: "Carrot",
      des: "Carrots, known for their sweet and crunchy nature, are used in salads, soups, and as a side dish.",
    },
    {
      id: 2,
      url: "/assest/Elephant1.jpeg",
      name: "Elephant Yam",
      des: " Elephant yam, with its starchy texture, is used in savory dishes like curries and fries. It absorbs flavors well and is a staple in certain Asian cuisines.",
    },
    {
      id: 2,
      url: "/assest/Gingergreen.jpg",
      name: "Ginger(Green)",
      des: "Green ginger, harvested before full maturity, is milder in flavor compared to mature ginger.",
    },
    {
      id: 2,
      url: "/assest/Potato.jpg",
      name: "Potato",
      des: "Potatoes, a versatile and widely consumed vegetable, are used in myriad dishes worldwide. ",
    },
    {
      id: 2,
      url: "/assest/Tapioca.jpg",
      name: "Tapioca",
      des: "Tapioca, derived from the cassava plant, is a starchy tuber used in both sweet and savory dishes.",
    },
    {
      id: 2,
      url: "/assest/Tomato.jpg",
      name: "Tomato",
      des: "Tomatoes, with their juicy and acidic profile, are a culinary staple. Used in sauces, salads and tomatoes provide a burst of freshness and flavor.",
    },
    {
      id: 2,
      url: "/assest/Yam.jpg",
      name: "Yam",
      des: "Yam, with its sweet and starchy flesh, is used in a variety of dishes such as stews and casseroles. Its versatility makes it a popular ingredient in many cuisines.",
    },
    {
      id: 2,
      url: "/assest/Brinjal.jpg",
      name: "Brinjal",
      des: "Brinjal, also known as eggplant or aubergine, comes in various shapes and sizes. Used in curries and dips, brinjal adds a meaty texture and absorbs flavors well.",
    },
    {
      id: 2,
      url: "/assest/Cauliflower.jpg",
      name: "Cauliflower",
      des: "Cauliflower, with its mild taste and versatile texture, is used in curries, rice dishes, and as a substitute for grains.",
    },
    {
      id: 2,
      url: "/assest/Lemon.jpg",
      name: "Lemon",
      des: "Lemons, with their citrusy and tangy flavor, are used for their juice and zest in both sweet and savory dishes.",
    },
    {
      id: 2,
      url: "/assest/Mangoraw.jpg",
      name: "Mango (Raw-Ripe)",
      des: "Raw and ripe mangoes offer distinct flavors. Raw mangoes are used in pickles and tangy chutneys showcasing their sweet and tropical taste.",
    },
    {
      id: 2,
      url: "/assest/Onion.jpg",
      name: "Onion",
      des: "Onions, with their pungent and savory profile, are a foundational ingredient in cooking. ",
    },
    {
      id: 2,
      url: "/assest/Pumpkin.jpg",
      name: "Pumpkin",
      des: "Pumpkin, with its sweet and nutty taste, is used in soups, stews, and desserts. ",
    },
    {
      id: 2,
      url: "/assest/Turmericraw.jpg",
      name: "Turmeric (Raw)",
      des: "Raw turmeric, before processing into powder, is used in certain cuisines for its earthy flavor and potential health benefits.",
    },
    {
      id: 2,
      url: "/assest/Drumstick.jpg",
      name: "Drumstick",
      des: "Drumstick, the long, slender pods of the moringa tree, is used in curries and stews. Drumsticks contribute a unique flavor and texture to dishes.",
    },
    {
      id: 2,
      url: "/assest/Raddish.jpg",
      name: "Raddish",
      des: "Radishes, with their crisp and peppery taste, are used in salads, pickles, and as a crunchy addition to various dishes. ",
    },
    {
      id: 2,
      url: "/assest/Sweetpotato.jpg",
      name: "Sweet Potato",
      des: " Sweet potatoes, with their sweet and starchy flesh, are used in both savory and sweet dishes.",
    },
  ];
 
  return (
    <div>
      <div className="brand-container px-5 py-10">
        <h1 className="py-10 text-[black] text-[45px] text-center">
          Our Products
        </h1>
        <div>
          <h2 className="font-bold text-3xl py-3 text-[red]">Beverages</h2>
          <hr className="w-[9.5rem]  border-2 mb-6 border-[red] " />
          <div className="flex flex-col md:flex-row xl:flex-row-2 lg:flex-row gap-8 py-5">
            {imageUrls.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[300px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>

        {/*CEREALS  */}
        <div>
          <h2 className="font-bold text-3xl py-3 text-[red]">Cereals</h2>
          <hr className="w-[6.5rem]  border-2 mb-6 border-[red] " />
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8">
            {imageUrls1.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[300px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Dry fruits */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Dry Fruits</h2>
          <hr className="w-[8.5rem]  border-2 mb-6 border-[red] " />
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {imageUrls2.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[300px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] rounded-t-[16px] lg:h-[160px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Fibre crops */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Fibre crops</h2>
          <hr className="w-[10.3rem]  border-2 mb-6 border-[red] " />
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {imageUrls3.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[300px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Flowers */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Flowers</h2>
          <hr className="w-[7rem]  border-2 mb-6 border-[red] " />
          <div className="flex flex-col md:flex-row xl:flex-row-2 lg:flex-row gap-8">
            {imageUrls4.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[300px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Forest Products */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">
            Forest Products
          </h2>
          <hr className="w-[14.5rem]  border-2 mb-6 border-[red] " />
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {imageUrls5.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[300px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Fruits */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Fruits</h2>
          <hr className="w-[5.2rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls6.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* FiSheries */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">
            Live Stock, Poultry, Fisheries
          </h2>
          <hr className="w-[26rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls7.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Oil seeds */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Oil seeds</h2>
          <hr className="w-[8.5rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls8.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Oils and Fats */}

        <div className="py-5">
          <h2 className="font-semibold text-2xl py-4 text-violet-800"></h2>
          <h2 className="font-bold text-3xl py-3 text-[red]">Oils and Fats</h2>
          <hr className="w-[12rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls9.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pulses */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Pulses</h2>
          <hr className="w-[6rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls11.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Spices */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Spices</h2>
          <hr className="w-[6rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls12.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        {/* Vegetables */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Vegetables</h2>
          <hr className="w-[10rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls13.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div className="py-5">
          <h2 className="font-bold text-3xl py-3 text-[red]">Other</h2>
          <hr className="w-[5rem]  border-2 mb-6 border-[red] " />
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8">
            {imageUrls10.map((image) => (
              <div
                key={image.id}
                className=" flex flex-col gap-3 shadow-lg bg-white rounded-lg p-8 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              >
                <div className="lg:w-[261px] xl:w-[325px] h-[290px] -mt-8 rounded-[16px] relative">
                  <Image
                    src={image.url}
                    alt="#"
                    width={300}
                    height={300}
                    className="group-hover:opacity-80 transition-opacity  duration-300 relative inset-0 w-[400px] h-[160px] sm:w-[350px] sm:h-[160px] md:w-[400px] md:h-[160px] xl:w-[500px] xl:h-[200px] lg:w-[500px] lg:h-[160px] rounded-t-[16px]"
                  />
                  <p className="text-[16px] leading-normal text-justify font-medium mt-2">{image.des}</p>
                </div>
                <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
