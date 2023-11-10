import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

export default function Hobbit() {
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
        <Image source={require('../assets/journey.jpg')} style={styles.img} />
      </View>

      <Text style={styles.text}>
        "The Hobbit: An Unexpected Journey" is the first film in "The Hobbit"
        film trilogy, directed by Peter Jackson and released in 2012. Here's a
        summarized story of the film:
      </Text>

      <Text style={styles.text}>
        The story follows Bilbo Baggins, a reserved and unadventurous hobbit who
        lives a quiet life in the Shire. His life takes an unexpected turn when
        the wizard Gandalf the Grey and a group of thirteen dwarves led by
        Thorin Oakenshield arrive at his doorstep. They are on a quest to
        reclaim their homeland, the Lonely Mountain, from the dragon Smaug, who
        seized it and its treasure many years ago.
      </Text>

      <Text style={styles.text}>
        Reluctantly, Bilbo agrees to join their adventure as the "burglar" of
        the group, and they set off on a perilous journey across Middle-earth.
        Along the way, they encounter various challenges and adversaries,
        including trolls, orcs, goblins, and the mystical creature Gollum. Bilbo
        acquires a magical ring, later revealed to be the One Ring, which will
        play a significant role in future events.
      </Text>

      <Text style={styles.text}>
        The company reaches the Misty Mountains, where they become trapped in a
        goblin lair. During their escape, Bilbo becomes separated from the group
        and encounters Gollum in a dark cave. Through a game of riddles, Bilbo
        escapes with the ring, which grants him invisibility when worn.
      </Text>

      <Text style={styles.text}>
        The film concludes with the company continuing their journey, unaware of
        the dark forces that have been set into motion by the acquisition of the
        One Ring.
      </Text>

      <Text style={styles.text}>
        "The Hobbit: An Unexpected Journey" is an adventure-filled and visually
        stunning film that sets the stage for the subsequent two films in the
        trilogy, as the group of adventurers pushes forward on their quest to
        reclaim the Lonely Mountain and face the formidable dragon, Smaug.
      </Text>

      <View>
        <Image source={require('../assets/smaug.jpg')} style={styles.img} />
      </View>

      <Text style={styles.text}>
        "The Hobbit: The Desolation of Smaug" is the second film in "The Hobbit"
        film trilogy, directed by Peter Jackson and released in 2013. Here's a
        summarized story of the film:
      </Text>

      <Text style={styles.text}>
        The journey to reclaim the Lonely Mountain continues as Bilbo Baggins,
        Gandalf, and the company of dwarves led by Thorin Oakenshield face new
        challenges and adversaries.
      </Text>

      <Text style={styles.text}>
        Mirkwood Forest: The group enters the mysterious and perilous Mirkwood
        Forest. They encounter giant spiders, and Bilbo uses the One Ring to
        become invisible and rescue the dwarves from the spiders' webs.
      </Text>

      <Text style={styles.text}>
        Elven Kingdom: The company is captured by Thranduil, the Elvenking of
        Mirkwood. Bilbo manages to free the dwarves, and they escape in barrels
        down the river. Meanwhile, the Necromancer's influence is growing, and
        Gandalf leaves to investigate the rising darkness in Dol Guldur.
      </Text>

      <Text style={styles.text}>
        Lake-town: The company arrives at Lake-town, a settlement near the
        Lonely Mountain. They receive assistance from Bard the Bowman, a skilled
        archer, who agrees to help them reach the Lonely Mountain in exchange
        for a share of the treasure.
      </Text>

      <Text style={styles.text}>
        Lonely Mountain and Smaug: Bilbo and the dwarves finally reach the
        Lonely Mountain, and Bilbo enters the lair of the dragon, Smaug, using
        his stealth and the One Ring. Smaug is awakened and realizes that
        someone has entered his lair.
      </Text>

      <Text style={styles.text}>
        The film concludes with Smaug flying towards Lake-town, setting the
        stage for the climactic events that will unfold in the final installment
        of the trilogy.
      </Text>

      <Text style={styles.text}>
        "The Hobbit: The Desolation of Smaug" builds upon the adventure and
        introduces new characters and locations, increasing the stakes as the
        company gets closer to confronting the formidable dragon and reclaiming
        their homeland.
      </Text>

      <View>
        <Image source={require('../assets/armies.jpg')} style={styles.img} />
      </View>

      <Text style={styles.text}>
        "The Hobbit: The Battle of the Five Armies" is the third and final film
        in "The Hobbit" film trilogy, directed by Peter Jackson and released in
        2014. Here's a summarized story of the film:
      </Text>

      <Text style={styles.text}>
        The story picks up immediately after the events of "The Desolation of
        Smaug" as Smaug descends upon Lake-town, seeking revenge for the
        intrusion into his lair by the dwarves and Bilbo. The town faces
        destruction, and Bard the Bowman plays a crucial role in attempting to
        stop Smaug's rampage.
      </Text>

      <Text style={styles.text}>
        Smaug's Attack: Smaug unleashes destruction upon Lake-town, but Bard
        manages to use the Black Arrow to fatally wound the dragon. Smaug
        crashes into the town, and his demise leaves a power vacuum and
        intensifies the dwarves' desire to reclaim their homeland.
      </Text>

      <Text style={styles.text}>
        Thorin's Greed: With Smaug defeated, Thorin Oakenshield succumbs to the
        dragon sickness, becoming obsessed with the treasure within the Lonely
        Mountain. This greed strains relationships within the company of dwarves
        and threatens the unity needed to face the upcoming challenges.
      </Text>

      <Text style={styles.text}>
        The Battle of the Five Armies: The title event unfolds as various
        factions converge on the Lonely Mountain. Dwarves, Men, Elves, Orcs, and
        Dwarves from the Iron Hills clash in a massive battle. The conflict is
        complex, involving alliances and betrayals.
      </Text>

      <Text style={styles.text}>
        Thorin's Redemption: Thorin, recognizing the destructive influence of
        his greed, seeks redemption by joining the battle. He attempts to repair
        relations with the Elves and Men to unite against the common enemy—the
        Orc army led by Azog the Defiler.
      </Text>

      <Text style={styles.text}>
        Deaths and Resolutions: The battle results in significant casualties,
        including the deaths of Thorin, Fíli, and Kíli. Bilbo plays a key role
        in diffusing tensions and helping the surviving characters find common
        ground. The treasure is distributed among the factions, and Bard becomes
        the new leader of Dale.
      </Text>

      <Text style={styles.text}>
        Epilogue: The film concludes with Bilbo returning to the Shire, only to
        find that his home has been auctioned off, as he was presumed dead. The
        film ends with Bilbo starting to write his memoir, "There and Back
        Again."
      </Text>

      <Text style={styles.text}>
        "The Battle of the Five Armies" brings the "Hobbit" trilogy to a
        dramatic and action-packed conclusion, addressing the consequences of
        greed, the importance of unity in the face of adversity, and the
        bittersweet aftermath of the quest for the Lonely Mountain.
      </Text>
    </ScrollView>
  );
}
