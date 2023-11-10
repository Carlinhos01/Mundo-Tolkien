import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Aneis() {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#272727',
    },
    img: {
      borderRadius: 10,
      width: 300,
      height: 400,
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 50,
    },
    text: {
      textAlign: 'justify',
      fontSize: 20,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 15,
      color: '#808080',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require('../assets/asocidade_do_anel.jpg')}
          style={styles.img}
        />
      </View>

      <Text style={styles.text}>
        "The Lord of the Rings: The Fellowship of the Ring" is the first
        installment in the "Lord of the Rings" film trilogy, directed by Peter
        Jackson and released in 2001. The story is based on J.R.R. Tolkien's
        epic fantasy novel of the same name.
      </Text>

      <Text style={styles.text}>
        The film begins with the introduction of the peaceful Shire, where a
        young hobbit named Frodo Baggins inherits a powerful and dangerous ring
        from his uncle, Bilbo Baggins. This ring, later revealed as the One
        Ring, has the power to control all other rings and is coveted by the
        dark lord Sauron.
      </Text>

      <Text style={styles.text}>
        Gandalf the Grey, a wizard, learns about the ring's true nature and
        encourages Frodo to leave the Shire. Frodo embarks on a perilous journey
        with a group of companions, including the human Aragorn, the elf
        Legolas, the dwarf Gimli, Boromir, the son of Gondor, and Frodo's fellow
        hobbits, Sam, Merry, and Pippin. They form the Fellowship of the Ring
        and set out to destroy the One Ring in the fires of Mount Doom, where it
        was forged.
      </Text>

      <Text style={styles.text}>
        The journey is fraught with challenges as they face the sinister Nazgûl,
        creatures sent by Sauron to retrieve the ring. They also encounter the
        treacherous Gollum, who once possessed the ring. The Fellowship faces
        trials, battles, and the loss of Boromir, who is corrupted by the ring's
        power.
      </Text>

      <Text style={styles.text}>
        The film ends with the group's decision to continue the quest without
        Frodo, who believes it's the only way to keep the ring safe. Frodo and
        Sam set off on their own, while the rest of the Fellowship faces their
        own challenges.
      </Text>

      <Text style={styles.text}>
        "The Fellowship of the Ring" sets the stage for the epic battle between
        good and evil that unfolds in the subsequent films of the trilogy.
      </Text>

      <View>
        <Image
          source={require('../assets/duas_torres.jpg')}
          style={styles.img}
        />
      </View>

      <Text style={styles.text}>
        "The Lord of the Rings: The Two Towers" is the second installment in the
        "Lord of the Rings" film trilogy, directed by Peter Jackson and released
        in 2002. Here's a summarized story of the film:
      </Text>

      <Text style={styles.text}>
        The story continues from the events of "The Fellowship of the Ring." The
        Fellowship has been broken, with Frodo and Sam continuing their journey
        to Mount Doom to destroy the One Ring. Meanwhile, Aragorn, Legolas,
        Gimli, and the other members of the Fellowship are left to deal with the
        aftermath of the battle at Amon Hen.
      </Text>

      <Text style={styles.text}>
        The film introduces two additional storylines:
      </Text>

      <Text style={styles.text}>
        Rohan: Aragorn, Legolas, and Gimli meet Éomer, the nephew of King
        Théoden, who is under the sinister influence of Saruman through his
        advisor, Gríma Wormtongue. The group helps Théoden break free from
        Saruman's control, and Rohan prepares for war against Saruman's forces.
      </Text>

      <Text style={styles.text}>
        Isengard: Merry and Pippin, two of Frodo's hobbit friends, are captured
        by orcs but manage to escape and befriend Treebeard, an ancient
        tree-like creature called an Ent. They inform Treebeard about Saruman's
        destruction of the forests, which prompts the Ents to take action
        against Saruman.
      </Text>

      <Text style={styles.text}>
        The film also explores Gollum's inner struggle between his alter ego,
        Sméagol, and his obsession with the One Ring. He guides Frodo and Sam
        towards Mordor while wrestling with his desires. The climactic battle of
        Helm's Deep occurs as Saruman's vast army of orcs and Uruk-hai attacks
        the people of Rohan, who are greatly outnumbered. The battle is a
        significant turning point in the War of the Ring. The film ends with
        Frodo and Sam continuing their perilous journey toward Mount Doom,
        Aragorn and his companions preparing for the upcoming battle against
        Sauron, and Merry, Pippin, and Treebeard marching to confront Saruman.
        "The Two Towers" sets the stage for the ultimate confrontation between
        the forces of good and evil in the final installment of the trilogy,
        "The Return of the King."
      </Text>

      <View>
        <Image
          source={require('../assets/retorno_do_rei.jpg')}
          style={styles.img}
        />
      </View>

      <Text style={styles.text}>
        "The Lord of the Rings: The Return of the King" is the third and final
        installment in the "Lord of the Rings" film trilogy, directed by Peter
        Jackson and released in 2003. Here's a summarized story of the film:
      </Text>

      <Text style={styles.text}>
        The film continues the epic journey of the characters as they face the
        final battles and challenges in the War of the Ring:
      </Text>

      <Text style={styles.text}>
        Frodo and Sam: Frodo and Sam are guided by Gollum towards Mount Doom to
        destroy the One Ring. As they reach the fiery depths of the volcano,
        Gollum betrays them, but Frodo ultimately resists the Ring's temptation
        and chooses to destroy it. The Ring is thrown into the fires, leading to
        the downfall of Sauron.
      </Text>

      <Text style={styles.text}>
        Aragorn and Gondor: Aragorn, Legolas, Gimli, and the rest of the
        Fellowship unite with the people of Gondor, led by Denethor. They
        prepare for the siege of Minas Tirith by Sauron's forces. Aragorn's true
        lineage as the King of Gondor is revealed, and he takes up his rightful
        place as the ruler.
      </Text>

      <Text style={styles.text}>
        Rohan: Merry and Éowyn play a crucial role in the battle of Pelennor
        Fields, where the forces of Rohan join the battle to protect Gondor.
        Théoden falls in battle, but Éowyn and Merry manage to defeat the
        Witch-king of Angmar, a fearsome Nazgûl.
      </Text>

      <Text style={styles.text}>
        Hobbits and the Shire: Frodo, Sam, Merry, and Pippin return to the Shire
        after their long and arduous journey. They discover that the Shire has
        been taken over by Saruman and his henchmen, the ruffians. The hobbits
        lead a rebellion and reclaim their homeland.
      </Text>

      <Text style={styles.text}>
        Aragorn's Coronation: Aragorn is crowned as King of Gondor, and a sense
        of peace and resolution descends upon Middle-earth.
      </Text>

      <Text style={styles.text}>
        Frodo's Departure: Frodo, Bilbo, and Gandalf, along with the Elves,
        depart Middle-earth for the Undying Lands. Sam, Merry, and Pippin return
        to the Shire, where they continue their lives.
      </Text>

      <Text style={styles.text}>
        "The Return of the King" is a tale of triumph, sacrifice, and the
        ultimate victory of good over evil. It concludes the epic journey that
        began with "The Fellowship of the Ring" and brings closure to the
        stories of its beloved characters, leaving a lasting legacy in the world
        of cinema.
      </Text>
    </ScrollView>
  );
}
