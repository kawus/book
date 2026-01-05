/**
 * The Art of War by Sun Tzu
 * Public domain - translated by Lionel Giles (1910)
 */

export interface Chapter {
  id: string;
  title: string;
  content: string;
}

export interface Section {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface Book {
  title: string;
  subtitle?: string;
  author: string;
  sections: Section[];
}

export const book: Book = {
  title: "The Art of War",
  subtitle: "The oldest military treatise in the world",
  author: "Sun Tzu",
  sections: [
    {
      id: "part-one",
      title: "Foundations",
      chapters: [
        {
          id: "laying-plans",
          title: "Laying Plans",
          content: `
<p>Sun Tzu said: The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.</p>

<p>The art of war, then, is governed by five constant factors, to be taken into account in one's deliberations, when seeking to determine the conditions obtaining in the field.</p>

<p>These are:</p>
<ol>
  <li><strong>The Moral Law</strong></li>
  <li><strong>Heaven</strong></li>
  <li><strong>Earth</strong></li>
  <li><strong>The Commander</strong></li>
  <li><strong>Method and discipline</strong></li>
</ol>

<p><strong>The Moral Law</strong> causes the people to be in complete accord with their ruler, so that they will follow him regardless of their lives, undismayed by any danger.</p>

<p><strong>Heaven</strong> signifies night and day, cold and heat, times and seasons.</p>

<p><strong>Earth</strong> comprises distances, great and small; danger and security; open ground and narrow passes; the chances of life and death.</p>

<p><strong>The Commander</strong> stands for the virtues of wisdom, sincerity, benevolence, courage and strictness.</p>

<p><strong>Method and discipline</strong> are to be understood as the marshaling of the army in its proper subdivisions, the graduations of rank among the officers, the maintenance of roads by which supplies may reach the army, and the control of military expenditure.</p>

<p>These five heads should be familiar to every general: he who knows them will be victorious; he who knows them not will fail.</p>

<blockquote>All warfare is based on deception. Hence, when able to attack, we must seem unable; when using our forces, we must seem inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.</blockquote>
          `,
        },
        {
          id: "waging-war",
          title: "Waging War",
          content: `
<p>Sun Tzu said: In the operations of war, where there are in the field a thousand swift chariots, as many heavy chariots, and a hundred thousand mail-clad soldiers, with provisions enough to carry them a thousand li, the expenditure at home and at the front, including entertainment of guests, small items such as glue and paint, and sums spent on chariots and armor, will reach the total of a thousand ounces of silver per day. Such is the cost of raising an army of 100,000 men.</p>

<p>When you engage in actual fighting, if victory is long in coming, then men's weapons will grow dull and their ardor will be dampened. If you lay siege to a town, you will exhaust your strength.</p>

<p>Again, if the campaign is protracted, the resources of the State will not be equal to the strain.</p>

<blockquote>There is no instance of a country having benefited from prolonged warfare.</blockquote>

<p>It is only one who is thoroughly acquainted with the evils of war that can thoroughly understand the profitable way of carrying it on.</p>

<p>The skillful soldier does not raise a second levy, neither are his supply-wagons loaded more than twice.</p>

<p>Bring war material with you from home, but forage on the enemy. Thus the army will have food enough for its needs.</p>

<p>Poverty of the State exchequer causes an army to be maintained by contributions from a distance. Contributing to maintain an army at a distance causes the people to be impoverished.</p>

<blockquote>In war, then, let your great object be victory, not lengthy campaigns.</blockquote>
          `,
        },
        {
          id: "attack-by-stratagem",
          title: "Attack by Stratagem",
          content: `
<p>Sun Tzu said: In the practical art of war, the best thing of all is to take the enemy's country whole and intact; to shatter and destroy it is not so good. So, too, it is better to recapture an army entire than to destroy it, to capture a regiment, a detachment or a company entire than to destroy them.</p>

<blockquote>Hence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.</blockquote>

<p>Thus the highest form of generalship is to balk the enemy's plans; the next best is to prevent the junction of the enemy's forces; the next in order is to attack the enemy's army in the field; and the worst policy of all is to besiege walled cities.</p>

<p>The rule is, not to besiege walled cities if it can possibly be avoided. The preparation of mantlets, movable shelters, and various implements of war, will take up three whole months; and the piling up of mounds over against the walls will take three months more.</p>

<p>The general, unable to control his irritation, will launch his men to the assault like swarming ants, with the result that one-third of his men are slain, while the town still remains untaken. Such are the disastrous effects of a siege.</p>

<p>Therefore the skillful leader subdues the enemy's troops without any fighting; he captures their cities without laying siege to them; he overthrows their kingdom without lengthy operations in the field.</p>

<blockquote>If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.</blockquote>
          `,
        },
      ],
    },
    {
      id: "part-two",
      title: "Strategy",
      chapters: [
        {
          id: "tactical-dispositions",
          title: "Tactical Dispositions",
          content: `
<p>Sun Tzu said: The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy.</p>

<p>To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself.</p>

<p>Thus the good fighter is able to secure himself against defeat, but cannot make certain of defeating the enemy.</p>

<blockquote>Hence the saying: One may know how to conquer without being able to do it.</blockquote>

<p>Security against defeat implies defensive tactics; ability to defeat the enemy means taking the offensive.</p>

<p>Standing on the defensive indicates insufficient strength; attacking, a superabundance of strength.</p>

<p>The general who is skilled in defense hides in the most secret recesses of the earth; he who is skilled in attack flashes forth from the topmost heights of heaven. Thus on the one hand we have ability to protect ourselves; on the other, a victory that is complete.</p>

<p>To see victory only when it is within the ken of the common herd is not the acme of excellence. Neither is it the acme of excellence if you fight and conquer and the whole Empire says, "Well done!"</p>

<blockquote>What the ancients called a clever fighter is one who not only wins, but excels in winning with ease.</blockquote>
          `,
        },
        {
          id: "energy",
          title: "Energy",
          content: `
<p>Sun Tzu said: The control of a large force is the same principle as the control of a few men: it is merely a question of dividing up their numbers.</p>

<p>Fighting with a large army under your command is nowise different from fighting with a small one: it is merely a question of instituting signs and signals.</p>

<p>To ensure that your whole host may withstand the brunt of the enemy's attack and remain unshaken—this is effected by maneuvers direct and indirect.</p>

<p>That the impact of your army may be like a grindstone dashed against an egg—this is effected by the science of weak points and strong.</p>

<p>In all fighting, the direct method may be used for joining battle, but indirect methods will be needed in order to secure victory.</p>

<blockquote>Indirect tactics, efficiently applied, are inexhaustible as Heaven and Earth, unending as the flow of rivers and streams; like the sun and moon, they end but to begin anew; like the four seasons, they pass away to return once more.</blockquote>

<p>There are not more than five musical notes, yet the combinations of these five give rise to more melodies than can ever be heard.</p>

<p>There are not more than five primary colors, yet in combination they produce more hues than can ever been seen.</p>

<p>There are not more than five cardinal tastes, yet combinations of them yield more flavors than can ever be tasted.</p>

<p>In battle, there are not more than two methods of attack—the direct and the indirect; yet these two in combination give rise to an endless series of maneuvers.</p>
          `,
        },
        {
          id: "weak-points-and-strong",
          title: "Weak Points and Strong",
          content: `
<p>Sun Tzu said: Whoever is first in the field and awaits the coming of the enemy, will be fresh for the fight; whoever is second in the field and has to hasten to battle will arrive exhausted.</p>

<p>Therefore the clever combatant imposes his will on the enemy, but does not allow the enemy's will to be imposed on him.</p>

<p>By holding out advantages to him, he can cause the enemy to approach of his own accord; or, by inflicting damage, he can make it impossible for the enemy to draw near.</p>

<p>If the enemy is taking his ease, he can harass him; if well supplied with food, he can starve him out; if quietly encamped, he can force him to move.</p>

<blockquote>Appear at points which the enemy must hasten to defend; march swiftly to places where you are not expected.</blockquote>

<p>An army may march great distances without distress, if it marches through country where the enemy is not.</p>

<p>You can be sure of succeeding in your attacks if you only attack places which are undefended. You can ensure the safety of your defense if you only hold positions that cannot be attacked.</p>

<p>Hence that general is skillful in attack whose opponent does not know what to defend; and he is skillful in defense whose opponent does not know what to attack.</p>

<blockquote>O divine art of subtlety and secrecy! Through you we learn to be invisible, through you inaudible; and hence we can hold the enemy's fate in our hands.</blockquote>
          `,
        },
      ],
    },
    {
      id: "part-three",
      title: "Tactics",
      chapters: [
        {
          id: "maneuvering",
          title: "Maneuvering",
          content: `
<p>Sun Tzu said: In war, the general receives his commands from the sovereign.</p>

<p>Having collected an army and concentrated his forces, he must blend and harmonize the different elements thereof before pitching his camp.</p>

<p>After that, comes tactical maneuvering, than which there is nothing more difficult. The difficulty of tactical maneuvering consists in turning the devious into the direct, and misfortune into gain.</p>

<blockquote>Thus, to take a long and circuitous route, after enticing the enemy out of the way, and though starting after him, to contrive to reach the goal before him, shows knowledge of the artifice of deviation.</blockquote>

<p>Maneuvering with an army is advantageous; with an undisciplined multitude, most dangerous.</p>

<p>If you set a fully equipped army in march in order to snatch an advantage, the chances are that you will be too late. On the other hand, to detach a flying column for the purpose involves the sacrifice of its baggage and stores.</p>

<p>Thus, if you order your men to roll up their buff-coats, and make forced marches without halting day or night, covering double the usual distance at a stretch, doing a hundred li in order to wrest an advantage, the leaders of all your three divisions will fall into the hands of the enemy.</p>

<p>The stronger men will be in front, the jaded ones will fall behind, and on this plan only one-tenth of your army will reach its destination.</p>
          `,
        },
        {
          id: "variation-in-tactics",
          title: "Variation in Tactics",
          content: `
<p>Sun Tzu said: In war, the general receives his commands from the sovereign, collects his army and concentrates his forces.</p>

<p>When in difficult country, do not encamp. In country where high roads intersect, join hands with your allies. Do not linger in dangerously isolated positions. In hemmed-in situations, you must resort to stratagem. In desperate position, you must fight.</p>

<p>There are roads which must not be followed, armies which must not be attacked, towns which must not be besieged, positions which must not be contested, commands of the sovereign which must not be obeyed.</p>

<blockquote>The general who thoroughly understands the advantages that accompany variation of tactics knows how to handle his troops.</blockquote>

<p>The general who does not understand these, may be well acquainted with the configuration of the country, yet he will not be able to turn his knowledge to practical account.</p>

<p>So, the student of war who is unversed in the art of war of varying his plans, even though he be acquainted with the Five Advantages, will fail to make the best use of his men.</p>

<p>Hence in the wise leader's plans, considerations of advantage and of disadvantage will be blended together.</p>

<p>If our expectation of advantage be tempered in this way, we may succeed in accomplishing the essential part of our schemes.</p>

<p>If, on the other hand, in the midst of difficulties we are always ready to seize an advantage, we may extricate ourselves from misfortune.</p>
          `,
        },
        {
          id: "the-army-on-the-march",
          title: "The Army on the March",
          content: `
<p>Sun Tzu said: We come now to the question of encamping the army, and observing signs of the enemy. Pass quickly over mountains, and keep in the neighborhood of valleys.</p>

<p>Camp in high places, facing the sun. Do not climb heights in order to fight. So much for mountain warfare.</p>

<p>After crossing a river, you should get far away from it.</p>

<blockquote>When an invading force crosses a river in its onward march, do not advance to meet it in mid-stream. It will be best to let half the army get across, and then deliver your attack.</blockquote>

<p>If you are anxious to fight, you should not go to meet the invader near a river which he has to cross.</p>

<p>Moor your craft higher up than the enemy, and facing the sun. Do not move up-stream to meet the enemy. So much for river warfare.</p>

<p>In crossing salt-marshes, your sole concern should be to get over them quickly, without any delay.</p>

<p>If forced to fight in a salt-marsh, you should have water and grass near you, and get your back to a clump of trees. So much for operations in salt-marshes.</p>

<p>In dry, level country, take up an easily accessible position with rising ground to your right and on your rear, so that the danger may be in front, and safety lie behind. So much for campaigning in flat country.</p>

<p>These are the four useful branches of military knowledge which enabled the Yellow Emperor to vanquish four several sovereigns.</p>
          `,
        },
      ],
    },
    {
      id: "part-four",
      title: "Application",
      chapters: [
        {
          id: "terrain",
          title: "Terrain",
          content: `
<p>Sun Tzu said: We may distinguish six kinds of terrain, to wit:</p>

<ol>
  <li><strong>Accessible ground</strong></li>
  <li><strong>Entangling ground</strong></li>
  <li><strong>Temporizing ground</strong></li>
  <li><strong>Narrow passes</strong></li>
  <li><strong>Precipitous heights</strong></li>
  <li><strong>Positions at a great distance from the enemy</strong></li>
</ol>

<p>Ground which can be freely traversed by both sides is called <strong>accessible</strong>.</p>

<p>With regard to ground of this nature, be before the enemy in occupying the raised and sunny spots, and carefully guard your line of supplies. Then you will be able to fight with advantage.</p>

<p>Ground which can be abandoned but is hard to re-occupy is called <strong>entangling</strong>.</p>

<p>From a position of this sort, if the enemy is unprepared, you may sally forth and defeat him. But if the enemy is prepared for your coming, and you fail to defeat him, then, return being impossible, disaster will ensue.</p>

<blockquote>When the position is such that neither side will gain by making the first move, it is called temporizing ground.</blockquote>

<p>In a position of this sort, even though the enemy should offer us an attractive bait, it will be advisable not to stir forth, but rather to retreat, thus enticing the enemy in his turn; then, when part of his army has come out, we may deliver our attack with advantage.</p>

<p>With regard to <strong>narrow passes</strong>, if you can occupy them first, let them be strongly garrisoned and await the advent of the enemy.</p>
          `,
        },
        {
          id: "the-nine-situations",
          title: "The Nine Situations",
          content: `
<p>Sun Tzu said: The art of war recognizes nine varieties of ground:</p>

<ol>
  <li><strong>Dispersive ground</strong></li>
  <li><strong>Facile ground</strong></li>
  <li><strong>Contentious ground</strong></li>
  <li><strong>Open ground</strong></li>
  <li><strong>Ground of intersecting highways</strong></li>
  <li><strong>Serious ground</strong></li>
  <li><strong>Difficult ground</strong></li>
  <li><strong>Hemmed-in ground</strong></li>
  <li><strong>Desperate ground</strong></li>
</ol>

<p>When a chieftain is fighting in his own territory, it is <strong>dispersive ground</strong>.</p>

<p>When he has penetrated into hostile territory, but to no great distance, it is <strong>facile ground</strong>.</p>

<p>Ground the possession of which imports great advantage to either side, is <strong>contentious ground</strong>.</p>

<p>Ground on which each side has liberty of movement is <strong>open ground</strong>.</p>

<blockquote>On dispersive ground, therefore, fight not. On facile ground, halt not. On contentious ground, attack not.</blockquote>

<p>On open ground, do not try to block the enemy's way. On the ground of intersecting highways, join hands with your allies.</p>

<p>On serious ground, gather in plunder. In difficult ground, keep steadily on the march.</p>

<p>On hemmed-in ground, resort to stratagem. On desperate ground, fight.</p>

<blockquote>Throw your soldiers into positions whence there is no escape, and they will prefer death to flight. If they will face death, there is nothing they may not achieve.</blockquote>
          `,
        },
        {
          id: "attack-by-fire",
          title: "Attack by Fire",
          content: `
<p>Sun Tzu said: There are five ways of attacking with fire. The first is to burn soldiers in their camp; the second is to burn stores; the third is to burn baggage trains; the fourth is to burn arsenals and magazines; the fifth is to hurl dropping fire amongst the enemy.</p>

<p>In order to carry out an attack, we must have means available. The material for raising fire should always be kept in readiness.</p>

<p>There is a proper season for making attacks with fire, and special days for starting a conflagration.</p>

<blockquote>The proper season is when the weather is very dry; the special days are those when the moon is in the constellations of the Sieve, the Wall, the Wing or the Cross-bar; for these four are all days of rising wind.</blockquote>

<p>In attacking with fire, one should be prepared to meet five possible developments:</p>

<p>When fire breaks out inside the enemy's camp, respond at once with an attack from without.</p>

<p>If there is an outbreak of fire, but the enemy's soldiers remain quiet, bide your time and do not attack.</p>

<p>When the force of the flames has reached its height, follow it up with an attack, if that is practicable; if not, stay where you are.</p>

<p>If it is possible to make an assault with fire from without, do not wait for it to break out within, but deliver your attack at a favorable moment.</p>

<p>When you start a fire, be to windward of it. Do not attack from the leeward.</p>
          `,
        },
        {
          id: "the-use-of-spies",
          title: "The Use of Spies",
          content: `
<p>Sun Tzu said: Raising a host of a hundred thousand men and marching them great distances entails heavy loss on the people and a drain on the resources of the State. The daily expenditure will amount to a thousand ounces of silver. There will be commotion at home and abroad, and men will drop down exhausted on the highways. As many as seven hundred thousand families will be impeded in their labor.</p>

<blockquote>Hostile armies may face each other for years, striving for the victory which is decided in a single day. This being so, to remain in ignorance of the enemy's condition simply because one grudges the outlay of a hundred ounces of silver in honors and emoluments, is the height of inhumanity.</blockquote>

<p>One who acts thus is no leader of men, no present help to his sovereign, no master of victory.</p>

<p>Thus, what enables the wise sovereign and the good general to strike and conquer, and achieve things beyond the reach of ordinary men, is <strong>foreknowledge</strong>.</p>

<p>Now this foreknowledge cannot be elicited from spirits; it cannot be obtained inductively from experience, nor by any deductive calculation.</p>

<p>Knowledge of the enemy's dispositions can only be obtained from other men.</p>

<p>Hence the use of spies, of whom there are five classes:</p>

<ol>
  <li><strong>Local spies</strong></li>
  <li><strong>Inward spies</strong></li>
  <li><strong>Converted spies</strong></li>
  <li><strong>Doomed spies</strong></li>
  <li><strong>Surviving spies</strong></li>
</ol>

<blockquote>Be subtle! Be subtle! And use your spies for every kind of business.</blockquote>
          `,
        },
      ],
    },
  ],
};

/**
 * Helper function to get all chapters in flat array
 */
export function getAllChapters(): Chapter[] {
  return book.sections.flatMap((section) => section.chapters);
}

/**
 * Helper function to find a chapter by ID
 */
export function getChapterById(id: string): Chapter | undefined {
  return getAllChapters().find((chapter) => chapter.id === id);
}

/**
 * Helper function to get previous and next chapters
 */
export function getAdjacentChapters(currentId: string): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const chapters = getAllChapters();
  const currentIndex = chapters.findIndex((c) => c.id === currentId);

  return {
    prev: currentIndex > 0 ? chapters[currentIndex - 1] : null,
    next: currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null,
  };
}
