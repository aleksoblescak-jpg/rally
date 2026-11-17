const QUOTES = [{"g":"business","text":"Remember that time is money.","name":"Benjamin Franklin","src":"Advice to a Young Tradesman","date":"1748","img":"franklin","pos":"50% 25%"},
{"g":"business","text":"There is no such thing in the world as luck.","name":"P. T. Barnum","src":"The Art of Money Getting","date":"1880","img":"barnum","pos":"50% 18%"},
{"g":"business","text":"Work at it, if necessary, early and late, in season and out of season, not leaving a stone unturned, and never deferring for a single hour that which can be done just as well now.","name":"P. T. Barnum","src":"The Art of Money Getting","date":"1880","img":"barnum","pos":"50% 18%"},
{"g":"business","text":"Failure is only the opportunity more intelligently to begin again.","name":"Henry Ford","src":"My Life and Work (with Samuel Crowther)","date":"1922","img":"ford","pos":"50% 20%"},
{"g":"business","text":"There is no disgrace in honest failure; there is disgrace in fearing to fail.","name":"Henry Ford","src":"My Life and Work (with Samuel Crowther)","date":"1922","img":"ford","pos":"50% 20%"},
{"g":"business","text":"Put all your eggs in one basket, and then watch that basket.","name":"Andrew Carnegie","src":"Address to Curry Commercial College","date":"23 Jun 1885","img":"carnegie","pos":"50% 18%"},
{"g":"business","text":"Whenever one learns to do anything he has never to wait long for an opportunity of putting his knowledge to use.","name":"Andrew Carnegie","src":"Autobiography of Andrew Carnegie","date":"1920","img":"carnegie","pos":"50% 18%"},
{"g":"business","text":"As a rule, those who show willingness to help themselves need not fear about obtaining the help of others.","name":"Andrew Carnegie","src":"Autobiography of Andrew Carnegie","date":"1920","img":"carnegie","pos":"50% 18%"},
{"g":"business","text":"We often discover what will do, by finding out what will not do; and probably he who never made a mistake never made a discovery.","name":"Samuel Smiles","src":"Self-Help","date":"1859 (rev. 1866)","img":"smiles","pos":"50% 20%"},
{"g":"business","text":"The battle of life is, in most cases, fought up-hill; and to win it without a struggle were perhaps to win it without honour. If there were no difficulties there would be no success; if there were nothing to struggle for, there would be nothing to be achieved.","name":"Samuel Smiles","src":"Self-Help","date":"1859 (rev. 1866)","img":"smiles","pos":"50% 20%"},
{"g":"business","text":"Work is the law of our being—the living principle that carries men and nations onward.","name":"Samuel Smiles","src":"Character","date":"1871","img":"smiles","pos":"50% 20%"},
{"g":"business","text":"The only way to do great work is to love what you do.","name":"Steve Jobs","src":"Stanford commencement address","date":"12 Jun 2005","img":"jobs","pos":"40% 18%"},
{"g":"business","text":"Greatness consists not in the holding of some future office, but really consists in doing great deeds with little means and the accomplishment of vast purposes from the private ranks of life.","name":"Russell H. Conwell","src":"Acres of Diamonds (lecture)","date":"1915","img":"russell_h_conwell","pos":"50% 22%"},
{"g":"business","text":"Who are the great inventors of the world? … The great inventor sits next to you, or you are the person yourself.","name":"Russell H. Conwell","src":"Acres of Diamonds (lecture)","date":"1915","img":"russell_h_conwell","pos":"50% 22%"},
{"g":"business","text":"One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.","name":"Elbert Hubbard","src":"A Thousand & One Epigrams, p. 151","date":"1911","img":"elbert_hubbard","pos":"50% 22%"},
{"g":"business","text":"Don't wait for extraordinary opportunities. Seize common occasions and make them great.","name":"Orison Swett Marden","src":"Pushing to the Front","date":"1894","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"business","text":"The man who succeeds has a program. … He lays his plans and executes them. He goes straight to his goal.","name":"Orison Swett Marden","src":"Pushing to the Front","date":"1894","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"business","text":"You wake up in the morning, and lo! your purse is magically filled with twenty-four hours of the unmanufactured tissue of the universe of your life! It is yours. It is the most precious of possessions.","name":"Arnold Bennett","src":"How to Live on 24 Hours a Day","date":"1908","img":"arnold_bennett","pos":"50% 22%"},
{"g":"business","text":"The chief beauty about the constant supply of time is that you cannot waste it in advance. The next year, the next day, the next hour are lying ready for you, as perfect, as unspoilt, as if you had never wasted or misapplied a single moment in all your career.","name":"Arnold Bennett","src":"How to Live on 24 Hours a Day","date":"1908","img":"arnold_bennett","pos":"50% 22%"},
{"g":"business","text":"I can't hand out any ready-made success to you. It would do you no good, and it would do the house harm. There is plenty of room at the top here, but there is no elevator in the building.","name":"George Horace Lorimer","src":"Letters from a Self-Made Merchant to His Son (John Graham's letters)","date":"1902","img":"gen_george_horace_lorimer","pos":"50% 22%"},
{"g":"business","text":"He looked at the top, and instead of finding it overcrowded, he was surprised at the few who had reached there; the top fairly begged for more to climb its heights.","name":"Edward Bok","src":"The Americanization of Edward Bok","date":"1920","img":"gen_edward_bok","pos":"50% 22%"},
{"g":"business","text":"Do, every day, all that you can do that day, and do each act in an efficient manner.","name":"Wallace D. Wattles","src":"The Science of Getting Rich","date":"1910","img":"gen_wallace_d_wattles","pos":"50% 22%"},
{"g":"business","text":"Know what thou canst work at; and work at it, like a Hercules! … a man perfects himself by working.","name":"Thomas Carlyle","src":"Past and Present","date":"1843","img":"gen_thomas_carlyle","pos":"50% 22%"},
{"g":"business","text":"All my life I have made mistakes, but in losing money I have gained experience and accumulated a lot of valuable don'ts. I have been flat broke several times, but my loss has never been a total loss.","name":"Edwin Lefèvre","src":"Reminiscences of a Stock Operator (narrated by \"Larry Livingston\")","date":"1923","img":"gen_edwin_lefevre","pos":"50% 22%"},
{"g":"business","text":"I do not think there is any other quality so essential to success of any kind as the quality of perseverance. It overcomes almost everything, even nature.","name":"John D. Rockefeller","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"gen_john_d_rockefeller","pos":"50% 22%"},
{"g":"business","text":"The world is changing every day and new fields are constantly opening. We have new ideas, new inventions, new methods of manufacture, and new ways today everywhere. There is plenty of room for any man who can do anything well.","name":"Philip D. Armour","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"gen_philip_d_armour","pos":"50% 22%"},
{"g":"business","text":"The chief reason that everybody is not successful is the fact that they have not enough persistency. I always advise young men … to do one thing well, throwing all their energies into it.","name":"John Wanamaker","src":"As quoted in O. S. Marden, How They Succeeded","date":"1901","img":"gen_john_wanamaker","pos":"50% 22%"},
{"g":"business","text":"Five or six triumphs over temptation to indolence or despair lay the foundation of certain success; and, what is of still more importance, fix in you the habit of perseverance.","name":"William Cobbett","src":"Advice to Young Men","date":"1829","img":"gen_william_cobbett","pos":"50% 22%"},
{"g":"business","text":"An enterprise will grow in accordance with the amount of effort you plow into it.","name":"Kōnosuke Matsushita","src":"Quest for Prosperity (tr. from Japanese), p. 58","date":"1988","img":"gen_konosuke_matsushita","pos":"50% 22%"},
{"g":"business","text":"Only while sleeping one makes no mistakes. Making mistakes is the privilege of the active—of those who can correct their mistakes and put them right.","name":"Ingvar Kamprad","src":"The Testament of a Furniture Dealer (IKEA's English tr.)","date":"1976","img":"gen_ingvar_kamprad","pos":"50% 22%"},
{"g":"business","text":"Nothing so conclusively proves a man's ability to lead others as what he does from day to day to lead himself.","name":"Thomas J. Watson","src":"American Druggist, vol. 100, p. 40","date":"1939","img":"gen_thomas_j_watson","pos":"50% 22%"},
{"g":"business","text":"In order to be irreplaceable one must always be different.","name":"Coco Chanel","src":"As quoted in Marcel Haedrich, Coco Chanel secrète (1971; Eng. tr. 1972)","date":"1971","img":"gen_coco_chanel","pos":"50% 22%"},
{"g":"business","text":"I was an overnight success all right, but thirty years is a long, long night.","name":"Ray Kroc","src":"Grinding It Out","date":"1977","img":"gen_ray_kroc","pos":"50% 22%"},
{"g":"business","text":"Genius is one percent inspiration, ninety-nine percent perspiration.","name":"Thomas Edison","src":"Remark reported 1901, confirmed in his letter of 1927","date":"by 1901","img":"gen_thomas_edison","pos":"50% 22%"},
{"g":"business","text":"Restlessness is discontent — and discontent is the first necessity of progress. Show me a thoroughly satisfied man — and I will show you a failure.","name":"Thomas Edison","src":"The Diary and Sundry Observations of Thomas Alva Edison, p. 110","date":"pub. 1948","img":"gen_thomas_edison","pos":"50% 22%"},
{"g":"business","text":"I suppose my formula might be: dream, diversify and never miss an angle.","name":"Walt Disney","src":"Wall Street Journal","date":"4 Feb 1958","img":"gen_walt_disney","pos":"50% 22%"},
{"g":"business","text":"Whenever anything is being accomplished, it is being done, I have learned, by a monomaniac with a mission.","name":"Peter Drucker","src":"Adventures of a Bystander","date":"1979","img":"gen_peter_drucker","pos":"50% 22%"},
{"g":"business","text":"The world is changing so quickly. Education is a forever commitment. It never stops.","name":"Indra Nooyi","src":"Remarks at the University of Texas at Arlington","date":"22 Mar 2023","img":"gen_indra_nooyi","pos":"50% 22%"},
{"g":"business","text":"We find that in research a certain amount of intelligent ignorance is essential to progress; for, if you know too much, you won't try the thing.","name":"Charles Kettering","src":"As quoted in T. A. Boyd, Professional Amateur, p. 106","date":"1957","img":"gen_charles_kettering","pos":"50% 22%"},
{"g":"business","text":"What other people label or might try to call failure, I have learned is just God's way of pointing you in a new direction.","name":"Oprah Winfrey","src":"Howard University commencement address","date":"12 May 2007","img":"gen_oprah_winfrey","pos":"50% 22%"},
{"g":"business","text":"Don't ever look for a job, always tell yourself that I'm a job creator. I'm not a job seeker, I'm a job creator.","name":"Muhammad Yunus","src":"UC San Diego commencement address","date":"11 Jun 2016","img":"gen_muhammad_yunus","pos":"50% 22%"},
{"g":"business","text":"You should learn from your competitor, but never copy. Copy and you die.","name":"Jack Ma","src":"As quoted in the International Herald Tribune","date":"5 Jan 2007","img":"gen_jack_ma","pos":"50% 22%"},
{"g":"business","text":"Sometimes it's important to wake up and stop dreaming. When a really great dream shows up, grab it.","name":"Larry Page","src":"University of Michigan commencement address","date":"2 May 2009","img":"gen_larry_page","pos":"50% 22%"},
{"g":"business","text":"Every adversity has the seed of an equivalent or greater benefit.","name":"Napoleon Hill","src":"Success Through a Positive Mental Attitude (with W. Clement Stone), ch. 14","date":"1960","img":"gen_napoleon_hill","pos":"50% 22%"},
{"g":"business","text":"You can get everything in life you want if you will just help enough other people get what they want.","name":"Zig Ziglar","src":"See You at the Top (repeated in Secrets of Closing the Sale, 1984)","date":"1975","img":"gen_zig_ziglar","pos":"50% 22%"},
{"g":"business","text":"Perseverance is the chief; but perseverance must have some practical end, or it does not avail the man possessing it.","name":"Alexander Graham Bell","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"gen_alexander_graham_bell","pos":"50% 22%"},
{"g":"business","text":"I might write a volume trying to tell you how to succeed. One way is to not be above taking a hint from a master.","name":"John Wanamaker","src":"As quoted in O. S. Marden, How They Succeeded","date":"1901","img":"gen_john_wanamaker","pos":"50% 22%"},
{"g":"business","text":"We tell our young managers: 'Don't be afraid to make a mistake. But make sure you don't make the same mistake twice'.","name":"Akio Morita","src":"As quoted in N. Lyons, The Sony Vision, p. 101","date":"1976","img":"gen_akio_morita","pos":"50% 22%"},
{"g":"business","text":"The best preparation for good work tomorrow is to do good work today.","name":"Elbert Hubbard","src":"The Note Book of Elbert Hubbard, p. 242","date":"pub. 1927 (posthumous)","img":"elbert_hubbard","pos":"50% 22%"},
{"g":"business","text":"The effective execution of a Plan is what counts and not mere planning on paper; it is not what we put on our plate or even what we eat that provides nourishment and growth, but what we digest.","name":"J. R. D. Tata","src":"Speech to the Central Advisory Council of Industries, New Delhi","date":"13 Aug 1965","img":"gen_j_r_d_tata","pos":"50% 22%"},
{"g":"business","text":"Whether great or small, everyone has some weak point; let him first study to overcome that. … The only way I know of is to—do it.","name":"John B. Herreshoff","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"john_b_herreshoff","pos":"50% 22%"},
{"g":"business","text":"No artificial condition can ever, in my judgment, keep down a man who has health, capacity and honesty. You can temporarily interfere with him or make the road to the object of his ambition more difficult, but you cannot stop him.","name":"Herbert H. Vreeland","src":"Address, as printed in O. S. Marden, How They Succeeded","date":"1901","img":"gen_herbert_h_vreeland","pos":"50% 22%"},
{"g":"business","text":"There is as much dignity in tilling a field as in writing a poem. It is at the bottom of life we must begin, and not at the top. Nor should we permit our grievances to overshadow our opportunities.","name":"Booker T. Washington","src":"Atlanta Exposition address, in Up from Slavery","date":"18 Sep 1895","img":"washington","pos":"50% 15%"},
{"g":"history","text":"Never give in … in nothing great or small, large or petty, never give in except to convictions of honour and good sense.","name":"Winston Churchill","src":"Speech at Harrow School","date":"29 Oct 1941","img":"churchill","pos":"50% 15%"},
{"g":"history","text":"Plans are worthless, but planning is everything.","name":"Dwight D. Eisenhower","src":"Repeating an old Army saying, National Defense Executive Reserve Conference","date":"14 Nov 1957","img":"eisenhower","pos":"50% 18%"},
{"g":"history","text":"Tyranny, like hell, is not easily conquered; yet we have this consolation with us, that the harder the conflict, the more glorious the triumph.","name":"Thomas Paine","src":"The American Crisis","date":"19 Dec 1776","img":"paine","pos":"50% 30%"},
{"g":"history","text":"Boldness … is the noblest of virtues, the true steel which gives the weapon its edge and brilliancy.","name":"Carl von Clausewitz","src":"On War, Book III, ch. 6 (tr. J. J. Graham)","date":"1832","img":"gen_carl_von_clausewitz","pos":"50% 22%"},
{"g":"ancient","text":"The thing is to get them to turn their thoughts to what they mean to do, instead of to what they are likely to suffer. Do that, and their spirits will soon revive wonderfully.","name":"Xenophon","src":"Anabasis, Book III (tr. H. G. Dakyns)","date":"c. 370 BC","img":"gen_xenophon","pos":"50% 22%"},
{"g":"history","text":"I never forgot that he had as much reason to fear my forces as I had his. The lesson was valuable.","name":"Ulysses S. Grant","src":"Personal Memoirs of U. S. Grant, ch. 18","date":"1885","img":"gen_ulysses_s_grant","pos":"50% 22%"},
{"g":"history","text":"One of my superstitions had always been when I started to go anywhere, or to do anything, not to turn back, or stop until the thing intended was accomplished.","name":"Ulysses S. Grant","src":"Personal Memoirs of U. S. Grant, ch. 3","date":"1885","img":"gen_ulysses_s_grant","pos":"50% 22%"},
{"g":"history","text":"I would define true courage to be a perfect sensibility of the measure of danger, and a mental willingness to incur it.","name":"William Tecumseh Sherman","src":"Memoirs of General W. T. Sherman, ch. 25","date":"1875","img":"gen_william_tecumseh_sherman","pos":"50% 22%"},
{"g":"history","text":"A good night's rest had served to strengthen my determination. Let what might happen, to the Crimea I would go.","name":"Mary Seacole","src":"Wonderful Adventures of Mrs. Seacole in Many Lands, ch. 8","date":"1857","img":"gen_mary_seacole","pos":"50% 22%"},
{"g":"history","text":"The first qualification of a soldier is fortitude under fatigue and privation. Courage is only the second.","name":"Napoleon Bonaparte","src":"Military Maxims, LVIII (comp. Burnod, tr. G. C. D'Aguilar)","date":"comp. 1827","img":"gen_napoleon_bonaparte","pos":"50% 22%"},
{"g":"history","text":"I have in hand a most difficult task, from which I may not extricate myself; but I must not shrink from it … one may fail, but it would be dishonourable to shrink from the task.","name":"Duke of Wellington","src":"Letter to Col. Malcolm","date":"3 Dec 1809","img":"gen_duke_of_wellington","pos":"50% 22%"},
{"g":"history","text":"No difficulty baffles great zeal.","name":"John Fisher","src":"Memories","date":"1919","img":"gen_john_fisher","pos":"50% 22%"},
{"g":"history","text":"With courage, cheerfulness, and perseverance, no enterprise is impossible.","name":"Giuseppe Garibaldi","src":"Autobiography (tr. Theodore Dwight)","date":"1859","img":"gen_giuseppe_garibaldi","pos":"50% 22%"},
{"g":"history","text":"Discipline is the soul of an army. It makes small numbers formidable; procures success to the weak, and esteem to all.","name":"George Washington","src":"Letter of Instructions to the Captains of the Virginia Regiments","date":"29 Jul 1757","img":"gen_george_washington","pos":"50% 22%"},
{"g":"history","text":"I have not yet begun to fight!","name":"John Paul Jones","src":"Battle of Flamborough Head, as recalled by Lt. Richard Dale (publ. 1825)","date":"23 Sep 1779","img":"gen_john_paul_jones","pos":"50% 22%"},
{"g":"history","text":"Never tell people how to do things. Tell them what to do, and they will surprise you with their ingenuity.","name":"George S. Patton","src":"War As I Knew It","date":"1947","img":"gen_george_s_patton","pos":"50% 22%"},
{"g":"history","text":"Let us be firm, pure and faithful; at the end of our sorrow, there is the greatest glory of the world, that of the men who did not give in.","name":"Charles de Gaulle","src":"Speech, Algiers (Wikiquote tr.)","date":"14 Jul 1943","img":"gen_charles_de_gaulle","pos":"50% 22%"},
{"g":"history","text":"It is not enough to fight. It is the spirit which we bring to the fight that decides the issue. It is morale that wins the victory.","name":"George C. Marshall","src":"As printed in Military Review","date":"Oct 1948","img":"gen_george_c_marshall","pos":"50% 22%"},
{"g":"history","text":"All men dream: but not equally. Those who dream by night in the dusty recesses of their minds wake in the day to find that it was vanity: but the dreamers of the day are dangerous men, for they may act their dreams with open eyes, to make it possible.","name":"T. E. Lawrence","src":"Seven Pillars of Wisdom, introductory chapter","date":"1926","img":"gen_t_e_lawrence","pos":"50% 22%"},
{"g":"history","text":"If you're afraid of anything, why not take a chance and do the thing you fear. Sometimes it's the only way to get over being afraid.","name":"Audie Murphy","src":"In Harold Simpson, Audie Murphy: American Soldier","date":"before 1971","img":"gen_audie_murphy","pos":"50% 22%"},
{"g":"history","text":"Now, gentlemen, let us do something today which the world may talk of hereafter.","name":"Cuthbert Collingwood","src":"At Trafalgar, in A Selection from the Correspondence of Lord Collingwood (1828)","date":"21 Oct 1805","img":"gen_cuthbert_collingwood","pos":"50% 22%"},
{"g":"history","text":"Beware of rashness, but with energy and sleepless vigilance go forward and give us victories.","name":"Abraham Lincoln","src":"Letter to Gen. Joseph Hooker","date":"26 Jan 1863","img":"lincoln","pos":"50% 18%"},
{"g":"kind","text":"Optimism is the faith that leads to achievement; nothing can be done without hope.","name":"Helen Keller","src":"Optimism (essay)","date":"1903","img":"keller","pos":"50% 20%"},
{"g":"kind","text":"Although the world is full of suffering, it is full also of the overcoming of it.","name":"Helen Keller","src":"Optimism (essay)","date":"1903","img":"keller","pos":"50% 20%"},
{"g":"kind","text":"I'm not afraid of storms, for I'm learning how to sail my ship.","name":"Louisa May Alcott","src":"Little Women, ch. 44 (Amy)","date":"1869","img":"alcott","pos":"50% 15%"},
{"g":"kind","text":"The tree which fills the arms grew from the tiniest sprout … the journey of a thousand li commenced with a single step.","name":"Laozi","src":"Tao Te Ching, ch. 64 (tr. James Legge)","date":"c. 4th century BC","img":"laozi","pos":"50% 30%"},
{"g":"kind","text":"Trust thyself: every heart vibrates to that iron string.","name":"Ralph Waldo Emerson","src":"Self-Reliance","date":"1841","img":"emerson","pos":"50% 22%"},
{"g":"kind","text":"If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.","name":"Henry David Thoreau","src":"Walden","date":"1854","img":"thoreau","pos":"50% 20%"},
{"g":"kind","text":"Not I, not anyone else can travel that road for you, You must travel it for yourself.","name":"Walt Whitman","src":"Song of Myself, Leaves of Grass","date":"1892 ed.","img":"whitman","pos":"50% 12%"},
{"g":"kind","text":"No one is useless in this world who lightens the burden of it for anyone else.","name":"Charles Dickens","src":"Our Mutual Friend (John Rokesmith)","date":"1865","img":"dickens","pos":"50% 20%"},
{"g":"kind","text":"If there want but one basket of earth to complete the work, and I stop, the stopping is my own work.","name":"Confucius","src":"Analects IX.18 (tr. James Legge)","date":"c. 5th century BC","img":"confucius","pos":"50% 30%"},
{"g":"kind","text":"Courage is resistance to fear, mastery of fear—not absence of fear.","name":"Mark Twain","src":"Pudd'nhead Wilson, ch. 12 epigraph (Pudd'nhead Wilson's Calendar)","date":"1894","img":"twain","pos":"50% 15%"},
{"g":"kind","text":"Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?","name":"L. M. Montgomery","src":"Anne of Green Gables (Anne)","date":"1908","img":"montgomery","pos":"50% 30%"},
{"g":"kind","text":"I am no bird; and no net ensnares me; I am a free human being with an independent will.","name":"Charlotte Brontë","src":"Jane Eyre","date":"1847","img":"bronte","pos":"50% 30%"},
{"g":"kind","text":"To travel hopefully is a better thing than to arrive, and the true success is to labour.","name":"Robert Louis Stevenson","src":"El Dorado, Virginibus Puerisque","date":"1878","img":"stevenson","pos":"50% 25%"},
{"g":"kind","text":"There is no charm equal to tenderness of heart.","name":"Jane Austen","src":"Emma (Emma)","date":"1815","img":"jane_austen","pos":"50% 22%"},
{"g":"kind","text":"What do we live for, if it is not to make life less difficult to each other?","name":"George Eliot","src":"Middlemarch, ch. 72 (Dorothea)","date":"1872","img":"george_eliot","pos":"50% 22%"},
{"g":"kind","text":"The growing good of the world is partly dependent on unhistoric acts.","name":"George Eliot","src":"Middlemarch, Finale","date":"1872","img":"george_eliot","pos":"50% 22%"},
{"g":"kind","text":"The supreme happiness of life consists in the conviction that one is loved; loved for one's own sake—let us say rather, loved in spite of one's self.","name":"Victor Hugo","src":"Les Misérables (tr. Isabel F. Hapgood)","date":"1862","img":"victor_hugo","pos":"50% 22%"},
{"g":"kind","text":"Where one door shuts, another opens.","name":"Miguel de Cervantes","src":"Don Quixote, Part I, ch. 21 (tr. John Ormsby) (Don Quixote, citing a proverb)","date":"1605","img":"miguel_de_cervantes","pos":"50% 22%"},
{"g":"kind","text":"Where you tend a rose, my lad, A thistle cannot grow.","name":"Frances Hodgson Burnett","src":"The Secret Garden","date":"1911","img":"frances_hodgson_burnett","pos":"50% 22%"},
{"g":"kind","text":"If Nature has made you for a giver, your hands are born open, and so is your heart; and though there may be times when your hands are empty, your heart is always full.","name":"Frances Hodgson Burnett","src":"A Little Princess","date":"1905","img":"frances_hodgson_burnett","pos":"50% 22%"},
{"g":"kind","text":"You just think lovely wonderful thoughts, and they lift you up in the air.","name":"J. M. Barrie","src":"Peter and Wendy (Peter Pan) (Peter)","date":"1911","img":"j_m_barrie","pos":"50% 22%"},
{"g":"kind","text":"Why, sometimes I've believed as many as six impossible things before breakfast.","name":"Lewis Carroll","src":"Through the Looking-Glass (the White Queen)","date":"1871","img":"lewis_carroll","pos":"50% 22%"},
{"g":"kind","text":"Most generally there is something about everything that you can be glad about, if you keep hunting long enough to find it.","name":"Eleanor H. Porter","src":"Pollyanna (Pollyanna)","date":"1913","img":"gen_eleanor_h_porter","pos":"50% 22%"},
{"g":"kind","text":"If you shed tears when you miss the sun, you also miss the stars.","name":"Rabindranath Tagore","src":"Stray Birds, 6","date":"1916","img":"rabindranath_tagore","pos":"50% 22%"},
{"g":"kind","text":"He who wants to do good knocks at the gate; he who loves finds the gate open.","name":"Rabindranath Tagore","src":"Stray Birds, 83","date":"1916","img":"rabindranath_tagore","pos":"50% 22%"},
{"g":"kind","text":"Work is love made visible.","name":"Kahlil Gibran","src":"The Prophet, On Work","date":"1923","img":"kahlil_gibran","pos":"50% 22%"},
{"g":"kind","text":"You give but little when you give of your possessions. It is when you give of yourself that you truly give.","name":"Kahlil Gibran","src":"The Prophet, On Giving","date":"1923","img":"kahlil_gibran","pos":"50% 22%"},
{"g":"kind","text":"Great works are performed not by strength, but perseverance; yonder palace was raised by single stones.","name":"Samuel Johnson","src":"Rasselas, ch. 13 (Imlac)","date":"1759","img":"samuel_johnson","pos":"50% 22%"},
{"g":"kind","text":"We are all in the gutter, but some of us are looking at the stars.","name":"Oscar Wilde","src":"Lady Windermere's Fan, Act III (Lord Darlington)","date":"1892","img":"oscar_wilde","pos":"50% 22%"},
{"g":"kind","text":"How far that little candle throws his beams! So shines a good deed in a naughty world.","name":"William Shakespeare","src":"The Merchant of Venice, Act V, Scene 1 (Portia)","date":"c. 1596","img":"william_shakespeare","pos":"50% 22%"},
{"g":"kind","text":"Hope is the thing with feathers That perches in the soul, And sings the tune without the words, And never stops at all.","name":"Emily Dickinson","src":"Hope, Poems: Second Series","date":"1891","img":"emily_dickinson","pos":"50% 22%"},
{"g":"kind","text":"If I can stop one heart from breaking, I shall not live in vain; If I can ease one life the aching, Or cool one pain, Or help one fainting robin Unto his nest again, I shall not live in vain.","name":"Emily Dickinson","src":"Poems: First Series","date":"1890","img":"emily_dickinson","pos":"50% 22%"},
{"g":"kind","text":"Let us, then, be up and doing, With a heart for any fate; Still achieving, still pursuing, Learn to labor and to wait.","name":"Henry Wadsworth Longfellow","src":"A Psalm of Life","date":"1838","img":"henry_wadsworth_longfellow","pos":"50% 22%"},
{"g":"kind","text":"Come, my friends, 'Tis not too late to seek a newer world.","name":"Alfred, Lord Tennyson","src":"Ulysses","date":"1842","img":"alfred_tennyson","pos":"50% 22%"},
{"g":"kind","text":"Ah, but a man's reach should exceed his grasp, Or what's a heaven for?","name":"Robert Browning","src":"Andrea del Sarto","date":"1855","img":"robert_browning","pos":"50% 22%"},
{"g":"kind","text":"That best portion of a good man's life; His little, nameless, unremembered acts Of kindness and of love.","name":"William Wordsworth","src":"Lines Composed a Few Miles above Tintern Abbey","date":"1798","img":"william_wordsworth","pos":"50% 22%"},
{"g":"kind","text":"O, Wind, If Winter comes, can Spring be far behind?","name":"Percy Bysshe Shelley","src":"Ode to the West Wind","date":"1819","img":"percy_bysshe_shelley","pos":"50% 22%"},
{"g":"kind","text":"If you can keep your head when all about you Are losing theirs and blaming it on you; If you can trust yourself when all men doubt you, But make allowance for their doubting too.","name":"Rudyard Kipling","src":"If—, Rewards and Fairies","date":"1910","img":"rudyard_kipling","pos":"50% 22%"},
{"g":"kind","text":"It matters not how strait the gate, How charged with punishments the scroll, I am the master of my fate: I am the captain of my soul.","name":"William Ernest Henley","src":"Invictus","date":"1875 (publ. 1888)","img":"william_ernest_henley","pos":"50% 22%"},
{"g":"kind","text":"Spend all you have for loveliness, Buy it and never count the cost; For one white singing hour of peace Count many a year of strife well lost.","name":"Sara Teasdale","src":"Barter, Love Songs","date":"1917","img":"sara_teasdale","pos":"50% 22%"},
{"g":"kind","text":"Hope springs eternal in the human breast: Man never is, but always to be blest.","name":"Alexander Pope","src":"An Essay on Man, Epistle I","date":"1733","img":"alexander_pope","pos":"50% 22%"},
{"g":"kind","text":"No man is an island, entire of itself; every man is a piece of the continent, a part of the main.","name":"John Donne","src":"Devotions upon Emergent Occasions, Meditation XVII","date":"1624","img":"john_donne","pos":"50% 22%"},
{"g":"kind","text":"All shall be well, and all shall be well, and all manner of thing shall be well.","name":"Julian of Norwich","src":"Revelations of Divine Love, ch. 27 (ed. Grace Warrack) (words of Christ in her vision)","date":"c. 1393","img":"julian_of_norwich","pos":"50% 22%"},
{"g":"kind","text":"Climb the mountains and get their good tidings. Nature's peace will flow into you as sunshine flows into trees.","name":"John Muir","src":"Our National Parks","date":"1901","img":"john_muir","pos":"50% 22%"},
{"g":"kind","text":"I have learnt that all men live not by care for themselves but by love.","name":"Leo Tolstoy","src":"What Men Live By (tr. Louise and Aylmer Maude) (the angel Michael)","date":"1885","img":"leo_tolstoy","pos":"50% 22%"},
{"g":"kind","text":"You will find as you look back upon your life that the moments that stand out, the moments when you have really lived, are the moments when you have done things in a spirit of love.","name":"Henry Drummond","src":"The Greatest Thing in the World","date":"1890","img":"henry_drummond","pos":"50% 22%"},
{"g":"kind","text":"No coward soul is mine, No trembler in the world's storm-troubled sphere: I see Heaven's glories shine, And faith shines equal, arming me from fear.","name":"Emily Brontë","src":"No Coward Soul Is Mine","date":"1846 (publ. 1850)","img":"emily_bronte","pos":"50% 22%"},
{"g":"kind","text":"Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.","name":"William James","src":"Is Life Worth Living?, The Will to Believe","date":"1895","img":"william_james","pos":"50% 22%"},
{"g":"kind","text":"Those who are happiest are those who do the most for others.","name":"Booker T. Washington","src":"Up from Slavery, ch. 3","date":"1901","img":"booker_t_washington","pos":"50% 22%"},
{"g":"kind","text":"We could never learn to be brave and patient, if there were only joy in the world.","name":"Helen Keller","src":"Letter to Oliver Wendell Holmes, The Story of My Life","date":"1890-03-01","img":"keller","pos":"50% 20%"},
{"g":"kind","text":"If I am not for myself, who will be for me? But if I care for myself only, what am I? And if not now, when?","name":"Hillel the Elder","src":"Pirke Avot 1:14 (tr. Joseph I. Gorfinkle)","date":"c. 1st century BC","img":"hillel_the_elder","pos":"50% 22%"},
{"g":"kind","text":"It is not thy duty to complete the work, but neither art thou free to desist from it.","name":"Rabbi Tarfon","src":"Pirke Avot 2:21 (tr. Joseph I. Gorfinkle)","date":"c. 100 AD","img":"rabbi_tarfon","pos":"50% 22%"},
{"g":"kind","text":"He who extracts the rose from the thorn Can also turn this winter into spring.","name":"Rumi","src":"Masnavi (tr. E. H. Whinfield)","date":"c. 1260","img":"rumi","pos":"50% 22%"},
{"g":"kind","text":"Life is short and we have never too much time for gladdening the hearts of those who are traveling the dark journey with us. Oh, be swift to love, make haste to be kind!","name":"Henri-Frédéric Amiel","src":"Journal Intime (tr. Mrs Humphry Ward)","date":"1868-12-16","img":"henri_frederic_amiel","pos":"50% 22%"},
{"g":"kind","text":"One ought, every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words.","name":"Johann Wolfgang von Goethe","src":"Wilhelm Meister's Apprenticeship, Book V, ch. 1 (tr. Thomas Carlyle) (Serlo)","date":"1795","img":"goethe","pos":"50% 22%"},
{"g":"kind","text":"Life is mostly froth and bubble, Two things stand like stone, Kindness in another's trouble, Courage in your own.","name":"Adam Lindsay Gordon","src":"Ye Wearie Wayfarer","date":"1866","img":"adam_lindsay_gordon","pos":"50% 22%"},
{"g":"kind","text":"Angels can fly because they can take themselves lightly.","name":"G. K. Chesterton","src":"Orthodoxy, ch. 7","date":"1908","img":"g_k_chesterton","pos":"50% 22%"},
{"g":"kind","text":"Dream lofty dreams, and as you dream, so shall you become. Your Vision is the promise of what you shall one day be.","name":"James Allen","src":"As a Man Thinketh","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"kind","text":"The most manifest sign of wisdom is a continual cheerfulness.","name":"Michel de Montaigne","src":"Of the Education of Children (tr. Charles Cotton)","date":"1580","img":"michel_de_montaigne","pos":"50% 22%"},
{"g":"kind","text":"To be born in a duck's nest, in a farmyard, is of no consequence to a bird, if it is hatched from a swan's egg.","name":"Hans Christian Andersen","src":"The Ugly Duckling (anon. tr.)","date":"1843","img":"hans_christian_andersen","pos":"50% 22%"},
{"g":"kind","text":"There is no duty we so much underrate as the duty of being happy. By being happy, we sow anonymous benefits upon the world.","name":"Robert Louis Stevenson","src":"An Apology for Idlers, Virginibus Puerisque","date":"1877","img":"stevenson","pos":"50% 25%"},
{"g":"kind","text":"There is no wealth but life. Life, including all its powers of love, of joy, and of admiration.","name":"John Ruskin","src":"Unto This Last, Essay IV (Ad Valorem)","date":"1860","img":"john_ruskin","pos":"50% 22%"},
{"g":"history","text":"The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood.","name":"Theodore Roosevelt","src":"“Citizenship in a Republic”, Sorbonne","date":"23 Apr 1910","img":"roosevelt","pos":"50% 22%"},
{"g":"history","text":"Far better it is to dare mighty things, to win glorious triumphs, even though checkered by failure, than to take rank with those poor spirits who neither enjoy much nor suffer much.","name":"Theodore Roosevelt","src":"“The Strenuous Life”, Chicago","date":"10 Apr 1899","img":"roosevelt","pos":"50% 22%"},
{"g":"history","text":"We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.","name":"John F. Kennedy","src":"Rice University address","date":"12 Sep 1962","img":"kennedy","pos":"50% 22%"},
{"g":"history","text":"The only thing we have to fear is fear itself.","name":"Franklin D. Roosevelt","src":"First inaugural address","date":"4 Mar 1933","img":"fdr","pos":"50% 18%"},
{"g":"history","text":"If there is no struggle there is no progress.","name":"Frederick Douglass","src":"West India Emancipation speech","date":"3 Aug 1857","img":"douglass","pos":"50% 18%"},
{"g":"history","text":"Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed.","name":"Booker T. Washington","src":"Up from Slavery","date":"1901","img":"washington","pos":"50% 15%"},
{"g":"history","text":"Victory awaits him who has everything in order — luck, people call it. Defeat is certain for him who has neglected to take the necessary precautions in time; this is called bad luck.","name":"Roald Amundsen","src":"The South Pole, tr. A. G. Chater","date":"1912","img":"gen_roald_amundsen","pos":"50% 22%"},
{"g":"history","text":"I have steadily endeavoured to keep my mind free so as to give up any hypothesis, however much beloved … as soon as facts are shown to be opposed to it.","name":"Charles Darwin","src":"Autobiography","date":"1876","img":"gen_charles_darwin","pos":"50% 22%"},
{"g":"history","text":"In the fields of observation, chance only favours the mind which is prepared.","name":"Louis Pasteur","src":"Inaugural lecture, Lille (tr. R. L. Devonshire)","date":"7 Dec 1854","img":"gen_louis_pasteur","pos":"50% 22%"},
{"g":"history","text":"What one man can do himself directly is but little. If however he can stir up ten others to take up the task he has accomplished much.","name":"Wilbur Wright","src":"Letter to Octave Chanute","date":"1 Jun 1900","img":"gen_wilbur_wright","pos":"50% 22%"},
{"g":"history","text":"If you are looking for perfect safety, you will do well to sit on a fence and watch the birds; but if you really wish to learn, you must mount a machine and become acquainted with its tricks by actual trial.","name":"Wilbur Wright","src":"“Some Aeronautical Experiments”, Western Society of Engineers","date":"18 Sep 1901","img":"gen_wilbur_wright","pos":"50% 22%"},
{"g":"history","text":"When I have fully decided that a result is worth getting, I go about it, and make trial after trial, until it comes.","name":"Thomas Edison","src":"Interview with Theodore Dreiser, Success magazine","date":"Feb 1898","img":"gen_thomas_edison","pos":"50% 22%"},
{"g":"history","text":"Genius is one percent inspiration and 99 percent perspiration.","name":"Thomas Edison","src":"Letter confirming his famous saying","date":"1927","img":"gen_thomas_edison","pos":"50% 22%"},
{"g":"history","text":"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.","name":"Albert Einstein","src":"Interview with G. S. Viereck, Saturday Evening Post","date":"26 Oct 1929","img":"gen_albert_einstein","pos":"50% 22%"},
{"g":"history","text":"The important thing is not to stop questioning. … Never lose a holy curiosity.","name":"Albert Einstein","src":"As recorded by William Miller, LIFE magazine","date":"2 May 1955","img":"gen_albert_einstein","pos":"50% 22%"},
{"g":"history","text":"What are we doing here? We're reaching for the stars.","name":"Christa McAuliffe","src":"Quoted in TIME","date":"10 Feb 1986","img":"gen_christa_mcauliffe","pos":"50% 22%"},
{"g":"history","text":"A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.","name":"Mahatma Gandhi","src":"Harijan","date":"19 Nov 1938","img":"gen_mahatma_gandhi","pos":"50% 22%"},
{"g":"history","text":"Difficulties break some men but make others. No axe is sharp enough to cut the soul of a sinner who keeps on trying, one armed with the hope that he will rise even in the end.","name":"Nelson Mandela","src":"Letter to Winnie Mandela from Robben Island","date":"1 Feb 1975","img":"gen_nelson_mandela","pos":"50% 22%"},
{"g":"history","text":"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. … You must do the thing you think you cannot do.","name":"Eleanor Roosevelt","src":"You Learn by Living","date":"1960","img":"gen_eleanor_roosevelt","pos":"50% 22%"},
{"g":"history","text":"We can only see a short distance ahead, but we can see plenty there that needs to be done.","name":"Alan Turing","src":"“Computing Machinery and Intelligence”, Mind","date":"Oct 1950","img":"gen_alan_turing","pos":"50% 22%"},
{"g":"history","text":"Imagination will often carry us to worlds that never were. But without it we go nowhere.","name":"Carl Sagan","src":"Cosmos","date":"1980","img":"gen_carl_sagan","pos":"50% 22%"},
{"g":"history","text":"The only way of discovering the limits of the possible is to venture a little way past them into the impossible.","name":"Arthur C. Clarke","src":"“Hazards of Prophecy”, Profiles of the Future","date":"1962","img":"gen_arthur_c_clarke","pos":"50% 22%"},
{"g":"history","text":"Deeds, not words, was to be our permanent motto.","name":"Emmeline Pankhurst","src":"My Own Story, on founding the WSPU","date":"1914","img":"gen_emmeline_pankhurst","pos":"50% 22%"},
{"g":"history","text":"If an idea, I reasoned, were really a valuable one, there must be some way of realising it.","name":"Elizabeth Blackwell","src":"Pioneer Work in Opening the Medical Profession to Women","date":"1895","img":"gen_elizabeth_blackwell","pos":"50% 22%"},
{"g":"history","text":"How often have things been proved to me impossible! Now I am used to it I expect it. But in those days it troubled me. Still I persevered.","name":"Alberto Santos-Dumont","src":"My Airships","date":"1904","img":"gen_alberto_santos_dumont","pos":"50% 22%"},
{"g":"history","text":"My strength was fast ebbing; in a few minutes it would be too late. It was the occasion for a supreme attempt. New power seemed to come as I addressed myself to one last tremendous effort.","name":"Douglas Mawson","src":"The Home of the Blizzard, hanging in a crevasse","date":"1915","img":"gen_douglas_mawson","pos":"50% 22%"},
{"g":"history","text":"Concentrate all your thought upon the work in hand. The sun's rays do not burn until brought to a focus.","name":"Alexander Graham Bell","src":"As recorded by O. S. Marden, How They Succeeded","date":"1901","img":"gen_alexander_graham_bell","pos":"50% 22%"},
{"g":"history","text":"I never lose an opportunity of urging a practical beginning, however small, for it is wonderful how often in such matters the mustard-seed germinates and roots itself.","name":"Florence Nightingale","src":"“Health Missioners for Rural India”, India (quoted in E. T. Cook, Life of Florence Nightingale, vol. II)","date":"Dec 1896","img":"gen_florence_nightingale","pos":"50% 22%"},
{"g":"history","text":"To succeed, you must have tremendous perseverance, tremendous will. … Have that sort of energy, that sort of will; work hard, and you will reach the goal.","name":"Swami Vivekananda","src":"Lectures on Raja Yoga, ch. VI","date":"1896","img":"gen_swami_vivekananda","pos":"50% 22%"},
{"g":"history","text":"When I had no specific destination I always ran as fast as I could in the hope of finding one—and I always found one.","name":"Beryl Markham","src":"West with the Night","date":"1942","img":"gen_beryl_markham","pos":"50% 22%"},
{"g":"history","text":"Let me tell you the secret of such so-called successes as there have been in my life … It was to burn my boats and demolish my bridges behind me. Then one loses no time in looking behind, when one should have quite enough to do in looking ahead.","name":"Fridtjof Nansen","src":"Rectorial address, University of St Andrews","date":"3 Nov 1926","img":"gen_fridtjof_nansen","pos":"50% 22%"},
{"g":"history","text":"… We cannot accept anything as granted, beyond the first mathematical formulae. Question everything else.","name":"Maria Mitchell","src":"Maria Mitchell: Life, Letters, and Journals","date":"pub. 1896","img":"gen_maria_mitchell","pos":"50% 22%"},
{"g":"history","text":"I know, somehow, that only when it is dark enough, can you see the stars.","name":"Martin Luther King Jr.","src":"“I've Been to the Mountaintop”, Memphis","date":"3 Apr 1968","img":"king","pos":"55% 18%"},
{"g":"history","text":"It's all part of taking a chance and expanding man's horizons. The future doesn't belong to the fainthearted; it belongs to the brave.","name":"Ronald Reagan","src":"Address to the nation on the Challenger disaster","date":"28 Jan 1986","img":"reagan","pos":"50% 18%"},
{"g":"history","text":"Let us have faith that right makes might, and in that faith, let us, to the end, dare to do our duty as we understand it.","name":"Abraham Lincoln","src":"Cooper Union address, New York","date":"27 Feb 1860","img":"lincoln","pos":"50% 18%"},
{"g":"history","text":"Courage is the price that Life exacts for granting peace. The soul that knows it not, knows no release from little things.","name":"Amelia Earhart","src":"“Courage”, poem, in Morrissey & Osborne, Amelia, My Courageous Sister (1987), p. 74","date":"c. 1928","img":"gen_amelia_earhart","pos":"50% 22%"},
{"g":"history","text":"The purpose of life … is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.","name":"Eleanor Roosevelt","src":"You Learn by Living, foreword","date":"Jan 1960","img":"gen_eleanor_roosevelt","pos":"50% 22%"},
{"g":"ancient","text":"That which is an obstacle on the road helps us on this road.","name":"Marcus Aurelius","src":"Meditations V.20 (tr. George Long)","date":"c. 170–180 AD","img":"aurelius","pos":"50% 20%"},
{"g":"ancient","text":"In the morning when thou risest unwillingly, let this thought be present: I am rising to the work of a human being.","name":"Marcus Aurelius","src":"Meditations V.1 (tr. George Long)","date":"c. 170–180 AD","img":"aurelius","pos":"50% 20%"},
{"g":"ancient","text":"No longer talk at all about the kind of man that a good man ought to be, but be such.","name":"Marcus Aurelius","src":"Meditations X.16 (tr. George Long)","date":"c. 170–180 AD","img":"aurelius","pos":"50% 20%"},
{"g":"ancient","text":"Nothing great … is produced suddenly, since not even the grape or the fig is.","name":"Epictetus","src":"Discourses I.15 (tr. George Long)","date":"c. 108 AD","img":"epictetus","pos":"50% 25%"},
{"g":"ancient","text":"Men are disturbed not by things, but by the views which they take of things.","name":"Epictetus","src":"Enchiridion 5 (tr. T. W. Higginson)","date":"c. 125 AD","img":"epictetus","pos":"50% 25%"},
{"g":"ancient","text":"Seize the present, trust tomorrow even as little as you may.","name":"Horace","src":"Odes I.11 (tr. John Conington)","date":"23 BC","img":"horace","pos":"50% 15%"},
{"g":"ancient","text":"Hold every hour in your grasp. Lay hold of today's task, and you will not need to depend so much upon tomorrow's. While we are postponing, life speeds by.","name":"Seneca","src":"Letters to Lucilius 1 (tr. R. M. Gummere)","date":"c. 65 AD","img":"seneca","pos":"55% 30%"},
{"g":"ancient","text":"We suffer more often in imagination than in reality.","name":"Seneca","src":"Letters to Lucilius 13 (tr. R. M. Gummere)","date":"c. 65 AD","img":"seneca","pos":"55% 30%"},
{"g":"ancient","text":"When a man does not know what harbour he is making for, no wind is the right wind.","name":"Seneca","src":"Letters to Lucilius 71 (tr. R. M. Gummere)","date":"c. 65 AD","img":"seneca","pos":"55% 30%"},
{"g":"ancient","text":"Man's character is his fate.","name":"Heraclitus","src":"Fragment 121 Bywater (DK 119) (tr. John Burnet)","date":"c. 500 BC","img":"heraclitus","pos":"50% 25%"},
{"g":"ancient","text":"Heart, be still, you had worse than this to bear on the day when the terrible Cyclops ate your brave companions; yet you bore it in silence till your cunning got you safe out of the cave.","name":"Homer","src":"Odyssey XX, Ulysses speaking (tr. Samuel Butler)","date":"c. 8th century BC","img":"gen_homer","pos":"50% 22%"},
{"g":"ancient","text":"Between us and Goodness the gods have placed the sweat of our brows … when a man has reached the top, then is she easy to reach.","name":"Hesiod","src":"Works and Days 289–292 (tr. H. G. Evelyn-White)","date":"c. 700 BC","img":"gen_hesiod","pos":"50% 22%"},
{"g":"ancient","text":"Work is no disgrace: it is idleness which is a disgrace.","name":"Hesiod","src":"Works and Days 311 (tr. H. G. Evelyn-White)","date":"c. 700 BC","img":"gen_hesiod","pos":"50% 22%"},
{"g":"ancient","text":"Slow but steady wins the race.","name":"Aesop","src":"Aesop's Fables (traditionally attributed), The Hare and the Tortoise, moral (tr. G. F. Townsend, 1867)","date":"c. 6th century BC","img":"gen_aesop","pos":"50% 22%"},
{"g":"ancient","text":"Put your shoulders to the wheels, my man. Goad on your bullocks, and never more pray to me for help, until you have done your best to help yourself.","name":"Aesop","src":"Aesop's Fables (traditionally attributed), Hercules and the Wagoner (tr. G. F. Townsend, 1867)","date":"c. 6th century BC","img":"gen_aesop","pos":"50% 22%"},
{"g":"ancient","text":"… Another, too much distrustful of his strength, fails to secure the honours that rightfully belong to him, being dragged backward by a spirit deficient in daring.","name":"Pindar","src":"Nemean Odes XI.29–32 (tr. C. T. Ramage, 1873)","date":"c. 446 BC","img":"gen_pindar","pos":"50% 22%"},
{"g":"ancient","text":"Fortune is not on the side of the faint-hearted.","name":"Sophocles","src":"Fragment 927 (tr. in Bartlett's Familiar Quotations, 9th ed., 1892)","date":"5th century BC","img":"gen_sophocles","pos":"50% 22%"},
{"g":"ancient","text":"Toil, says the proverb, is the sire of fame.","name":"Euripides","src":"Licymnius, fragment 474 (tr. in Bartlett's Familiar Quotations, 9th ed., 1892)","date":"5th century BC","img":"gen_euripides","pos":"50% 22%"},
{"g":"ancient","text":"There is in the worst of fortune the best of chances for a happy change.","name":"Euripides","src":"Iphigenia in Tauris 721–722 (tr. in Bartlett's Familiar Quotations, 9th ed., 1892)","date":"c. 414 BC","img":"gen_euripides","pos":"50% 22%"},
{"g":"ancient","text":"Man … will be in the best condition, if when he is taking counsel he feels fear … but in doing the deed he is bold.","name":"Herodotus","src":"Histories VII.49, Artabanus to Xerxes (tr. G. C. Macaulay)","date":"c. 430 BC","img":"gen_herodotus","pos":"50% 22%"},
{"g":"ancient","text":"The palm of courage will surely be adjudged most justly to those, who best know the difference between hardship and pleasure and yet are never tempted to shrink from danger.","name":"Pericles","src":"Funeral Oration as reconstructed by Thucydides, II.40 (tr. Richard Crawley)","date":"431 BC","img":"gen_pericles","pos":"50% 22%"},
{"g":"ancient","text":"We … place the real disgrace of poverty not in owning to the fact but in declining the struggle against it.","name":"Pericles","src":"Funeral Oration as reconstructed by Thucydides, II.40 (tr. Richard Crawley)","date":"431 BC","img":"gen_pericles","pos":"50% 22%"},
{"g":"ancient","text":"The unexamined life is not worth living.","name":"Socrates","src":"As reported by Plato, Apology 38a (tr. Benjamin Jowett)","date":"399 BC","img":"gen_socrates","pos":"50% 22%"},
{"g":"ancient","text":"The beginning is the most important part of any work, especially in the case of a young and tender thing.","name":"Plato","src":"Republic II, Socrates speaking (tr. Benjamin Jowett)","date":"c. 375 BC","img":"gen_plato","pos":"50% 22%"},
{"g":"ancient","text":"He must learn by many trials to win the victory over himself, if he is ever to be made perfect.","name":"Plato","src":"Laws I, the Athenian Stranger speaking (tr. Benjamin Jowett)","date":"c. 348 BC","img":"gen_plato","pos":"50% 22%"},
{"g":"ancient","text":"Among things that are lovely and of good report, not one have the gods bestowed upon mortal men apart from toil and pains.","name":"Xenophon","src":"Memorabilia II.1, Virtue speaking in Prodicus' fable of Heracles, as told by Socrates (tr. H. G. Dakyns)","date":"c. 371 BC","img":"gen_xenophon","pos":"50% 22%"},
{"g":"ancient","text":"By doing just actions we come to be just; by doing the actions of self-mastery we come to be perfected in self-mastery; and by doing brave actions brave.","name":"Aristotle","src":"Nicomachean Ethics II.1 (tr. D. P. Chase)","date":"c. 340 BC","img":"aristotle","pos":"50% 22%"},
{"g":"ancient","text":"The roots of education were bitter, but the fruit sweet.","name":"Aristotle","src":"Reported by Diogenes Laertius, Lives V.18 (tr. C. D. Yonge)","date":"4th century BC","img":"aristotle","pos":"50% 22%"},
{"g":"ancient","text":"Practice does everything.","name":"Periander","src":"Reported by Diogenes Laertius, Lives I.99 (tr. C. D. Yonge)","date":"c. 600 BC","img":"gen_periander","pos":"50% 22%"},
{"g":"ancient","text":"Watch your opportunity.","name":"Pittacus","src":"Reported by Diogenes Laertius, Lives I.79 (tr. C. D. Yonge)","date":"c. 600 BC","img":"gen_pittacus","pos":"50% 22%"},
{"g":"ancient","text":"Cherish wisdom as a means of travelling from youth to old age, for it is more lasting than any other possession.","name":"Bias of Priene","src":"Reported by Diogenes Laertius, Lives I.88 (tr. C. D. Yonge)","date":"c. 570 BC","img":"gen_bias","pos":"50% 22%"},
{"g":"ancient","text":"Goodness was attained by little and little, but was not itself a small thing.","name":"Zeno of Citium","src":"Reported by Diogenes Laertius, Lives VII.26 (tr. C. D. Yonge)","date":"c. 300 BC","img":"gen_zeno","pos":"50% 22%"},
{"g":"ancient","text":"There was nothing whatever in life which could be brought to perfection without practice …","name":"Diogenes of Sinope","src":"Reported by Diogenes Laertius, Lives VI.71 (tr. C. D. Yonge)","date":"c. 350 BC","img":"gen_diogenes","pos":"50% 22%"},
{"g":"ancient","text":"Seek after the good, and with much toil shall ye find it; the evil turns up of itself without your seeking it.","name":"Democritus","src":"Fragment 108 (tr. C. M. Bakewell, 1907)","date":"c. 400 BC","img":"gen_democritus","pos":"50% 22%"},
{"g":"ancient","text":"He who labours diligently need never despair. We can accomplish everything by diligence and labour.","name":"Menander","src":"Dyskolos 860–863, Sostratus speaking (tr. C. T. Ramage, 1864)","date":"316 BC","img":"gen_menander","pos":"50% 22%"},
{"g":"ancient","text":"A good and honourable character is a safe provision for every event and every turn of fortune.","name":"Menander","src":"Homopatrioi, fragment 261 (tr. C. T. Ramage, 1864)","date":"4th century BC","img":"gen_menander","pos":"50% 22%"},
{"g":"ancient","text":"To a brave man there is no end to labours except the labours themselves, provided they lead to glorious achievements.","name":"Alexander the Great","src":"Speech to his officers, as reconstructed by Arrian,, Anabasis V.26 (tr. E. J. Chinnock)","date":"326 BC","img":"gen_alexander","pos":"50% 22%"},
{"g":"ancient","text":"Fortune helps the brave.","name":"Terence","src":"Phormio I.4, Geta speaking (tr. H. T. Riley)","date":"161 BC","img":"gen_terence","pos":"50% 22%"},
{"g":"ancient","text":"Nothing is so difficult, but that it may be found out by seeking.","name":"Terence","src":"The Self-Tormentor IV.2, Syrus speaking (tr. H. T. Riley)","date":"163 BC","img":"gen_terence","pos":"50% 22%"},
{"g":"ancient","text":"Old men retain their intellects well enough, if only they keep their minds active and fully employed.","name":"Cicero","src":"On Old Age 22, Cato speaking (tr. E. S. Shuckburgh)","date":"44 BC","img":"gen_cicero","pos":"50% 22%"},
{"g":"ancient","text":"They can conquer, who believe they can.","name":"Virgil","src":"Aeneid V (tr. John Dryden)","date":"19 BC","img":"gen_virgil","pos":"50% 22%"},
{"g":"ancient","text":"Endure, and conquer! Jove will soon dispose To future good our past and present woes.","name":"Virgil","src":"Aeneid I, Aeneas to his men (tr. John Dryden)","date":"19 BC","img":"gen_virgil","pos":"50% 22%"},
{"g":"ancient","text":"Fortune befriends the bold.","name":"Virgil","src":"Aeneid X, Turnus speaking (tr. John Dryden)","date":"19 BC","img":"gen_virgil","pos":"50% 22%"},
{"g":"ancient","text":"The event proved that fortune assists the brave.","name":"Livy","src":"History of Rome VIII.29 (tr. D. Spillan)","date":"c. 27–9 BC","img":"gen_livy","pos":"50% 22%"},
{"g":"ancient","text":"That is done fast enough, which is done well enough.","name":"Augustus","src":"Reported by Suetonius, Life of Augustus 25 (tr. A. Thomson, rev. T. Forester)","date":"1st century BC","img":"gen_augustus","pos":"50% 22%"},
{"g":"ancient","text":"'Tis hard, I admit, yet virtue aims at what is hard.","name":"Ovid","src":"Letters from Pontus II.ii.111 (tr. A. L. Wheeler, 1924)","date":"c. 13 AD","img":"ovid","pos":"50% 22%"},
{"g":"ancient","text":"The mind is not a vessel which calls for filling. It is a pile, which simply requires kindling-wood to start the flame of eagerness for original thought and ardour for truth.","name":"Plutarch","src":"On the Student at Lectures 18 (tr. T. G. Tucker)","date":"c. 100 AD","img":"gen_plutarch","pos":"50% 22%"},
{"g":"ancient","text":"So much easier is it to do many things than to do one thing for a long time continuously.","name":"Quintilian","src":"Institutio Oratoria I.12.7 (tr. H. E. Butler, 1920)","date":"c. 95 AD","img":"quintilian","pos":"50% 22%"},
{"g":"ancient","text":"It is circumstances (difficulties) which show what men are. Therefore when a difficulty falls upon you, remember that God, like a trainer of wrestlers, has matched you with a rough young man.","name":"Epictetus","src":"Discourses I.24 (tr. George Long)","date":"c. 108 AD","img":"epictetus","pos":"50% 25%"},
{"g":"ancient","text":"Come now, have courage to be wise: begin. You're halfway over when you once plunge in.","name":"Horace","src":"Epistles I.2 (tr. John Conington)","date":"c. 20 BC","img":"horace","pos":"50% 15%"},
{"g":"ancient","text":"Nothing is wretched, but thinking makes it so, and conversely every lot is happy if borne with equanimity.","name":"Boethius","src":"The Consolation of Philosophy II (tr. H. R. James)","date":"c. 524 AD","img":"gen_boethius","pos":"50% 22%"},
{"g":"ancient","text":"One should emulate works and deeds of virtue, not arguments about it.","name":"Democritus","src":"Fragment 55 (tr. C. M. Bakewell, 1907)","date":"c. 400 BC","img":"gen_democritus","pos":"50% 22%"},
{"g":"ancient","text":"Without toil there have triumphed a very few.","name":"Pindar","src":"Olympian ode for Agesidamos of Lokri (tr. Ernest Myers, 1874)","date":"476 BC","img":"gen_pindar","pos":"50% 22%"},
{"g":"business","text":"Sloth, like rust, consumes faster than labour wears, while the used key is always bright.","name":"Benjamin Franklin","src":"The Way to Wealth (\"Father Abraham's speech\", Poor Richard's Almanack)","date":"1758","img":"franklin","pos":"50% 25%"},
{"g":"business","text":"Dost thou love life? Then do not squander time, for that is the stuff life is made of.","name":"Benjamin Franklin","src":"The Way to Wealth (\"Father Abraham's speech\", Poor Richard's Almanack)","date":"1758","img":"franklin","pos":"50% 25%"},
{"g":"business","text":"Stick to it steadily, and you will see great effects; for constant dropping wears away stones … and little strokes fell great oaks.","name":"Benjamin Franklin","src":"The Way to Wealth (\"Father Abraham's speech\", Poor Richard's Almanack)","date":"1758","img":"franklin","pos":"50% 25%"},
{"g":"business","text":"Do your work, respecting the excellence of the work, and not its acceptableness.","name":"Ralph Waldo Emerson","src":"The Conduct of Life, \"Wealth\"","date":"1860","img":"emerson","pos":"50% 22%"},
{"g":"business","text":"Profligacy consists not in spending years of time or chests of money, but in spending them off the line of your career.","name":"Ralph Waldo Emerson","src":"The Conduct of Life, \"Wealth\"","date":"1860","img":"emerson","pos":"50% 22%"},
{"g":"business","text":"Nothing earns better interest than judicious questions, and the man who invests in more knowledge of the business than he has to have in order to hold his job has capital with which to buy a mortgage on a better one.","name":"George Horace Lorimer","src":"Letters from a Self-Made Merchant to His Son (John Graham's letters)","date":"1902","img":"gen_george_horace_lorimer","pos":"50% 22%"},
{"g":"business","text":"When you make a mistake, don't make the second one—keeping it to yourself.","name":"George Horace Lorimer","src":"Letters from a Self-Made Merchant to His Son (John Graham's letters)","date":"1902","img":"gen_george_horace_lorimer","pos":"50% 22%"},
{"g":"business","text":"Idleness alone is without hope: work earnestly at anything, you will by degrees learn to work at almost all things. There is endless hope in work, were it even work at making money.","name":"Thomas Carlyle","src":"Past and Present, bk. III","date":"1843","img":"gen_thomas_carlyle","pos":"50% 22%"},
{"g":"business","text":"The present time is the raw material out of which we make whatever we will.","name":"Orison Swett Marden","src":"Pushing to the Front","date":"1894","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"business","text":"The great difference between those who succeed and those who fail does not consist in the amount of work done by each, but in the amount of intelligent work.","name":"Orison Swett Marden","src":"Pushing to the Front","date":"1894","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"business","text":"The man who always acts promptly, even if he makes occasional mistakes, will succeed when a procrastinator, even if he have the better judgment, will fail.","name":"Orison Swett Marden","src":"Pushing to the Front","date":"1894","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"business","text":"We never shall have any more time. We have, and we have always had, all the time there is.","name":"Arnold Bennett","src":"How to Live on 24 Hours a Day","date":"1908","img":"arnold_bennett","pos":"50% 22%"},
{"g":"business","text":"How do I begin? … Dear sir, you simply begin.","name":"Arnold Bennett","src":"How to Live on 24 Hours a Day","date":"1908","img":"arnold_bennett","pos":"50% 22%"},
{"g":"business","text":"You can turn over a new leaf every hour if you choose.","name":"Arnold Bennett","src":"How to Live on 24 Hours a Day","date":"1908","img":"arnold_bennett","pos":"50% 22%"},
{"g":"business","text":"Almost anyone can think up an idea. The thing that counts is developing it into a practical product.","name":"Henry Ford","src":"My Life and Work (with Samuel Crowther)","date":"1922","img":"ford","pos":"50% 20%"},
{"g":"business","text":"Engage in one kind of business only, and stick to it faithfully until you succeed, or until your experience shows that you should abandon it.","name":"P. T. Barnum","src":"The Art of Money Getting","date":"1880","img":"barnum","pos":"50% 18%"},
{"g":"business","text":"I heard subjects discussed which I had never known before, and I made it a rule when I heard these to learn something about them at once.","name":"Andrew Carnegie","src":"Autobiography of Andrew Carnegie","date":"1920","img":"carnegie","pos":"50% 18%"},
{"g":"business","text":"A rule which we adopted and adhered to has given greater returns than one would believe possible, namely: always give the other party the benefit of the doubt.","name":"Andrew Carnegie","src":"Autobiography of Andrew Carnegie","date":"1920","img":"carnegie","pos":"50% 18%"},
{"g":"business","text":"Achievement, of whatever kind, is the crown of effort, the diadem of thought.","name":"James Allen","src":"As a Man Thinketh","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"business","text":"In all human affairs there are efforts, and there are results, and the strength of the effort is the measure of the result.","name":"James Allen","src":"As a Man Thinketh","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"business","text":"Know the true value of time; snatch, seize, and enjoy every moment of it. No idleness, no laziness, no procrastination; never put off till tomorrow what you can do today.","name":"Lord Chesterfield","src":"Letters to His Son, letter of 26 Dec 1749","date":"26 Dec 1749","img":"gen_lord_chesterfield","pos":"50% 22%"},
{"g":"business","text":"Whatever is worth doing at all, is worth doing well; and nothing can be done well without attention.","name":"Lord Chesterfield","src":"Letters to His Son, letter of 9 Oct 1746","date":"9 Oct 1746","img":"gen_lord_chesterfield","pos":"50% 22%"},
{"g":"business","text":"I recommend to you to take care of the minutes; for hours will take care of themselves.","name":"Lord Chesterfield","src":"Letters to His Son, letter of 6 Nov 1747","date":"6 Nov 1747","img":"gen_lord_chesterfield","pos":"50% 22%"},
{"g":"business","text":"There is time enough for everything, in the course of the day, if you do but one thing at once; but there is not time enough in the year, if you will do two things at a time.","name":"Lord Chesterfield","src":"Letters to His Son, letter of 14 Apr 1747","date":"14 Apr 1747","img":"gen_lord_chesterfield","pos":"50% 22%"},
{"g":"business","text":"Dispatch is the soul of business; and nothing contributes more to dispatch than method.","name":"Lord Chesterfield","src":"Letters to His Son, letter of 5 Feb 1750","date":"5 Feb 1750","img":"gen_lord_chesterfield","pos":"50% 22%"},
{"g":"business","text":"There is plenty of work in the world, and I'm not afraid of it; so you'll soon hear good news of me.","name":"Louisa May Alcott","src":"Work: A Story of Experience, ch. 1 (Christie)","date":"1873","img":"alcott","pos":"50% 15%"},
{"g":"business","text":"The man who is economical, is laying up for himself the permanent power of being useful and generous.","name":"Lydia Maria Child","src":"The American Frugal Housewife (first pub. 1829 as The Frugal Housewife)","date":"1832 ed.","img":"gen_lydia_maria_child","pos":"50% 22%"},
{"g":"business","text":"Success is simply doing anything to the utmost of one's ability—making as much of one's position as it is possible to make.","name":"Edward Bok","src":"Successward: A Young Man's Book for Young Men","date":"1895","img":"gen_edward_bok","pos":"50% 22%"},
{"g":"business","text":"The truest success is that which is earned slowly, but which surely strengthens itself.","name":"Edward Bok","src":"Successward: A Young Man's Book for Young Men","date":"1895","img":"gen_edward_bok","pos":"50% 22%"},
{"g":"business","text":"A young man makes of a position exactly what he chooses, either a millstone around his neck or a stepping-stone to larger success.","name":"Edward Bok","src":"Successward: A Young Man's Book for Young Men","date":"1895","img":"gen_edward_bok","pos":"50% 22%"},
{"g":"business","text":"The student who lays the bricks must learn to lay each brick as well as it is possible for him to lay it, and then do still better work on the morrow.","name":"Booker T. Washington","src":"Character Building (Sunday evening talks at Tuskegee)","date":"1902","img":"washington","pos":"50% 15%"},
{"g":"business","text":"Patience accomplishes its object, while hurry speeds to its ruin: with my own eyes I saw in the desert that the deliberate man outstripped him that had hurried on.","name":"Saadi","src":"The Gulistan (tr. James Ross, 1823)","date":"1258","img":"saadi","pos":"50% 22%"},
{"g":"business","text":"Whoever acquires knowledge and does not practise it resembles him who ploughs his land and leaves it unsown.","name":"Saadi","src":"The Gulistan (tr. James Ross, 1823)","date":"1258","img":"saadi","pos":"50% 22%"},
{"g":"business","text":"Were a professional man to lose his fortune, he need not feel regret, for his knowledge is of itself a mine of wealth.","name":"Saadi","src":"The Gulistan (tr. James Ross, 1823)","date":"1258","img":"saadi","pos":"50% 22%"},
{"g":"business","text":"Get the facts. Recognize the equities of all concerned. Realize the necessity of doing a better job every day. Keep an open mind and work hard. The last is most important at all. There is no shortcut.","name":"Alfred P. Sloan","src":"The Magazine of Wall Street, vol. 41, p. 480","date":"1927","img":"gen_alfred_p_sloan","pos":"50% 22%"},
{"g":"business","text":"It is astonishing what you can do when you have a lot of energy, ambition and plenty of ignorance.","name":"Alfred P. Sloan","src":"Adventures of a White-Collar Man (with Boyden Sparkes), p. 18","date":"1941","img":"gen_alfred_p_sloan","pos":"50% 22%"},
{"g":"business","text":"Learning is not compulsory; it's voluntary. Improvement is not compulsory; it's voluntary. But to survive, we must learn.","name":"W. Edwards Deming","src":"As quoted in Deming: The Way We Knew Him","date":"by 1993","img":"w_edwards_deming","pos":"50% 22%"},
{"g":"business","text":"Live daringly, boldly, fearlessly. Taste the relish to be found in competition — in having to put forth the best within you.","name":"Henry J. Kaiser","src":"\"How to Capture Life's Greatest Values\", Reader's Digest, vol. 56, p. 18","date":"Jan 1950","img":"gen_henry_j_kaiser","pos":"50% 22%"},
{"g":"business","text":"Problems are only opportunities in work clothes.","name":"Henry J. Kaiser","src":"As quoted in the Congressional Record","date":"24 Aug 1967","img":"gen_henry_j_kaiser","pos":"50% 22%"},
{"g":"business","text":"You fix what can be fixed, and what can't be fixed you endure.","name":"Charlie Munger","src":"Daily Journal annual meeting","date":"24 Feb 2021","img":"gen_charlie_munger","pos":"50% 22%"},
{"g":"business","text":"Act on your temporary conviction as if it was a real conviction; and when you realize that you are wrong, correct course very quickly.","name":"Andrew Grove","src":"Harvard Business School Press conference, as quoted in Martin & Christensen, Rotman on Design (2013), p. 213","date":"2002","img":"gen_andrew_grove","pos":"50% 22%"},
{"g":"business","text":"Your career is your business, and you are its CEO.","name":"Andrew Grove","src":"As quoted in G. M. Dupuy and D. H. Dupuy, Career Preparation (2004), p. 4","date":"1999","img":"gen_andrew_grove","pos":"50% 22%"},
{"g":"business","text":"Many people dream of success. To me success can only be achieved through repeated failure and introspection.","name":"Soichiro Honda","src":"As quoted in Paul Callister, What Creates Jobs?","date":"1989","img":"gen_soichiro_honda","pos":"50% 22%"},
{"g":"business","text":"It is less important, I believe, where you start. It is more important how and what you learn. If the quality of the learning is high, the development gradient is steep, and, given time, you can find yourself in a previously unattainable place.","name":"N. R. Narayana Murthy","src":"\"Life lessons from Narayana Murthy\" (commencement speech), Rediff.com","date":"28 May 2007","img":"gen_n_r_narayana_murthy","pos":"50% 22%"},
{"g":"business","text":"When I think about my career, my successes are built on learning from failures.","name":"Satya Nadella","src":"As quoted by BGR India","date":"29 Dec 2015","img":"gen_satya_nadella","pos":"50% 22%"},
{"g":"business","text":"When's the best time to solve a problem? … It's the minute you know you have one, because problems rarely get smaller.","name":"Mary Barra","src":"As quoted by Yahoo Finance","date":"17 Oct 2024","img":"gen_mary_barra","pos":"50% 22%"},
{"g":"business","text":"If you absolutely can't tolerate critics, then don't do anything new or interesting.","name":"Jeff Bezos","src":"Remarks at the Code Conference, as reported by Boing Boing","date":"Jun 2016","img":"gen_jeff_bezos","pos":"50% 22%"},
{"g":"business","text":"Someone's sitting in the shade today because someone planted a tree a long time ago.","name":"Warren Buffett","src":"Statement of January 1991, as quoted in Andrew Kilpatrick, Of Permanent Value","date":"Jan 1991","img":"buffett","pos":"55% 12%"},
{"g":"business","text":"Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.","name":"Steve Jobs","src":"As quoted in Jeffrey S. Young, Steve Jobs: The Journey Is the Reward","date":"1988","img":"jobs","pos":"40% 18%"},
{"g":"business","text":"The whole fun of living is trying to make something better.","name":"Charles Kettering","src":"As quoted in W. Clements Zinck, Dynamic Work Simplification, p. 12","date":"1971","img":"gen_charles_kettering","pos":"50% 22%"},
{"g":"business","text":"A problem thoroughly understood is always fairly simple. Found your opinions on facts, not prejudices.","name":"Charles Kettering","src":"As quoted in W. Clements Zinck, Dynamic Work Simplification, p. 122","date":"1971","img":"gen_charles_kettering","pos":"50% 22%"},
{"g":"business","text":"You can never know what your possibilities are till you have put yourself to the test. There are many, many women who long to do something, and could succeed, if they would only banish their doubts, and plunge in.","name":"Mary Proctor","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"gen_mary_proctor","pos":"50% 22%"},
{"g":"business","text":"The most essential factor is persistence—the determination never to allow your energy or enthusiasm to be dampened by the discouragement that must inevitably come.","name":"James Whitcomb Riley","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"gen_james_whitcomb_riley","pos":"50% 22%"},
{"g":"business","text":"There is no shortcut to permanent, self-satisfying success in literature, or anything else.","name":"James Whitcomb Riley","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"gen_james_whitcomb_riley","pos":"50% 22%"},
{"g":"business","text":"Nearly all depends upon strength of character, determination, and the will to work. If a girl has these, she will rise as high, in the end, anywhere.","name":"Lillian Nordica","src":"Interview in O. S. Marden, How They Succeeded","date":"1901","img":"gen_lillian_nordica","pos":"50% 22%"},
{"g":"business","text":"You are to become a creator, not a competitor; you are going to get what you want, but in such a way that when you get it every other man will have more than he has now.","name":"Wallace D. Wattles","src":"The Science of Getting Rich","date":"1910","img":"gen_wallace_d_wattles","pos":"50% 22%"},
{"g":"business","text":"I am not concerned that I have no place, I am concerned how I may fit myself for one. I am not concerned that I am not known, I seek to be worthy to be known.","name":"Confucius","src":"Analects IV.14 (tr. James Legge, 1861)","date":"c. 5th century BC","img":"confucius","pos":"50% 30%"},
{"g":"business","text":"Do not be desirous to have things done quickly; do not look at small advantages. Desire to have things done quickly prevents their being done thoroughly. Looking at small advantages prevents great affairs from being accomplished.","name":"Confucius","src":"Analects XIII.17 (tr. James Legge, 1861)","date":"c. 5th century BC","img":"confucius","pos":"50% 30%"},
{"g":"business","text":"To have faults and not to reform them—this, indeed, should be pronounced having faults.","name":"Confucius","src":"Analects XV.29 (tr. James Legge, 1861)","date":"c. 5th century BC","img":"confucius","pos":"50% 30%"},
{"g":"business","text":"If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.","name":"Henry David Thoreau","src":"Walden, \"Conclusion\"","date":"1854","img":"thoreau","pos":"50% 20%"},
{"g":"business","text":"Whenever you promise … to do a piece of work for a man, there is a contract binding you to do an honest day's labour.","name":"Booker T. Washington","src":"Character Building (Sunday evening talks at Tuskegee)","date":"1902","img":"washington","pos":"50% 15%"},
{"g":"kind","text":"Everyone must have felt that a cheerful friend is like a sunny day, which sheds its brightness on all around; and most of us can, as we choose, make of this world either a palace or a prison.","name":"John Lubbock","src":"The Pleasures of Life, ch. 1 (The Duty of Happiness)","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"kind","text":"Rest belongs to the work as the eyelids to the eyes.","name":"Rabindranath Tagore","src":"Stray Birds, 24","date":"1916","img":"rabindranath_tagore","pos":"50% 22%"},
{"g":"kind","text":"The storm of the last night has crowned this morning with golden peace.","name":"Rabindranath Tagore","src":"Stray Birds, 294","date":"1916","img":"rabindranath_tagore","pos":"50% 22%"},
{"g":"kind","text":"Do not say, \"It is morning,\" and dismiss it with a name of yesterday. See it for the first time as a newborn child that has no name.","name":"Rabindranath Tagore","src":"Stray Birds, 235","date":"1916","img":"rabindranath_tagore","pos":"50% 22%"},
{"g":"kind","text":"Go joyously and with a light heart as far as you can, and if you cannot always go joyously, go always courageously and confidently.","name":"Francis de Sales","src":"Maxims and Counsels of St. Francis de Sales (tr. Ella McMahon)","date":"early 17th century","img":"gen_francis_de_sales","pos":"50% 22%"},
{"g":"kind","text":"It matters little how one begins, provided he be resolved to go on well, and end well.","name":"Francis de Sales","src":"Maxims and Counsels of St. Francis de Sales (tr. Ella McMahon)","date":"early 17th century","img":"gen_francis_de_sales","pos":"50% 22%"},
{"g":"kind","text":"Take up your little burdens again, for though they seem heavy sometimes, they are good for us, and lighten as we learn to carry them.","name":"Louisa May Alcott","src":"Little Women, ch. 11 (Marmee)","date":"1868","img":"alcott","pos":"50% 15%"},
{"g":"kind","text":"Have regular hours for work and play, make each day both useful and pleasant, and prove that you understand the worth of time by employing it well.","name":"Louisa May Alcott","src":"Little Women, ch. 11 (Marmee)","date":"1868","img":"alcott","pos":"50% 15%"},
{"g":"kind","text":"I believe the nicest and sweetest days are not those on which anything very splendid or wonderful or exciting happens but just those that bring simple little pleasures, following one another softly, like pearls slipping off a string.","name":"L. M. Montgomery","src":"Anne of Avonlea, ch. 19 (Anne)","date":"1909","img":"montgomery","pos":"50% 30%"},
{"g":"kind","text":"One by one the sands are flowing, One by one the moments fall; Some are coming, some are going; Do not strive to grasp them all.","name":"Adelaide Anne Procter","src":"One by One, Legends and Lyrics","date":"1858","img":"gen_adelaide_anne_procter","pos":"50% 22%"},
{"g":"kind","text":"Every day is a fresh beginning; … Take heart with the day, and begin again.","name":"Susan Coolidge","src":"New Every Morning, A Few More Verses","date":"1889","img":"gen_susan_coolidge","pos":"50% 22%"},
{"g":"kind","text":"By gentleness, the hardest heart may be softened.","name":"Zhuangzi","src":"Chuang Tzu, ch. 11 (Lao Tzu speaking) (tr. Herbert A. Giles)","date":"c. 4th century BC","img":"gen_zhuangzi","pos":"50% 22%"},
{"g":"kind","text":"Just buckle in with a bit of a grin, Just take off your coat and go to it; Just start in to sing as you tackle the thing That \"cannot be done,\" and you'll do it.","name":"Edgar Guest","src":"It Couldn't Be Done, The Path to Home","date":"1919","img":"gen_edgar_guest","pos":"50% 22%"},
{"g":"kind","text":"The only reward of virtue is virtue; the only way to have a friend is to be one.","name":"Ralph Waldo Emerson","src":"Friendship, Essays: First Series","date":"1841","img":"emerson","pos":"50% 22%"},
{"g":"kind","text":"Come forth into the light of things, Let Nature be your teacher.","name":"William Wordsworth","src":"The Tables Turned, Lyrical Ballads","date":"1798","img":"william_wordsworth","pos":"50% 22%"},
{"g":"kind","text":"Who is wise? He who learns from all men … Who is rich? He who rejoices in his portion.","name":"Ben Zoma","src":"Pirke Avot 4:1 (tr. Joseph I. Gorfinkle)","date":"c. 2nd century AD","img":"gen_ben_zoma","pos":"50% 22%"},
{"g":"kind","text":"Say little and do much; and receive all men with a cheerful countenance.","name":"Shammai","src":"Pirke Avot 1:15 (tr. Joseph I. Gorfinkle)","date":"c. 1st century BC","img":"gen_shammai","pos":"50% 22%"},
{"g":"kind","text":"As a solid rock is not shaken by the wind, wise people falter not amidst blame and praise.","name":"The Buddha","src":"Dhammapada, v. 81 (tr. F. Max Müller)","date":"c. 3rd century BC","img":"buddha","pos":"50% 22%"},
{"g":"kind","text":"He who knows other men is discerning; he who knows himself is intelligent. He who overcomes others is strong; he who overcomes himself is mighty. He who is satisfied with his lot is rich.","name":"Laozi","src":"Tao Te Ching, ch. 33 (tr. James Legge)","date":"c. 4th century BC","img":"laozi","pos":"50% 30%"},
{"g":"kind","text":"There is no physician like cheerful thought for dissipating the ills of the body; there is no comforter to compare with goodwill for dispersing the shadows of grief and sorrow.","name":"James Allen","src":"As a Man Thinketh","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"kind","text":"The greatest achievement was at first and for a time a dream. The oak sleeps in the acorn; the bird waits in the egg … Dreams are the seedlings of realities.","name":"James Allen","src":"As a Man Thinketh","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"kind","text":"After you have been kind, after Love has stolen forth into the world and done its beautiful work, go back into the shade again and say nothing about it.","name":"Henry Drummond","src":"The Greatest Thing in the World","date":"1890","img":"henry_drummond","pos":"50% 22%"},
{"g":"kind","text":"Reflect upon your present blessings—of which every man has many—not on your past misfortunes, of which all men have some.","name":"Charles Dickens","src":"A Christmas Dinner, Sketches by Boz","date":"1835","img":"dickens","pos":"50% 20%"},
{"g":"kind","text":"To be honest, to be kind—to earn a little and to spend a little less, to make upon the whole a family happier for his presence … to keep a few friends … to keep friends with himself—here is a task for all that a man has of fortitude and delicacy.","name":"Robert Louis Stevenson","src":"A Christmas Sermon, Across the Plains","date":"1888","img":"stevenson","pos":"50% 25%"},
{"g":"kind","text":"Think only of the past as its remembrance gives you pleasure.","name":"Jane Austen","src":"Pride and Prejudice, ch. 58 (Elizabeth)","date":"1813","img":"jane_austen","pos":"50% 22%"},
{"g":"kind","text":"And this our life, exempt from public haunt, Finds tongues in trees, books in the running brooks, Sermons in stones, and good in everything.","name":"William Shakespeare","src":"As You Like It, Act II, Scene 1 (Duke Senior)","date":"c. 1599","img":"william_shakespeare","pos":"50% 22%"},
{"g":"kind","text":"This above all: to thine own self be true; And it must follow, as the night the day, Thou canst not then be false to any man.","name":"William Shakespeare","src":"Hamlet, Act I, Scene 3 (Polonius)","date":"c. 1600","img":"william_shakespeare","pos":"50% 22%"},
{"g":"kind","text":"One ship drives east and another drives west, With the self-same winds that blow, 'Tis the set of the sails And not the gales That tell them the way to go.","name":"Ella Wheeler Wilcox","src":"The Winds of Fate, Poems of Optimism","date":"1916","img":"ella_wheeler_wilcox","pos":"50% 22%"},
{"g":"kind","text":"At first people refuse to believe that a strange new thing can be done, then they begin to hope it can be done, then they see it can be done—then it is done and all the world wonders why it was not done centuries ago.","name":"Frances Hodgson Burnett","src":"The Secret Garden, ch. 27","date":"1911","img":"frances_hodgson_burnett","pos":"50% 22%"},
{"g":"kind","text":"Life appears to me too short to be spent in nursing animosity or registering wrongs.","name":"Charlotte Brontë","src":"Jane Eyre, ch. 6 (Helen Burns)","date":"1847","img":"bronte","pos":"50% 30%"},
{"g":"kind","text":"Each morning sees some task begin, Each evening sees it close; Something attempted, something done, Has earned a night's repose.","name":"Henry Wadsworth Longfellow","src":"The Village Blacksmith","date":"1841","img":"henry_wadsworth_longfellow","pos":"50% 22%"},
{"g":"kind","text":"I find the great thing in this world is not so much where we stand, as in what direction we are moving … we must sail, and not drift, nor lie at anchor.","name":"Oliver Wendell Holmes Sr.","src":"The Autocrat of the Breakfast-Table, ch. 4","date":"1858","img":"gen_oliver_wendell_holmes_sr","pos":"50% 22%"},
{"g":"kind","text":"It isn't the great big pleasures that count the most; it's making a great deal out of the little ones—I've discovered the true secret of happiness, Daddy, and that is to live in the now.","name":"Jean Webster","src":"Daddy-Long-Legs (Judy's letter)","date":"1912","img":"gen_jean_webster","pos":"50% 22%"},
{"g":"kind","text":"Oh, the comfort—the inexpressible comfort of feeling safe with a person—having neither to weigh thoughts nor measure words … certain that a faithful hand will take and sift them, keep what is worth keeping, and then with the breath of kindness blow the rest away.","name":"Dinah Craik","src":"A Life for a Life, Vol. II, ch. 3 (Theodora)","date":"1859","img":"gen_dinah_craik","pos":"50% 22%"},
{"g":"kind","text":"How happy is he born and taught That serveth not another's will; Whose armour is his honest thought And simple truth his utmost skill!","name":"Henry Wotton","src":"The Character of a Happy Life","date":"c. 1614","img":"gen_henry_wotton","pos":"50% 22%"},
{"g":"kind","text":"If you do not attain happiness, always remember that you are on the right road, and try not to leave it. Above all, avoid falsehood, every kind of falsehood, especially falseness to yourself.","name":"Fyodor Dostoevsky","src":"The Brothers Karamazov, Book II, ch. 4 (tr. Constance Garnett) (Father Zossima)","date":"1880","img":"fyodor_dostoevsky","pos":"50% 22%"},
{"g":"kind","text":"Let right deeds be Thy motive, not the fruit which comes from them.","name":"Vyasa","src":"Bhagavad Gita, ch. 2, Krishna speaking (traditionally attributed to Vyasa; tr. Edwin Arnold, The Song Celestial)","date":"c. 2nd century BC","img":"gen_vyasa","pos":"50% 22%"},
{"g":"kind","text":"I long to accomplish a great and noble task; but it is my chief duty and joy to accomplish humble tasks as though they were great and noble.","name":"Helen Keller","src":"Optimism (essay)","date":"1903","img":"keller","pos":"50% 20%"},
{"g":"kind","text":"The world is sown with good; but unless I turn my glad thoughts into practical living and till my own field, I cannot reap a kernel of the good.","name":"Helen Keller","src":"Optimism (essay)","date":"1903","img":"keller","pos":"50% 20%"},
{"g":"kind","text":"Kindred spirits are not so scarce as I used to think. It's splendid to find out there are so many of them in the world.","name":"L. M. Montgomery","src":"Anne of Green Gables, ch. 19 (Anne)","date":"1908","img":"montgomery","pos":"50% 30%"},
{"g":"kind","text":"\"Whatever comes,\" she said, \"cannot alter one thing. If I am a princess in rags and tatters, I can be a princess inside.\"","name":"Frances Hodgson Burnett","src":"A Little Princess, ch. 11 (Sara)","date":"1905","img":"frances_hodgson_burnett","pos":"50% 22%"},
{"g":"kind","text":"We never know how high we are Till we are called to rise; And then, if we are true to plan, Our statures touch the skies.","name":"Emily Dickinson","src":"Aspiration, Poems: Third Series","date":"1896","img":"emily_dickinson","pos":"50% 22%"},
{"g":"kind","text":"Not knowing when the dawn will come I open every door.","name":"Emily Dickinson","src":"Dawn, Poems: Third Series","date":"1896","img":"emily_dickinson","pos":"50% 22%"},
{"g":"kind","text":"Live … in the house of kindliness, and men shall come and give gifts of themselves.","name":"Ptahhotep","src":"The Instruction of Ptah-Hotep, 6 (tr. Battiscombe G. Gunn)","date":"c. 2400 BC (traditional)","img":"gen_ptahhotep","pos":"50% 22%"},
{"g":"kind","text":"In the sweetness of friendship let there be laughter, and sharing of pleasures. For in the dew of little things the heart finds its morning and is refreshed.","name":"Kahlil Gibran","src":"The Prophet, On Friendship","date":"1923","img":"kahlil_gibran","pos":"50% 22%"},
{"g":"kind","text":"A happy man or woman is a better thing to find than a five-pound note. He or she is a radiating focus of goodwill; and their entrance into a room is as though another candle had been lighted.","name":"Robert Louis Stevenson","src":"An Apology for Idlers, Virginibus Puerisque","date":"1877","img":"stevenson","pos":"50% 25%"},
{"g":"kind","text":"When the worries and cares of the day fret you, and begin to wear upon you, and you chafe under the friction—be calm. Stop, rest for a moment, and let calmness and peace assert themselves.","name":"William George Jordan","src":"The Majesty of Calmness","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"kind","text":"The fury of storm and of wind agitate only the surface of the sea; they can penetrate only two or three hundred feet—below that is the calm, unruffled deep.","name":"William George Jordan","src":"The Majesty of Calmness","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"kind","text":"A man is simple when his chief care is the wish to be what he ought to be, that is, honestly and naturally human.","name":"Charles Wagner","src":"The Simple Life (tr. Mary Louise Hendee)","date":"1895","img":"gen_charles_wagner","pos":"50% 22%"},
{"g":"kind","text":"The world is a looking-glass, and gives back to every man the reflection of his own face. Frown at it, and it will in turn look sourly upon you; laugh at it and with it, and it is a jolly kind companion.","name":"William Makepeace Thackeray","src":"Vanity Fair, ch. 2","date":"1847","img":"gen_william_makepeace_thackeray","pos":"50% 22%"},
{"g":"kind","text":"Our consciousness is our home, our refuge from the caprice of fate, our centre of happiness and strength.","name":"Maurice Maeterlinck","src":"Wisdom and Destiny (tr. Alfred Sutro)","date":"1898","img":"gen_maurice_maeterlinck","pos":"50% 22%"},
{"g":"kind","text":"We know nothing of tomorrow; our business is to be good and happy today.","name":"Sydney Smith","src":"Lady Holland's Memoir of the Rev. Sydney Smith, Vol. I, ch. 12","date":"publ. 1855","img":"gen_sydney_smith","pos":"50% 22%"},
{"g":"kind","text":"If we had no winter, the spring would not be so pleasant: if we did not sometimes taste of adversity, prosperity would not be so welcome.","name":"Anne Bradstreet","src":"Meditations Divine and Moral, 14","date":"1664","img":"gen_anne_bradstreet","pos":"50% 22%"},
{"g":"kind","text":"O, do not pray for easy lives. Pray to be stronger men! Do not pray for tasks equal to your powers. Pray for powers equal to your tasks! Then the doing of your work shall be no miracle. But you shall be a miracle.","name":"Phillips Brooks","src":"Going up to Jerusalem, Twenty Sermons","date":"1886","img":"gen_phillips_brooks","pos":"50% 22%"},
{"g":"kind","text":"Look up and not down, look forward and not back, look out and not in, and lend a hand!","name":"Edward Everett Hale","src":"Ten Times One is Ten","date":"1870","img":"gen_edward_everett_hale","pos":"50% 22%"},
{"g":"kind","text":"I endeavor to take things as they come with cheerfulness, and when I cannot get a dinner to suit my taste, I endeavor to get a taste to suit my dinner.","name":"Washington Irving","src":"Letter to William Irving Jr.","date":"1804-09-20","img":"gen_washington_irving","pos":"50% 22%"},
{"g":"kind","text":"Greatness lies not in being strong, but in the right using of strength … He is greatest whose strength carries up the most hearts by the attraction of his own.","name":"Henry Ward Beecher","src":"Life Thoughts (ed. Edna Dean Proctor)","date":"1858","img":"gen_henry_ward_beecher","pos":"50% 22%"},
{"g":"kind","text":"The first hour of the morning is the rudder of the day.","name":"Henry Ward Beecher","src":"Life Thoughts (ed. Edna Dean Proctor)","date":"1858","img":"gen_henry_ward_beecher","pos":"50% 22%"},
{"g":"kind","text":"It is by loving, and not by being loved, that one can come nearest the soul of another.","name":"George MacDonald","src":"Phantastes (Anodos)","date":"1858","img":"gen_george_macdonald","pos":"50% 22%"},
{"g":"kind","text":"Mirth is like a flash of lightning, that breaks through a gloom of clouds, and glitters for a moment; cheerfulness keeps up a kind of daylight in the mind, and fills it with a steady and perpetual serenity.","name":"Joseph Addison","src":"The Spectator, No. 381","date":"1712-05-17","img":"gen_joseph_addison","pos":"50% 22%"},
{"g":"kind","text":"He drew a circle that shut me out— Heretic, rebel, a thing to flout. But Love and I had the wit to win: We drew a circle that took him in.","name":"Edwin Markham","src":"Outwitted, The Shoes of Happiness and Other Poems","date":"1913","img":"gen_edwin_markham","pos":"50% 22%"},
{"g":"kind","text":"There is a destiny that makes us brothers: None goes his way alone: All that we send into the lives of others Comes back into our own.","name":"Edwin Markham","src":"A Creed (To Mr. David Lubin), Lincoln and Other Poems","date":"1901","img":"gen_edwin_markham","pos":"50% 22%"},
{"g":"kind","text":"The soul grows into lovely habits as easily as into ugly ones … Bear figs for a season or two, and the world outside the orchard is very unwilling you should bear thistles.","name":"Kate Douglas Wiggin","src":"Rebecca of Sunnybrook Farm","date":"1903","img":"gen_kate_douglas_wiggin","pos":"50% 22%"},
{"g":"history","text":"Just as iron rusts unless it is used, and water putrefies or, in cold, turns to ice, so our intellect spoils unless it is kept in use.","name":"Leonardo da Vinci","src":"Notebooks, Philosophical Maxims (tr. Jean Paul Richter, 1888)","date":"c. 1490–1519","img":"gen_leonardo_da_vinci","pos":"50% 22%"},
{"g":"history","text":"Patience serves us against insults precisely as clothes do against the cold.","name":"Leonardo da Vinci","src":"Notebooks, §1195 \"A simile for patience\" (tr. Jean Paul Richter, 1888)","date":"c. 1490–1519","img":"gen_leonardo_da_vinci","pos":"50% 22%"},
{"g":"history","text":"Wisdom is the daughter of experience.","name":"Leonardo da Vinci","src":"Notebooks, §1150 (tr. Jean Paul Richter, 1888)","date":"c. 1490–1519","img":"gen_leonardo_da_vinci","pos":"50% 22%"},
{"g":"history","text":"The acquisition of any knowledge is always of use to the intellect, because it may thus drive out useless things and retain the good.","name":"Leonardo da Vinci","src":"Notebooks, §1172 (tr. Jean Paul Richter, 1888)","date":"c. 1490–1519","img":"gen_leonardo_da_vinci","pos":"50% 22%"},
{"g":"history","text":"If you have great talents, industry will improve them: if you have but moderate abilities, industry will supply their deficiency. Nothing is denied to well-directed labour: nothing is to be obtained without it.","name":"Joshua Reynolds","src":"Discourse II to the students of the Royal Academy","date":"1769-12-11","img":"gen_joshua_reynolds","pos":"50% 22%"},
{"g":"history","text":"I will grapple with Fate; it shall not quite bear me down. O, it is lovely to live life a thousand times!","name":"Ludwig van Beethoven","src":"Letter to Franz Wegeler, in Beethoven, the Man and the Artist, as Revealed in His Own Words (ed. Kerst, tr. H. E. Krehbiel, 1905)","date":"1801-11-16","img":"gen_ludwig_van_beethoven","pos":"50% 22%"},
{"g":"history","text":"I would go and look at a stone-cutter hammering away at his rock perhaps a hundred times without as much as a crack showing in it. Yet at the hundred and first blow it would split in two, and I knew it was not that blow that did it, but all that had gone before together.","name":"Jacob Riis","src":"The Making of an American","date":"1901","img":"gen_jacob_riis","pos":"50% 22%"},
{"g":"history","text":"There were all kinds of things of which I was afraid at first … but by acting as if I was not afraid I gradually ceased to be afraid. Most men can have the same experience if they choose.","name":"Theodore Roosevelt","src":"An Autobiography, ch. II","date":"1913","img":"roosevelt","pos":"50% 22%"},
{"g":"history","text":"Resolution. Resolve to perform what you ought; perform without fail what you resolve.","name":"Benjamin Franklin","src":"Autobiography, ch. IX (the thirteen virtues)","date":"c. 1784","img":"franklin","pos":"50% 25%"},
{"g":"history","text":"Industry. Lose no time; be always employed in something useful; cut off all unnecessary actions.","name":"Benjamin Franklin","src":"Autobiography, ch. IX (the thirteen virtues)","date":"c. 1784","img":"franklin","pos":"50% 25%"},
{"g":"history","text":"I want you to see, as I think you will see, that having a hard time, running up against difficulties here and there, helps to make an individual strong, helps to make him powerful.","name":"Booker T. Washington","src":"Character Building (Sunday evening talks at Tuskegee)","date":"1902","img":"washington","pos":"50% 15%"},
{"g":"history","text":"My business is to teach my aspirations to conform themselves to fact, not to try and make facts harmonise with my aspirations.","name":"Thomas Henry Huxley","src":"Letter to Charles Kingsley","date":"1860-09-23","img":"gen_thomas_henry_huxley","pos":"50% 22%"},
{"g":"history","text":"It is useless … to work against the current; we should see if there is not a current we can work with.","name":"Fridtjof Nansen","src":"Farthest North, vol. I, introduction (from his 1890 plan for the Fram expedition)","date":"1890 (publ. 1897)","img":"gen_fridtjof_nansen","pos":"50% 22%"},
{"g":"history","text":"There is always … more or less criticism of any work, for it is always so much easier to say how a thing ought to be done than it is to do it.","name":"Clara Barton","src":"The Red Cross in Peace and War","date":"1898","img":"gen_clara_barton","pos":"50% 22%"},
{"g":"history","text":"Ultimately what we really are matters more than what other people think of us.","name":"Jawaharlal Nehru","src":"Speech in Parliament, Parliamentary Debates","date":"1951","img":"gen_jawaharlal_nehru","pos":"50% 22%"},
{"g":"history","text":"God grant me the courage not to give up what I think is right even though I think it is hopeless.","name":"Chester W. Nimitz","src":"The Armed Forces Prayer Book","date":"1951","img":"gen_chester_w_nimitz","pos":"50% 22%"},
{"g":"history","text":"To improve is to change, so to be perfect is to have changed often.","name":"Winston Churchill","src":"House of Commons debate with Philip Snowden","date":"1925-06-23","img":"churchill","pos":"50% 15%"},
{"g":"history","text":"Courage is rightly esteemed the first of human qualities, because, as has been said, it is the quality which guarantees all others.","name":"Winston Churchill","src":"\"Unlucky Alfonso\", Collier's","date":"1931-06-27","img":"churchill","pos":"50% 15%"},
{"g":"history","text":"What counts is not necessarily the size of the dog in the fight — it's the size of the fight in the dog.","name":"Dwight D. Eisenhower","src":"Remarks at Republican National Committee Breakfast","date":"1958-01-31","img":"eisenhower","pos":"50% 18%"},
{"g":"history","text":"The first principle is that you must not fool yourself — and you are the easiest person to fool.","name":"Richard Feynman","src":"\"Cargo Cult Science\", Caltech commencement address","date":"1974","img":"gen_richard_feynman","pos":"50% 22%"},
{"g":"history","text":"The secret is comprised in three words — Work, Finish, Publish.","name":"Michael Faraday","src":"Advice to young William Crookes, as recorded by J. H. Gladstone in Michael Faraday (1874)","date":"before 1874","img":"gen_michael_faraday","pos":"50% 22%"},
{"g":"history","text":"It is better to offer no excuse than a bad one.","name":"George Washington","src":"Letter to his niece Harriet Washington","date":"1791-10-30","img":"gen_george_washington","pos":"50% 22%"},
{"g":"history","text":"Happiness lies not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.","name":"Franklin D. Roosevelt","src":"First Inaugural Address","date":"1933-03-04","img":"fdr","pos":"50% 18%"},
{"g":"history","text":"Preparation, I have often said, is rightly two-thirds of any venture.","name":"Amelia Earhart","src":"Last Flight, p. 51","date":"1937","img":"gen_amelia_earhart","pos":"50% 22%"},
{"g":"history","text":"The more one does and sees and feels, the more one is able to do, and the more genuine may be one's appreciation of fundamental things like home, and love, and understanding companionship.","name":"Amelia Earhart","src":"\"My Husband\", Redbook magazine","date":"1933-09","img":"gen_amelia_earhart","pos":"50% 22%"},
{"g":"history","text":"Books permit us to voyage through time, to tap the wisdom of our ancestors.","name":"Carl Sagan","src":"Cosmos, ch. 11, p. 282","date":"1980","img":"gen_carl_sagan","pos":"50% 22%"},
{"g":"history","text":"There are many hypotheses in science that are wrong. That's perfectly all right; it's the aperture to finding out what's right.","name":"Carl Sagan","src":"Cosmos: A Personal Voyage, episode 4 \"Heaven and Hell\"","date":"1980","img":"gen_carl_sagan","pos":"50% 22%"},
{"g":"history","text":"I never won anything without hard labor and the exercise of my best judgment and careful planning and working long in advance.","name":"Theodore Roosevelt","src":"An Autobiography, ch. II","date":"1913","img":"roosevelt","pos":"50% 22%"},
{"g":"history","text":"Life is the great teacher, and she leads us step by step. It is not the fault of the human teacher that his pupil must learn to climb by climbing.","name":"Ida M. Tarbell","src":"All in the Day's Work: An Autobiography","date":"1939","img":"gen_ida_m_tarbell","pos":"50% 22%"},
{"g":"history","text":"To be happy, I must go on with fresh attempts, fresh adventuring.","name":"Ida M. Tarbell","src":"All in the Day's Work: An Autobiography","date":"1939","img":"gen_ida_m_tarbell","pos":"50% 22%"},
{"g":"history","text":"You must make up your mind to steady and earnest work. You must be content to get on slowly if you only get on thoroughly.","name":"Maria Mitchell","src":"Notes for her students, in Maria Mitchell: Life, Letters, and Journals (1896)","date":"1866","img":"gen_maria_mitchell","pos":"50% 22%"},
{"g":"history","text":"Always bear in mind that your own resolution to succeed is more important than any other one thing.","name":"Abraham Lincoln","src":"Letter to Isham Reavis","date":"1855-11-05","img":"lincoln","pos":"50% 18%"},
{"g":"history","text":"I keep the subject constantly before me, and wait till the first dawnings open slowly, by little and little, into a full and clear light.","name":"Isaac Newton","src":"Reply when asked how he made his discoveries, as recorded in Biographia Britannica","date":"c. 1720 (publ. 1760)","img":"gen_isaac_newton","pos":"50% 22%"},
{"g":"history","text":"Take the time to figure out how to get there. The quickest way may not necessarily be the best. The journey matters as much as the goal.","name":"Kalpana Chawla","src":"Interview, India Today","date":"2003-02-17","img":"gen_kalpana_chawla","pos":"50% 22%"},
{"g":"history","text":"I like to work problems. If you do your best, nobody can ask you to do it over again.","name":"Katherine Johnson","src":"Interview with AARP","date":"2018","img":"gen_katherine_johnson","pos":"50% 22%"},
{"g":"history","text":"Until you dig a hole, you plant a tree, you water it and make it survive, you haven't done a thing. You are just talking.","name":"Wangari Maathai","src":"Speech at the Goldman Environmental Prize ceremony, San Francisco","date":"2006-04-24","img":"gen_wangari_maathai","pos":"50% 22%"},
{"g":"history","text":"Great things are not done by impulse, but by a series of small things brought together.","name":"Vincent van Gogh","src":"Letter to his brother Theo, The Hague (tr. Johanna van Gogh-Bonger)","date":"1882-10-22","img":"gen_vincent_van_gogh","pos":"50% 22%"},
{"g":"history","text":"No sudden inspiration can replace the long years of arduous labor necessary to train the eye to observe, the hand to reproduce.","name":"Auguste Rodin","src":"L'Art, conversations collected by Paul Gsell (tr. Mrs. Romilly Fedden (Katharine Fedden), 1912)","date":"1911","img":"gen_auguste_rodin","pos":"50% 22%"},
{"g":"history","text":"The gift is nothing without the will to make it worthwhile. The artist must have the patience of water that eats away the rock drop by drop.","name":"Auguste Rodin","src":"As recorded in Judith Cladel, Rodin: The Man and His Art (tr. S. K. Star)","date":"1917","img":"gen_auguste_rodin","pos":"50% 22%"},
{"g":"history","text":"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.","name":"Abigail Adams","src":"Letter to her son John Quincy Adams","date":"1780-05-08","img":"gen_abigail_adams","pos":"50% 22%"},
{"g":"history","text":"We have too many high sounding words, and too few actions that correspond with them.","name":"Abigail Adams","src":"Letter to John Adams","date":"1774","img":"gen_abigail_adams","pos":"50% 22%"},
{"g":"history","text":"In my opinion there's no such thing as a natural-born pilot. A pilot's ability depends on experience, and the more experience a pilot has, the better he is.","name":"Chuck Yeager","src":"\"Chuck Yeager: The Voice of Experience\", interview in HistoryNet","date":"1998","img":"gen_chuck_yeager","pos":"50% 22%"},
{"g":"history","text":"Though I never arrived at the perfection I had been so ambitious of obtaining, but fell far short of it, yet I was, by the endeavour, a better and a happier man than I otherwise should have been if I had not attempted it.","name":"Benjamin Franklin","src":"Autobiography, ch. IX","date":"c. 1784","img":"franklin","pos":"50% 25%"},
{"g":"history","text":"Grow into the habit of talking about the bright side of life.","name":"Booker T. Washington","src":"Character Building (Sunday evening talks at Tuskegee)","date":"1902","img":"washington","pos":"50% 15%"},
{"g":"history","text":"The more I have to do, the more I can. I believe I've never yet begun to call out my power of working.","name":"Elizabeth Blackwell","src":"Letter home from London, in Pioneer Work in Opening the Medical Profession to Women","date":"1849 (publ. 1895)","img":"gen_elizabeth_blackwell","pos":"50% 22%"},
{"g":"history","text":"I think one's feelings waste themselves in words; they ought all to be distilled into actions and into actions which bring results.","name":"Florence Nightingale","src":"Letter to a friend, quoted in E. T. Cook, The Life of Florence Nightingale (1913), p. 94","date":"c. 1850s","img":"gen_florence_nightingale","pos":"50% 22%"},
{"g":"history","text":"There cannot be mental atrophy in any person who continues to observe, to remember what he observes, and to seek answers for his unceasing hows and whys about things.","name":"Alexander Graham Bell","src":"Statement to a reporter, as recorded in the Bell Family Papers, Library of Congress","date":"1922","img":"gen_alexander_graham_bell","pos":"50% 22%"},
{"g":"ancient","text":"Life is long enough, if you know how to use it.","name":"Seneca","src":"Of the Shortness of Life 2 (tr. Aubrey Stewart, 1889)","date":"c. AD 49","img":"seneca","pos":"55% 30%"},
{"g":"ancient","text":"We do not receive a short life, but we make it a short one, and we are not poor in days, but wasteful of them.","name":"Seneca","src":"Of the Shortness of Life 1 (tr. Aubrey Stewart, 1889)","date":"c. AD 49","img":"seneca","pos":"55% 30%"},
{"g":"ancient","text":"Such as are thy habitual thoughts, such also will be the character of thy mind; for the soul is dyed by the thoughts.","name":"Marcus Aurelius","src":"Meditations V.16 (tr. George Long)","date":"c. AD 170–180","img":"aurelius","pos":"50% 20%"},
{"g":"ancient","text":"If it is not right, do not do it: if it is not true, do not say it.","name":"Marcus Aurelius","src":"Meditations XII.17 (tr. George Long)","date":"c. AD 170–180","img":"aurelius","pos":"50% 20%"},
{"g":"ancient","text":"Every habit and faculty is maintained and increased by the corresponding actions: the habit of walking by walking, the habit of running by running. If you would be a good reader, read; if a writer, write.","name":"Epictetus","src":"Discourses II.18 (tr. George Long)","date":"c. AD 108","img":"epictetus","pos":"50% 25%"},
{"g":"ancient","text":"This instant … think yourself worthy of living as a man grown up and a proficient. Let whatever appears to be the best be to you an inviolable law.","name":"Epictetus","src":"Enchiridion 51 (tr. T. W. Higginson)","date":"c. AD 125","img":"epictetus","pos":"50% 25%"},
{"g":"ancient","text":"Our duty is to grapple with every question, to persevere, to be resolved on making progress, and then to wait for that familiarity which converts all right action into a pleasure.","name":"Plutarch","src":"On the Student at Lectures (tr. T. G. Tucker)","date":"c. AD 100","img":"gen_plutarch","pos":"50% 22%"},
{"g":"ancient","text":"If you say your enemy is uneducated, increase your own love of learning and industry; if you call him coward, stir up the more your own spirit and manliness.","name":"Plutarch","src":"How a Man May Be Benefited by His Enemies, Moralia (tr. A. R. Shilleto)","date":"c. AD 100","img":"gen_plutarch","pos":"50% 22%"},
{"g":"ancient","text":"Perseverance is more prevailing than violence, and … many things which cannot be overcome when they are together, yield themselves up when taken little by little.","name":"Sertorius","src":"Reported by Plutarch, Life of Sertorius (Dryden, rev. A. H. Clough)","date":"c. 77 BC","img":"gen_sertorius","pos":"50% 22%"},
{"g":"ancient","text":"He was asked on one occasion what learning was the most necessary, and he replied, “To unlearn one’s bad habits.”","name":"Antisthenes","src":"As reported by Diogenes Laertius, Lives VI.7 (tr. C. D. Yonge)","date":"c. 400 BC","img":"gen_antisthenes","pos":"50% 22%"},
{"g":"ancient","text":"This is the reason why we have two ears and only one mouth, that we may hear more and speak less.","name":"Zeno of Citium","src":"As reported by Diogenes Laertius, Lives VII.23 (tr. C. D. Yonge)","date":"c. 300 BC","img":"gen_zeno","pos":"50% 22%"},
{"g":"ancient","text":"A very favourite expression of his was, that time was the most valuable thing that a man could spend.","name":"Theophrastus","src":"As reported by Diogenes Laertius, Lives V.40 (tr. C. D. Yonge)","date":"c. 300 BC","img":"gen_theophrastus","pos":"50% 22%"},
{"g":"ancient","text":"When he was asked what advantage he had derived from philosophy, he replied, “If no other, at least this, that I am prepared for every kind of fortune.”","name":"Diogenes of Sinope","src":"As reported by Diogenes Laertius, Lives VI.63 (tr. C. D. Yonge)","date":"c. 350 BC","img":"gen_diogenes","pos":"50% 22%"},
{"g":"ancient","text":"He used to say that self-conceit was the enemy of progress.","name":"Bion of Borysthenes","src":"As reported by Diogenes Laertius, Lives IV.50 (tr. C. D. Yonge)","date":"c. 260 BC","img":"gen_bion_of_borysthenes","pos":"50% 22%"},
{"g":"ancient","text":"He was once asked what his disciples ought to do to get on; and he replied, “Press on upon those who are in front of them, and not wait for those who are behind to catch them.”","name":"Aristotle","src":"As reported by Diogenes Laertius, Lives V.20 (tr. C. D. Yonge)","date":"4th century BC","img":"aristotle","pos":"50% 22%"},
{"g":"ancient","text":"Polemo used to say that a man ought to exercise himself in action, and not in dialectic speculations.","name":"Polemo","src":"As reported by Diogenes Laertius, Lives IV.18 (tr. C. D. Yonge)","date":"c. 300 BC","img":"gen_polemo","pos":"50% 22%"},
{"g":"ancient","text":"As a field, although it may be naturally fruitful, cannot produce a crop without dressing, so neither can the mind without education.","name":"Cicero","src":"Tusculan Disputations II.5 (tr. C. D. Yonge)","date":"45 BC","img":"gen_cicero","pos":"50% 22%"},
{"g":"ancient","text":"He grew old learning many a fresh lesson every day.","name":"Cicero","src":"On Old Age 14, Cato speaking (tr. E. S. Shuckburgh)","date":"44 BC","img":"gen_cicero","pos":"50% 22%"},
{"g":"ancient","text":"He who puts off the time for mending, stands A clodpoll by the stream with folded hands, Waiting till all the water be gone past; But it runs on, and will, while time shall last.","name":"Horace","src":"Epistles I.2 (tr. John Conington)","date":"c. 20 BC","img":"horace","pos":"50% 15%"},
{"g":"ancient","text":"… Toil conquered all, remorseless toil, and poverty's shrewd push in times of hardship.","name":"Virgil","src":"Georgics I.145–146 (tr. James Rhoades)","date":"29 BC","img":"gen_virgil","pos":"50% 22%"},
{"g":"ancient","text":"Resume your courage and dismiss your care. An hour will come, with pleasure to relate your sorrows past, as benefits of Fate.","name":"Virgil","src":"Aeneid I, Aeneas to his men (tr. John Dryden)","date":"c. 19 BC","img":"gen_virgil","pos":"50% 22%"},
{"g":"ancient","text":"The burden becomes light which is borne contentedly.","name":"Ovid","src":"Amores I.2 (tr. H. T. Riley)","date":"c. 16 BC","img":"ovid","pos":"50% 22%"},
{"g":"ancient","text":"Chance never helps the men who nothing do.","name":"Sophocles","src":"Fragment 407 (tr. E. H. Plumptre, 1865)","date":"5th century BC","img":"gen_sophocles","pos":"50% 22%"},
{"g":"ancient","text":"If you add only a little to a little and do this often, soon that little will become great.","name":"Hesiod","src":"Works and Days 361–362 (tr. H. G. Evelyn-White)","date":"c. 700 BC","img":"gen_hesiod","pos":"50% 22%"},
{"g":"ancient","text":"Do not put your work off till tomorrow and the day after; for a sluggish worker does not fill his barn, nor one who puts off his work: industry makes work go well.","name":"Hesiod","src":"Works and Days 410–412 (tr. H. G. Evelyn-White)","date":"c. 700 BC","img":"gen_hesiod","pos":"50% 22%"},
{"g":"ancient","text":"That man is altogether best who considers all things himself and marks what will be better afterwards and at the end; and he, again, is good who listens to a good adviser.","name":"Hesiod","src":"Works and Days 293–295 (tr. H. G. Evelyn-White)","date":"c. 700 BC","img":"gen_hesiod","pos":"50% 22%"},
{"g":"ancient","text":"It is better to correct your own faults than those of another.","name":"Democritus","src":"Fragment 60 (tr. C. M. Bakewell, 1907)","date":"c. 400 BC","img":"gen_democritus","pos":"50% 22%"},
{"g":"ancient","text":"The sun is new every day.","name":"Heraclitus","src":"Fragment 32 Bywater (DK 6) (tr. John Burnet)","date":"c. 500 BC","img":"heraclitus","pos":"50% 25%"},
{"g":"ancient","text":"Those who seek for gold dig up much earth and find a little.","name":"Heraclitus","src":"Fragment 8 Bywater (DK 22) (tr. John Burnet)","date":"c. 500 BC","img":"heraclitus","pos":"50% 25%"},
{"g":"ancient","text":"Choose the course which you adopt with deliberation; but when you have adopted it, then persevere in it with firmness.","name":"Bias of Priene","src":"As reported by Diogenes Laertius, Lives I.87 (tr. C. D. Yonge)","date":"c. 570 BC","img":"gen_bias","pos":"50% 22%"},
{"g":"ancient","text":"No one ought ever to despond in adverse circumstances, for they may turn out to be the cause of good to us.","name":"Menander","src":"Koniazomenai, lines 18–20 (tr. C. T. Ramage, 1864)","date":"4th century BC","img":"gen_menander","pos":"50% 22%"},
{"g":"ancient","text":"Far better 'tis to have learnt one thing well, than to aim at many things imperfectly.","name":"Menander","src":"Fragment 695 K.-A. (tr. W. F. H. King, 1904)","date":"4th century BC","img":"gen_menander","pos":"50% 22%"},
{"g":"ancient","text":"You will find, upon reflection, that there is nothing more noble or excellent, and that to nature is wanting rather human industry than ability or time.","name":"Sallust","src":"Jugurthine War 1, on human nature (tr. J. S. Watson)","date":"c. 41 BC","img":"gen_sallust","pos":"50% 22%"},
{"g":"ancient","text":"Remember to be careful in your choice of authors of every kind: for, as it has been well observed, “though we should read much, we should not read many books.”","name":"Pliny the Younger","src":"Letters VII.9, to Fuscus (tr. William Melmoth)","date":"c. AD 105","img":"pliny_younger","pos":"50% 22%"},
{"g":"ancient","text":"It is an ordinance of nature that nothing great can be achieved in a moment, and that all the fairest tasks are attended with difficulty.","name":"Quintilian","src":"Institutio Oratoria X.3.4 (tr. H. E. Butler, 1922)","date":"c. 95 AD","img":"quintilian","pos":"50% 22%"},
{"g":"ancient","text":"Your prayer must be that you may have a sound mind in a sound body.","name":"Juvenal","src":"Satire X (tr. Lewis Evans)","date":"c. 120 AD","img":"gen_juvenal","pos":"50% 22%"},
{"g":"ancient","text":"Is there indeed an object at which you aim, at which you bend your bow? Or are you … careless whither your steps lead you, and living only for the moment?","name":"Persius","src":"Satire III (tr. Lewis Evans)","date":"c. AD 60","img":"gen_persius","pos":"50% 22%"},
{"g":"ancient","text":"Cast off from you that which you are not.","name":"Persius","src":"Satire IV (tr. Lewis Evans)","date":"c. AD 60","img":"gen_persius","pos":"50% 22%"},
{"g":"ancient","text":"It is with the workings of the soul as with those of the body; want of exercise of the organ leads to inability of function …","name":"Xenophon","src":"Memorabilia I.2 (tr. H. G. Dakyns)","date":"c. 371 BC","img":"gen_xenophon","pos":"50% 22%"},
{"g":"ancient","text":"There were certain things that the gods had permitted us to attain through learning and study and training. The accomplishment of these is the reward of effort, not of idleness.","name":"Xenophon","src":"Cyropaedia I.6, Cambyses to his son Cyrus (tr. H. G. Dakyns)","date":"c. 370 BC","img":"gen_xenophon","pos":"50% 22%"},
{"g":"ancient","text":"Audacity augments courage; hesitation, fear.","name":"Publilius Syrus","src":"Moral Sayings, maxim 63 (tr. Darius Lyman, 1856)","date":"1st century BC","img":"gen_publilius_syrus","pos":"50% 22%"},
{"g":"ancient","text":"The gods have not revealed all things to men from the beginning, but by seeking they find in time what is better.","name":"Xenophanes","src":"Fragment 18 (tr. John Burnet, Early Greek Philosophy, 1908)","date":"c. 500 BC","img":"gen_xenophanes","pos":"50% 22%"},
{"g":"ancient","text":"Withdraw within yourself, and examine yourself. If you do not yet therein discover beauty, do as the artist, who cuts off, polishes, purifies until he has adorned his statue with all the marks of beauty.","name":"Plotinus","src":"Enneads I.6.9, On the Beautiful (tr. Kenneth Sylvan Guthrie, 1918)","date":"c. AD 253–270","img":"gen_plotinus","pos":"50% 22%"},
{"g":"ancient","text":"It will be well for us … to train up our souls to sublimity, and make them as it were ever big with noble thoughts.","name":"Longinus","src":"On the Sublime IX (tr. H. L. Havell, 1890)","date":"1st century AD","img":"gen_longinus","pos":"50% 22%"},
{"g":"ancient","text":"By our fixing an eye of rivalry on those high examples they will become like beacons to guide us, and will perhaps lift up our souls to the fulness of the stature we conceive.","name":"Longinus","src":"On the Sublime XIV (tr. H. L. Havell, 1890)","date":"1st century AD","img":"gen_longinus","pos":"50% 22%"},
{"g":"ancient","text":"It was a custom with Apelles … never to let any day pass, however busy he might be, without exercising himself by tracing some outline or other …","name":"Pliny the Elder","src":"Natural History XXXV.36 (tr. John Bostock and H. T. Riley)","date":"AD 77","img":"gen_pliny_the_elder","pos":"50% 22%"},
{"g":"ancient","text":"Another saying of his was that it was a great evil not to be able to bear evil.","name":"Bion of Borysthenes","src":"As reported by Diogenes Laertius, Lives IV.48 (tr. C. D. Yonge)","date":"3rd century BC","img":"gen_bion_of_borysthenes","pos":"50% 22%"},
{"g":"ancient","text":"He was studying geometry very late in life, and some said to him, “Is it then a time for you to be learning now?” “If it is not,” he replied, “when will it be?”","name":"Lacydes","src":"As reported by Diogenes Laertius, Lives IV.60 (tr. C. D. Yonge)","date":"3rd century BC","img":"gen_lacydes","pos":"50% 22%"},
{"g":"ancient","text":"A man ought to strive with all his power to counteract circumstances with his actions if possible, and at all events with his reason.","name":"Pyrrho","src":"As reported by Diogenes Laertius, Lives IX.66 (tr. C. D. Yonge)","date":"4th century BC","img":"gen_pyrrho","pos":"50% 22%"},
{"g":"ancient","text":"Each day grow older, and learn something new.","name":"Solon","src":"Poem quoted by Plutarch, Life of Solon 31 (Dryden, rev. A. H. Clough)","date":"c. 560 BC","img":"gen_solon","pos":"50% 22%"},
{"g":"ancient","text":"… We see how far the tilled surpass the fields untilled and to the labour of our hands return their more abounding crops.","name":"Lucretius","src":"On the Nature of Things I (tr. W. E. Leonard)","date":"c. 55 BC","img":"gen_lucretius","pos":"50% 22%"},
{"g":"ancient","text":"Diligent study is like the cultivation of the fields; and it is time which imparts strength to all things and brings them to maturity.","name":"Hippocrates","src":"The Law 3 (tr. Francis Adams, 1849)","date":"c. 400 BC","img":"gen_hippocrates","pos":"50% 22%"},
{"g":"ancient","text":"He must also bring to the task a love of labor and perseverance, so that the instruction taking root may bring forth proper and abundant fruits.","name":"Hippocrates","src":"The Law 2 (tr. Francis Adams, 1849)","date":"c. 400 BC","img":"gen_hippocrates","pos":"50% 22%"},
{"g":"ancient","text":"If you are fond of learning, you will soon be full of learning.","name":"Isocrates","src":"To Demonicus 18 (tr. H. P. Jones, 1900)","date":"c. 374–370 BC","img":"gen_isocrates","pos":"50% 22%"},
{"g":"ancient","text":"Be slow in deliberation, but be prompt to carry out your resolves.","name":"Isocrates","src":"To Demonicus 34 (tr. George Norlin, 1928)","date":"c. 374–370 BC","img":"gen_isocrates","pos":"50% 22%"},
{"g":"ancient","text":"Strive with all your body to be a lover of toil, and with your soul to be a lover of wisdom, in order that with the one you may have the strength to carry out your resolves, and with the other the intelligence to foresee what is for your good.","name":"Isocrates","src":"To Demonicus 40 (tr. George Norlin, 1928)","date":"c. 374–370 BC","img":"gen_isocrates","pos":"50% 22%"},
{"g":"ancient","text":"Regard as your most faithful friends, not those who praise everything you say or do, but those who criticize your mistakes.","name":"Isocrates","src":"To Nicocles 28 (tr. George Norlin, 1928)","date":"c. 374 BC","img":"gen_isocrates","pos":"50% 22%"},
{"g":"ancient","text":"Those things are past, undone they cannot be, But what’s to come watch thou with anxious care.","name":"Theognis of Megara","src":"Elegies 583–584 (tr. T. B. Harbottle, 1897)","date":"6th century BC","img":"gen_theognis_of_megara","pos":"50% 22%"},
{"g":"ancient","text":"There’s a tale that Virtue dwelleth on a rock hard to climb … nor may she ever be seen by eye of mortal, unless heart-devouring sweat come out of one and he reach unto the very top of manliness.","name":"Simonides","src":"Fragment 579 (tr. J. M. Edmonds, Lyra Graeca, 1924)","date":"c. 500 BC","img":"gen_simonides_of_ceos","pos":"50% 22%"},
{"g":"ancient","text":"In no case is there either labour without emolument, nor emolument in general without the expense of labour. Toil and pleasure, in their natures most unlike, are yet linked together by a sort of natural connection.","name":"Livy","src":"Speech of Appius Claudius, as reconstructed by Livy, History of Rome V.4 (tr. D. Spillan)","date":"c. 27 BC","img":"gen_livy","pos":"50% 22%"},
{"g":"ancient","text":"We shall be better and braver and less helpless if we think that we ought to enquire, than we should have been if we indulged in the idle fancy that there was no knowing and no use in seeking to know what we do not know.","name":"Socrates","src":"As reported by Plato, Meno 86b–c (tr. Benjamin Jowett)","date":"c. 385 BC","img":"gen_socrates","pos":"50% 22%"},
{"g":"ancient","text":"There is but one road, the shortest, safest, best, and it is simply this: In whatsoever you desire to be deemed good, endeavour to be good. For of all the virtues namable among men … there is not one but may be increased by learning and practice.","name":"Xenophon","src":"Memorabilia II.6, Socrates to Critobulus (tr. H. G. Dakyns)","date":"c. 371 BC","img":"gen_xenophon","pos":"50% 22%"},
{"g":"ancient","text":"When many laughed at him … he took little notice of them, but pursued his own design, and told his friends: He that is afraid of scoffs and reproaches is more a coward than he that flies from the enemy.","name":"Fabius Maximus","src":"As reported by Plutarch, Sayings of Kings and Commanders (Romans), Moralia (tr. several hands, rev. W. W. Goodwin, 1874)","date":"217 BC","img":"gen_fabius_maximus","pos":"50% 22%"},
{"g":"ancient","text":"Being asked how one might get the greatest reputation amongst men, he replied, By speaking the best and doing the bravest things.","name":"Agesilaus","src":"As reported by Plutarch, Sayings of Spartans, Moralia (tr. several hands, rev. W. W. Goodwin, 1874)","date":"4th century BC","img":"gen_agesilaus","pos":"50% 22%"},
{"g":"business","text":"That which is past is gone, and irrevocable; and wise men have enough to do, with things present and to come; therefore they do but trifle with themselves, that labor in past matters.","name":"Francis Bacon","src":"Essays or Counsels, Civil and Moral, \"Of Revenge\"","date":"1625","img":"gen_francis_bacon","pos":"50% 22%"},
{"g":"business","text":"There is surely no greater wisdom than well to time the beginnings and onsets of things.","name":"Francis Bacon","src":"Essays or Counsels, Civil and Moral, \"Of Delays\"","date":"1625","img":"gen_francis_bacon","pos":"50% 22%"},
{"g":"business","text":"A wise man will make more opportunities than he finds.","name":"Francis Bacon","src":"Essays or Counsels, Civil and Moral, \"Of Ceremonies and Respects\"","date":"1625","img":"gen_francis_bacon","pos":"50% 22%"},
{"g":"business","text":"The best time-savers are the love of soundness in all we learn or do, and a cheerful acceptance of inevitable limitations.","name":"Philip Gilbert Hamerton","src":"The Intellectual Life, Part IV, Letter I","date":"1873","img":"gen_philip_gilbert_hamerton","pos":"50% 22%"},
{"g":"business","text":"Seize the very first possible opportunity to act on every resolution you make, and on every emotional prompting you may experience in the direction of the habits you aspire to gain.","name":"William James","src":"Talks to Teachers on Psychology, ch. 8 \"The Laws of Habit\"","date":"1899","img":"william_james","pos":"50% 22%"},
{"g":"business","text":"Keep the faculty of effort alive in you by a little gratuitous exercise every day. That is, be systematically heroic in little unnecessary points, do every day or two something for no other reason than its difficulty.","name":"William James","src":"Talks to Teachers on Psychology, ch. 8 \"The Laws of Habit\"","date":"1899","img":"william_james","pos":"50% 22%"},
{"g":"business","text":"If he keep faithfully busy each hour of the working day, he may safely leave the final result to itself.","name":"William James","src":"Talks to Teachers on Psychology, ch. 8 \"The Laws of Habit\"","date":"1899","img":"william_james","pos":"50% 22%"},
{"g":"business","text":"We forget that every good that is worth possessing must be paid for in strokes of daily effort.","name":"William James","src":"Talks to Teachers on Psychology, ch. 8 \"The Laws of Habit\"","date":"1899","img":"william_james","pos":"50% 22%"},
{"g":"business","text":"Never suffer an exception to occur till the new habit is securely rooted in your life.","name":"William James","src":"Talks to Teachers on Psychology, ch. 8 \"The Laws of Habit\"","date":"1899","img":"william_james","pos":"50% 22%"},
{"g":"business","text":"Nobody does anything well that they cannot help doing: work is only done well when it is done with a will.","name":"John Ruskin","src":"The Crown of Wild Olive, Lecture I \"Work\"","date":"1866","img":"john_ruskin","pos":"50% 22%"},
{"g":"business","text":"If I was given work that was not good enough for me, I would do it so well and so quickly that they thought I was worthy of something better.","name":"Hiram Maxim","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_hiram_maxim","pos":"50% 22%"},
{"g":"business","text":"If a man does overestimate himself he still owes it to himself to endeavor to prove that his estimate of himself is correct. … If he fails, he will be learning his limitations, which is better than never finding them out.","name":"Joseph Hodges Choate","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_joseph_hodges_choate","pos":"50% 22%"},
{"g":"business","text":"Any man is successful who does well what comes to his hand, and who works to improve himself so that he may do better.","name":"Chauncey Depew","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_chauncey_depew","pos":"50% 22%"},
{"g":"business","text":"The ability to work hard is, perhaps, the most valuable aid to success. One can't have much success without it.","name":"Theodore Roosevelt","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"roosevelt","pos":"50% 22%"},
{"g":"business","text":"The tediousness and regularity of the work was a splendid drill for me, and taught me the virtue of persistence as one of the avenues of success.","name":"Lew Wallace","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_lew_wallace","pos":"50% 22%"},
{"g":"business","text":"Although the world may call him master, the true artist will never regard himself as other than a student.","name":"Edwin Austin Abbey","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_edwin_austin_abbey","pos":"50% 22%"},
{"g":"business","text":"Do not be discouraged at the mistakes you can find in your own work, unless you find only a small number. The more mistakes you can detect, the better able you are to draw.","name":"Charles Dana Gibson","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_charles_dana_gibson","pos":"50% 22%"},
{"g":"business","text":"All difficult things in the world are sure to arise from a previous state in which they were easy, and all great things from one in which they were small.","name":"Laozi","src":"Tao Te Ching, ch. 63 (tr. James Legge)","date":"c. 4th century BC","img":"laozi","pos":"50% 30%"},
{"g":"business","text":"People in their conduct of affairs are constantly ruining them when they are on the eve of success. If they were careful at the end, as (they should be) at the beginning, they would not so ruin them.","name":"Laozi","src":"Tao Te Ching, ch. 64 (tr. James Legge)","date":"c. 4th century BC","img":"laozi","pos":"50% 30%"},
{"g":"business","text":"The day is short, the task is great, the laborers are sluggish, the reward is much, and the Master of the house is urgent.","name":"Rabbi Tarfon","src":"Pirke Avot 2:20 (tr. Joseph I. Gorfinkle)","date":"c. 100 AD","img":"rabbi_tarfon","pos":"50% 22%"},
{"g":"business","text":"Neither say, 'When I have leisure I will study'; perchance thou wilt have no leisure.","name":"Hillel the Elder","src":"Pirke Avot 2:5 (tr. Joseph I. Gorfinkle)","date":"c. 1st century BC","img":"hillel_the_elder","pos":"50% 22%"},
{"g":"kind","text":"In a place where there are no men, strive to be a man.","name":"Hillel the Elder","src":"Pirke Avot 2:6 (tr. Joseph I. Gorfinkle)","date":"c. 1st century BC","img":"hillel_the_elder","pos":"50% 22%"},
{"g":"business","text":"Love work; hate lordship.","name":"Shemaiah","src":"Pirke Avot 1:10 (tr. Joseph I. Gorfinkle)","date":"c. 1st century BC","img":"gen_shemaiah","pos":"50% 22%"},
{"g":"business","text":"Work is more excellent than idleness; the body's life proceeds not, lacking work.","name":"Vyasa","src":"Bhagavad Gita, ch. 3, Krishna speaking (traditionally attributed to Vyasa; tr. Edwin Arnold, The Song Celestial)","date":"c. 2nd century BC","img":"gen_vyasa","pos":"50% 22%"},
{"g":"business","text":"It was not easy to reconcile these household duties with my scientific work, yet, with good will, I managed it.","name":"Marie Curie","src":"Autobiographical Notes, in Pierre Curie (tr. Charlotte and Vernon Kellogg)","date":"1923","img":"gen_marie_curie","pos":"50% 22%"},
{"g":"business","text":"I slip back many times, I fall, I stand still, I run against the edge of hidden obstacles, I lose my temper and find it again and keep it better, I trudge on, I gain a little, I feel encouraged, I get more eager and climb higher.","name":"Helen Keller","src":"The Story of My Life, ch. XX","date":"1903","img":"keller","pos":"50% 20%"},
{"g":"business","text":"I, too, can work, and because I love to labor with my head and my hands, I am an optimist in spite of all.","name":"Helen Keller","src":"Optimism (essay)","date":"1903","img":"keller","pos":"50% 20%"},
{"g":"business","text":"Those who are in love with practice without knowledge are like the sailor who gets into a ship without rudder or compass and who never can be certain whether he is going.","name":"Leonardo da Vinci","src":"Notebooks, §19 (tr. Jean Paul Richter, 1888)","date":"c. 1490–1519","img":"gen_leonardo_da_vinci","pos":"50% 22%"},
{"g":"business","text":"The mechanic, who wishes to do his work well, must first sharpen his tools.","name":"Confucius","src":"Analects XV.9 (tr. James Legge, 1861)","date":"c. 5th century BC","img":"confucius","pos":"50% 30%"},
{"g":"business","text":"The one prudence in life is concentration; the one evil is dissipation.","name":"Ralph Waldo Emerson","src":"The Conduct of Life, \"Power\"","date":"1860","img":"emerson","pos":"50% 22%"},
{"g":"business","text":"Every effort that we are obliged to make to overcome obstacles will give us strength, will give us a confidence in ourselves, that nothing else can give us.","name":"Booker T. Washington","src":"Character Building, \"Don't Be Discouraged\" (Sunday evening talks at Tuskegee)","date":"1902","img":"washington","pos":"50% 15%"},
{"g":"business","text":"Learn for yourselves—think for yourselves; make yourselves masters of principles—persevere—be industrious—and there is then no fear of you.","name":"George Stephenson","src":"As recorded in Samuel Smiles, The Life of George Stephenson and of his Son Robert Stephenson (1868 ed.)","date":"1868","img":"gen_george_stephenson","pos":"50% 22%"},
{"g":"business","text":"I received a dollar a week for working from early morning until late at night, but I was well satisfied with my lot, because I knew that it was bound to lead to better things.","name":"Russell Sage","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_russell_sage","pos":"50% 22%"},
{"g":"business","text":"I did whatever there happened to be for me to do, and let the result take care of itself.","name":"Hazen S. Pingree","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_hazen_s_pingree","pos":"50% 22%"},
{"g":"business","text":"I work methodically certain hours of the day … I never commence to draw without a conception of what I am going to do.","name":"Frederick Burr Opper","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_frederick_burr_opper","pos":"50% 22%"},
{"g":"kind","text":"The art of life lies in a constant readjustment to our surroundings.","name":"Okakura Kakuzō","src":"The Book of Tea, ch. 3 \"Taoism and Zennism\"","date":"1906","img":"okakura_kakuzo","pos":"50% 22%"},
{"g":"business","text":"Failure is often the rock-bottom foundation of real success.","name":"William George Jordan","src":"The Majesty of Calmness, ch. V \"Failure as a Success\"","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"business","text":"A largely intelligent thrift of time is necessary to all great works.","name":"Philip Gilbert Hamerton","src":"The Intellectual Life, Part IV, Letter II","date":"1873","img":"gen_philip_gilbert_hamerton","pos":"50% 22%"},
{"g":"business","text":"Let no man be seduced to idleness by specious promises. Excellence is never granted to man but as the reward of labour.","name":"Joshua Reynolds","src":"Discourses on Art, Discourse II (Royal Academy, 11 Dec 1769)","date":"1769-12-11","img":"gen_joshua_reynolds","pos":"50% 22%"},
{"g":"business","text":"Hurry never realizes that slow, careful foundation work is the quickest in the end.","name":"William George Jordan","src":"The Majesty of Calmness, ch. II","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"business","text":"There is no honest and true work, carried along with constant and sincere purpose that ever really fails.","name":"William George Jordan","src":"The Majesty of Calmness, ch. V \"Failure as a Success\"","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"business","text":"There are times when a man should be content with what he has, but never with what he is.","name":"William George Jordan","src":"The Majesty of Calmness, ch. VII","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"business","text":"Time is often said to be money, but it is more—it is life; and yet many who would cling desperately to life, think nothing of wasting time.","name":"John Lubbock","src":"The Pleasures of Life, Part I, ch. VI \"The Value of Time\"","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"business","text":"Time indeed, is a sacred gift, and each day is a little life.","name":"John Lubbock","src":"The Pleasures of Life, Part I, ch. VI \"The Value of Time\"","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"business","text":"Cheerfulness is the daughter of employment, and on the whole I believe there never was a time when modest merit and patient industry were more sure of reward.","name":"John Lubbock","src":"The Pleasures of Life, Part I, ch. II \"The Happiness of Duty\"","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"business","text":"How can a man come to know himself? Never by thinking, but by doing. Try to do your duty, and you will know at once what you are worth.","name":"Johann Wolfgang von Goethe","src":"Maxims and Reflections, 2 (tr. T. Bailey Saunders)","date":"publ. 1833","img":"goethe","pos":"50% 22%"},
{"g":"business","text":"It is not enough to know, we must also apply; it is not enough to will, we must also do.","name":"Johann Wolfgang von Goethe","src":"Maxims and Reflections, 324 (tr. T. Bailey Saunders)","date":"publ. 1833","img":"goethe","pos":"50% 22%"},
{"g":"business","text":"I began to train my mind to go at its task regularly, keep hours, study whether I liked a thing or not.","name":"Ida M. Tarbell","src":"All in the Day's Work: An Autobiography, ch. 3","date":"1939","img":"gen_ida_m_tarbell","pos":"50% 22%"},
{"g":"business","text":"I counted no little on my habit of planning in advance what I was going to do, and I had a strong conviction that a plan of my own was worth more than any plan which was made for me.","name":"Ida M. Tarbell","src":"All in the Day's Work: An Autobiography, ch. 5","date":"1939","img":"gen_ida_m_tarbell","pos":"50% 22%"},
{"g":"business","text":"The effort made will come to your relief, as the effort missed will turn against you.","name":"Charles Wagner","src":"The Simple Life, ch. V (tr. Mary Louise Hendee)","date":"1895","img":"gen_charles_wagner","pos":"50% 22%"},
{"g":"business","text":"If I have worked harder than I felt that I could bear, how much better is that than not to have as much work as I wanted to do.","name":"Maria Mitchell","src":"Journal, in Maria Mitchell: Life, Letters, and Journals (1896)","date":"1855-12-16","img":"gen_maria_mitchell","pos":"50% 22%"},
{"g":"business","text":"The first step in a work is a great step—the others are easily taken.","name":"Maria Mitchell","src":"Travel journal (Edinburgh), in Maria Mitchell: Life, Letters, and Journals (1896)","date":"1857","img":"gen_maria_mitchell","pos":"50% 22%"},
{"g":"business","text":"Success is a lousy teacher. It seduces smart people into thinking they can't lose.","name":"Bill Gates","src":"The Road Ahead, p. 265","date":"1995","img":"gen_bill_gates","pos":"50% 22%"},
{"g":"business","text":"It can be much more difficult to learn from success than from failure. If we fail, we think carefully about the precise cause. Success can indiscriminately reinforce all our prior actions.","name":"N. R. Narayana Murthy","src":"\"Life lessons from Narayana Murthy\", Rediff.com","date":"2007-05-28","img":"gen_n_r_narayana_murthy","pos":"50% 22%"},
{"g":"business","text":"No time is too long, no study too hard, no discipline too severe for the attainment of complete familiarity with one's work and complete ease and skill in the doing of it.","name":"Hamilton Wright Mabie","src":"Essays on Work and Culture, ch. XII \"Special Training\"","date":"1898","img":"gen_hamilton_wright_mabie","pos":"50% 22%"},
{"g":"business","text":"It is fortunate, rather than the reverse, when one's work is not easily done at the start; for early facility is often fatal to real proficiency.","name":"Hamilton Wright Mabie","src":"Essays on Work and Culture, ch. XIX \"Ease of Mood\"","date":"1898","img":"gen_hamilton_wright_mabie","pos":"50% 22%"},
{"g":"business","text":"If he is courageous and persistent he finds his place at last; and work brings peace, strength, self-comprehension.","name":"Hamilton Wright Mabie","src":"Essays on Work and Culture, ch. IV \"The Pain of Youth\"","date":"1898","img":"gen_hamilton_wright_mabie","pos":"50% 22%"},
{"g":"business","text":"Begin with a little at a time. … In time, a habit will be formed, of doing a few things at regular periods, and in a systematic way.","name":"Catharine Beecher","src":"A Treatise on Domestic Economy, ch. \"On Habits of System and Order\"","date":"1841","img":"gen_catharine_beecher","pos":"50% 22%"},
{"g":"business","text":"It is not to a want of taste … that we have to ascribe the rareness of good scholars, so much as to the want of patient perseverance.","name":"William Cobbett","src":"Advice to Young Men, Letter I","date":"1829","img":"gen_william_cobbett","pos":"50% 22%"},
{"g":"business","text":"As the physically weak man can make himself strong by careful and patient training, so the man of weak thoughts can make them strong by exercising himself in right thinking.","name":"James Allen","src":"As a Man Thinketh, \"Thought and Purpose\"","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"business","text":"He who would accomplish little must sacrifice little; he who would achieve much must sacrifice much; he who would attain highly must sacrifice greatly.","name":"James Allen","src":"As a Man Thinketh, \"The Thought-Factor in Achievement\"","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"business","text":"Ask whatever thou knowest not; for the condescension of inquiring is a guide on thy road in the excellence of learning.","name":"Saadi","src":"The Gulistan, ch. VIII, 91 (tr. James Ross, 1823)","date":"1258","img":"saadi","pos":"50% 22%"},
{"g":"business","text":"Love your work; then you will do it well. It is its own reward, though it brings others.","name":"Richard Mansfield","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_richard_mansfield","pos":"50% 22%"},
{"g":"business","text":"To succeed, you must be honest, believe in your own ability, and, after having selected your path in life, stick to it through thick and thin.","name":"Nathan Straus","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_nathan_straus","pos":"50% 22%"},
{"g":"business","text":"People say that such and such a person has genius for what he or she takes in hand … But I say that genius means strong devotion and steadfast application.","name":"Robert Collyer","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_robert_collyer","pos":"50% 22%"},
{"g":"business","text":"Eliminate impatience and haste from your plans in building the structure of your career. Build slowly, keeping a careful eye upon the quality and placing of every beam and stone.","name":"James Loudon","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_james_loudon","pos":"50% 22%"},
{"g":"business","text":"Talent may be born, but it depends upon your own efforts whether it comes to much.","name":"Henry Merwin Shrady","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_henry_merwin_shrady","pos":"50% 22%"},
{"g":"business","text":"Honest application is the stimulus of all effort. That, to me, is the science of achievement. … Often, the most trying periods will produce the best results.","name":"Thomas Lipton","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_thomas_lipton","pos":"50% 22%"},
{"g":"business","text":"I never possessed cleverness. It was need and determination with me, and I can honestly say that all I have gained has been by the most earnest application.","name":"Alice Barber Stephens","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_alice_barber_stephens","pos":"50% 22%"},
{"g":"business","text":"The trouble lies in the fact that people do not have an object—one thing to which they stick, letting all else go.","name":"Thomas Edison","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_thomas_edison","pos":"50% 22%"},
{"g":"business","text":"The thing is to take advantage of opportunities and utilize them to the best of your ability. Chances, or opportunities, come to everyone, often, in a lifetime. They should be recognized.","name":"Nathan Straus","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_nathan_straus","pos":"50% 22%"},
{"g":"kind","text":"Permit neither your philosophy nor your experience to crowd out of your life the power to love.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"Good Habits\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"kind","text":"Love is the only way of keeping one's inner life in peace, and of maintaining an interest in people and in things.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"Good Habits\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"kind","text":"The spirit of man is never more cheerful than when it has discovered its proper work. Make this discovery, first of all, if you wish to be happy.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Having Time\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"kind","text":"When one has once taken his pen or his spade in hand, and has made the first stroke, his whole work has already grown easier.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Work\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"kind","text":"The school of the intellectual man is the place where he happens to be, and his teachers are the people, books, animals, plants, stones, and earth round about him.","name":"Philip Gilbert Hamerton","src":"The Intellectual Life, Preface","date":"1873","img":"gen_philip_gilbert_hamerton","pos":"50% 22%"},
{"g":"kind","text":"What is needed is constant work, day and night, constant reading, study, will.","name":"Anton Chekhov","src":"Letter to his brother Nikolay, Moscow, 1886, in Letters of Anton Chekhov, tr. Constance Garnett (1920)","date":"1886","img":"gen_anton_chekhov","pos":"50% 22%"},
{"g":"kind","text":"All hopeful work is healthful; and to be usefully and hopefully employed is one of the great secrets of happiness.","name":"Samuel Smiles","src":"Character, ch. IV (Work)","date":"1871","img":"smiles","pos":"50% 20%"},
{"g":"kind","text":"The habit of viewing things cheerfully, and of thinking about life hopefully, may be made to grow up in us like any other habit.","name":"Samuel Smiles","src":"Character, ch. VI (Self-Control)","date":"1871","img":"smiles","pos":"50% 20%"},
{"g":"kind","text":"The true basis of cheerfulness is love, hope, and patience. Love evokes love, and begets loving kindness. Love cherishes hopeful and generous thoughts of others.","name":"Samuel Smiles","src":"Character, ch. VIII (Temper)","date":"1871","img":"smiles","pos":"50% 20%"},
{"g":"kind","text":"Meet hatred with love and you elevate not only yourself but also the one who bears you hatred.","name":"Ralph Waldo Trine","src":"In Tune with the Infinite, ch. \"The Secret, Power, and Effects of Love\"","date":"1897","img":"gen_ralph_waldo_trine","pos":"50% 22%"},
{"g":"kind","text":"The larger the man and the woman, the more inclusive they are in their love and their friendships.","name":"Ralph Waldo Trine","src":"In Tune with the Infinite, ch. \"The Secret, Power, and Effects of Love\"","date":"1897","img":"gen_ralph_waldo_trine","pos":"50% 22%"},
{"g":"kind","text":"Live only in the thought of love for all and you will draw love to you from all.","name":"Ralph Waldo Trine","src":"In Tune with the Infinite, ch. \"The Secret, Power, and Effects of Love\"","date":"1897","img":"gen_ralph_waldo_trine","pos":"50% 22%"},
{"g":"kind","text":"It is wonderful how much innocent happiness we thoughtlessly throw away.","name":"John Lubbock","src":"The Pleasures of Life, Part I, ch. 4 (The Choice of Books)","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"kind","text":"All succeed who deserve, though not perhaps as they hoped.","name":"John Lubbock","src":"The Pleasures of Life, Part II, ch. 1 (Ambition)","date":"1889","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"kind","text":"Hope is at the root of things, and must be reflected in the heart of man.","name":"Charles Wagner","src":"The Simple Life (tr. Mary Louise Hendee), ch. III (Simplicity of Thought)","date":"1895","img":"gen_charles_wagner","pos":"50% 22%"},
{"g":"kind","text":"Have confidence and hope; be kind.","name":"Charles Wagner","src":"The Simple Life (tr. Mary Louise Hendee), ch. III (Simplicity of Thought)","date":"1895","img":"gen_charles_wagner","pos":"50% 22%"},
{"g":"kind","text":"Do your duty, even if duty be wearisome and hard, for then you are in the place where it can become joyous and easy to you.","name":"Phillips Brooks","src":"Heart's-Ease (selections from his writings, 1909)","date":"1909","img":"gen_phillips_brooks","pos":"50% 22%"},
{"g":"kind","text":"Let not the eyes grow dim, look not back but forward; the soul must uphold itself like the sun.","name":"Richard Jefferies","src":"The Pageant of Summer","date":"1883","img":"gen_richard_jefferies","pos":"50% 22%"},
{"g":"kind","text":"The storm passes and the sun comes out, the air is the sweeter and the richer for the rain, like verses with a rhyme; there will be more honey in the flowers.","name":"Richard Jefferies","src":"The Pageant of Summer","date":"1883","img":"gen_richard_jefferies","pos":"50% 22%"},
{"g":"kind","text":"All my days I have grown up amongst the wise, and I have found nothing better for man than silence; not learning but doing is the chief thing.","name":"Simeon ben Gamaliel","src":"Pirke Avot 1:17 (tr. Joseph I. Gorfinkle)","date":"c. 1st century AD","img":"gen_simeon_ben_gamaliel","pos":"50% 22%"},
{"g":"kind","text":"What, to our eyes, may seem hopeless failure is often but the dawning of a greater success.","name":"William George Jordan","src":"The Majesty of Calmness, ch. V \"Failure as a Success\"","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"kind","text":"He has but to live his best at all times, and rest calm and untroubled no matter what results come to his efforts.","name":"William George Jordan","src":"The Majesty of Calmness, ch. VI \"Doing Our Best at All Times\"","date":"1898","img":"gen_william_george_jordan","pos":"50% 22%"},
{"g":"kind","text":"There is no happiness in having or in getting, but only in giving.","name":"Henry Drummond","src":"The Greatest Thing in the World","date":"1890","img":"henry_drummond","pos":"50% 22%"},
{"g":"kind","text":"Love \"thinketh no evil,\" imputes no motive, sees the bright side, puts the best construction on every action.","name":"Henry Drummond","src":"The Greatest Thing in the World","date":"1890","img":"henry_drummond","pos":"50% 22%"},
{"g":"kind","text":"Is life not full of opportunities for learning Love?","name":"Henry Drummond","src":"The Greatest Thing in the World","date":"1890","img":"henry_drummond","pos":"50% 22%"},
{"g":"kind","text":"Let us be silent as to each other's weakness, helpful, tolerant, nay, tender toward each other!","name":"Henri-Frédéric Amiel","src":"Journal Intime (tr. Mrs Humphry Ward)","date":"1877-08-11","img":"henri_frederic_amiel","pos":"50% 22%"},
{"g":"kind","text":"Charity is generous; it runs a risk willingly, and in spite of a hundred successive experiences, it thinks no evil at the hundred-and-first.","name":"Henri-Frédéric Amiel","src":"Journal Intime (tr. Mrs Humphry Ward)","date":"1879-01-19","img":"henri_frederic_amiel","pos":"50% 22%"},
{"g":"kind","text":"So many gods, so many creeds, So many paths that wind and wind, While just the art of being kind, Is all the sad world needs.","name":"Ella Wheeler Wilcox","src":"\"The World's Need\", Poems of Power","date":"1901","img":"ella_wheeler_wilcox","pos":"50% 22%"},
{"g":"kind","text":"There is no chance, no destiny, no fate, Can circumvent or hinder or control The firm resolve of a determined soul.","name":"Ella Wheeler Wilcox","src":"\"Will\", Poems of Cheer","date":"1905","img":"ella_wheeler_wilcox","pos":"50% 22%"},
{"g":"kind","text":"I think everybody longs to be loved, and longs to know that he or she is lovable. And, consequently, the greatest thing that we can do is to help somebody know that they're loved and capable of loving.","name":"Fred Rogers","src":"Commencement address, Dartmouth College","date":"9 Jun 2002","img":"gen_fred_rogers","pos":"50% 22%"},
{"g":"kind","text":"If in our daily life we can smile, if we can be peaceful and happy, not only we, but everyone will profit from it.","name":"Thích Nhất Hạnh","src":"Being Peace","date":"1987","img":"gen_thich_nhat_hanh","pos":"50% 22%"},
{"g":"kind","text":"The typical expression of opening Friendship would be something like, \"What? You too? I thought I was the only one.\"","name":"C. S. Lewis","src":"The Four Loves, ch. IV (Friendship)","date":"1960","img":"gen_c_s_lewis","pos":"50% 22%"},
{"g":"kind","text":"You may not control all the events that happen to you, but you can decide not to be reduced by them. Try to be a rainbow in someone's cloud.","name":"Maya Angelou","src":"Letter to My Daughter, pp. xi–xii","date":"2009","img":"gen_maya_angelou","pos":"50% 22%"},
{"g":"kind","text":"Gentleness and cheerfulness, these come before all morality; they are the perfect duties.","name":"Robert Louis Stevenson","src":"A Christmas Sermon, Across the Plains","date":"1888","img":"stevenson","pos":"50% 25%"},
{"g":"kind","text":"Watch and pray, dear, never get tired of trying, and never think it is impossible to conquer your fault.","name":"Louisa May Alcott","src":"Little Women, ch. 8 (Mrs. March)","date":"1868","img":"alcott","pos":"50% 15%"},
{"g":"kind","text":"Isn't it splendid to think of all the things there are to find out about? It just makes me feel glad to be alive—it's such an interesting world.","name":"L. M. Montgomery","src":"Anne of Green Gables, ch. 2 (Anne)","date":"1908","img":"montgomery","pos":"50% 30%"},
{"g":"kind","text":"It's been my experience that you can nearly always enjoy things if you make up your mind firmly that you will.","name":"L. M. Montgomery","src":"Anne of Green Gables, ch. 5 (Anne)","date":"1908","img":"montgomery","pos":"50% 30%"},
{"g":"kind","text":"However mean your life is, meet it and live it; do not shun it and call it hard names. … Love your life, poor as it is.","name":"Henry David Thoreau","src":"Walden, ch. 18 (Conclusion)","date":"1854","img":"thoreau","pos":"50% 20%"},
{"g":"kind","text":"Afoot and light-hearted I take to the open road, Healthy, free, the world before me, The long brown path before me leading wherever I choose.","name":"Walt Whitman","src":"Song of the Open Road, Leaves of Grass (1891–92 ed.)","date":"1856 (text of 1891–92 ed.)","img":"whitman","pos":"50% 12%"},
{"g":"kind","text":"Nothing can bring you peace but yourself.","name":"Ralph Waldo Emerson","src":"Self-Reliance, Essays: First Series","date":"1841","img":"emerson","pos":"50% 22%"},
{"g":"kind","text":"The Master said, 'When I walk along with two others, they may serve me as my teachers. I will select their good qualities and follow them, their bad qualities and avoid them.'","name":"Confucius","src":"Analects VII.21 (tr. James Legge)","date":"c. 5th century BC","img":"confucius","pos":"50% 30%"},
{"g":"kind","text":"First keep thyself in peace, and then shalt thou be able to be a peacemaker towards others. A peaceable man doth more good than a well-learned.","name":"Thomas à Kempis","src":"The Imitation of Christ, II.3 (tr. William Benham)","date":"c. 1420","img":"thomas_a_kempis","pos":"50% 22%"},
{"g":"kind","text":"We must lose everything rather than courage, confidence, and good-will.","name":"Francis de Sales","src":"Maxims and Counsels of St. Francis de Sales (tr. Ella McMahon)","date":"early 17th century","img":"gen_francis_de_sales","pos":"50% 22%"},
{"g":"kind","text":"I love these three little virtues: gentleness of heart, firmness of mind, and simplicity of life.","name":"Francis de Sales","src":"Maxims and Counsels of St. Francis de Sales (tr. Ella McMahon)","date":"early 17th century","img":"gen_francis_de_sales","pos":"50% 22%"},
{"g":"kind","text":"Try to preserve a sweet tranquillity of mind; say to your soul: \"Courage! we have made a false step, but let us keep steadily on and keep watch over ourselves.\"","name":"Francis de Sales","src":"Maxims and Counsels of St. Francis de Sales (tr. Ella McMahon)","date":"early 17th century","img":"gen_francis_de_sales","pos":"50% 22%"},
{"g":"kind","text":"Get leave to work in this world—'tis the best you get at all.","name":"Elizabeth Barrett Browning","src":"Aurora Leigh, Book III","date":"1856","img":"elizabeth_barrett_browning","pos":"50% 22%"},
{"g":"kind","text":"The glorious masterpiece of man is to live to purpose; all other things: to reign, to lay up treasure, to build, are but little appendices and props.","name":"Michel de Montaigne","src":"Of Experience, Essays III.13 (tr. Charles Cotton)","date":"1588","img":"michel_de_montaigne","pos":"50% 22%"},
{"g":"kind","text":"Those who cannot feel the littleness of great things in themselves are apt to overlook the greatness of little things in others.","name":"Okakura Kakuzō","src":"The Book of Tea, ch. 1","date":"1906","img":"okakura_kakuzo","pos":"50% 22%"},
{"g":"kind","text":"The cure for all the ills and wrongs, the cares, the sorrows, and crimes of humanity, all lie in that one word LOVE. It is the divine vitality that produces and restores life.","name":"Lydia Maria Child","src":"Letters from New York, Letter XXVIII","date":"29 Sep 1842","img":"gen_lydia_maria_child","pos":"50% 22%"},
{"g":"kind","text":"It is the greatest of all mistakes to do nothing because you can only do little.","name":"Sydney Smith","src":"Elementary Sketches of Moral Philosophy, Lecture XIX","date":"1849","img":"gen_sydney_smith","pos":"50% 22%"},
{"g":"kind","text":"We cannot pursue any natural study with love and enthusiasm without the object of it becoming a part of our lives.","name":"John Burroughs","src":"Time and Change, ch. XIII (The Gospel of Nature)","date":"1912","img":"gen_john_burroughs","pos":"50% 22%"},
{"g":"kind","text":"Good company and good discourse are the very sinews of virtue.","name":"Izaak Walton","src":"The Compleat Angler, ch. II (Piscator)","date":"1653","img":"gen_izaak_walton","pos":"50% 22%"},
{"g":"kind","text":"This communicating of a man's self to his friend, works two contrary effects; for it redoubleth joys, and cutteth griefs in halves.","name":"Francis Bacon","src":"Of Friendship, Essays","date":"1625","img":"gen_francis_bacon","pos":"50% 22%"},
{"g":"kind","text":"Change in work is almost as refreshing as complete rest.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Work\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"history","text":"We know that each height, each step, must be gained by patient, laborious toil, and that wishing cannot take the place of working.","name":"Edward Whymper","src":"Scrambles Amongst the Alps, ch. XXII","date":"1871","img":"gen_edward_whymper","pos":"50% 22%"},
{"g":"history","text":"Toil he must who goes mountaineering, but out of the toil comes strength (not merely muscular energy—more than that, an awakening of all the faculties), and from the strength arises pleasure.","name":"Edward Whymper","src":"Scrambles Amongst the Alps, ch. XXII","date":"1871","img":"gen_edward_whymper","pos":"50% 22%"},
{"g":"history","text":"Success does not, as a rule, come by chance, and when one fails there is a reason for it.","name":"Edward Whymper","src":"Scrambles Amongst the Alps, ch. XIII","date":"1871","img":"gen_edward_whymper","pos":"50% 22%"},
{"g":"history","text":"With steady perseverance, difficulties upon a mountain, as elsewhere, come to an end.","name":"John Tyndall","src":"Hours of Exercise in the Alps, ch. XXIV","date":"1871","img":"gen_john_tyndall","pos":"50% 22%"},
{"g":"history","text":"Our work was very difficult, sometimes disheartening: nevertheless, our inspiration was, that what man has done man may do, and we accordingly persevered.","name":"John Tyndall","src":"Hours of Exercise in the Alps, ch. XXVI (A Day among the Séracs of the Glacier du Géant)","date":"1871","img":"gen_john_tyndall","pos":"50% 22%"},
{"g":"history","text":"We felt nothing that could be called confidence as to the issue of the enterprise, but we also felt the inner compactness and determination of men who, though they know their work to be difficult, feel no disposition to shrink from it.","name":"John Tyndall","src":"Hours of Exercise in the Alps, ch. XIV","date":"1871","img":"gen_john_tyndall","pos":"50% 22%"},
{"g":"history","text":"The first condition of success is patient industry, an honest receptivity, and a willingness to abandon all preconceived notions, however cherished, if they be found to contradict the truth.","name":"John Tyndall","src":"\"On the Study of Physics\", lecture, in Fragments of Science","date":"1854","img":"gen_john_tyndall","pos":"50% 22%"},
{"g":"history","text":"Invention is one of the great marks of genius, but if we consult experience, we shall find that it is by being conversant with the inventions of others that we learn to invent, as by reading the thoughts of others we learn to think.","name":"Joshua Reynolds","src":"Discourse VI to the students of the Royal Academy","date":"10 December 1774","img":"gen_joshua_reynolds","pos":"50% 22%"},
{"g":"history","text":"Perhaps the most valuable result of all education is the ability to make yourself do the thing you have to do, when it ought to be done, whether you like it or not; it is the first lesson that ought to be learned.","name":"Thomas Henry Huxley","src":"\"Technical Education\", address to the Working Men's Club and Institute, in Science and Education","date":"1877","img":"gen_thomas_henry_huxley","pos":"50% 22%"},
{"g":"history","text":"Success … is in reality only putting the foot upon one rung of the ladder which leads upwards; and … the rung of a ladder was never meant to rest upon, but only to hold a man's foot long enough to enable him to put the other somewhat higher.","name":"Thomas Henry Huxley","src":"\"On Medical Education\", prize-giving address at University College, London, in Science and Education","date":"1870","img":"gen_thomas_henry_huxley","pos":"50% 22%"},
{"g":"history","text":"Whatever is taken for granted is so taken at one's own peril; fact and reason are the ultimate arbiters, and patience and honesty are the great helpers out of difficulty.","name":"Thomas Henry Huxley","src":"\"Scientific Education: Notes of an After-Dinner Speech\", in Lay Sermons, Addresses and Reviews","date":"1869","img":"gen_thomas_henry_huxley","pos":"50% 22%"},
{"g":"history","text":"If you do your work with the care, intelligence, and patience that is necessary, you will find a glorious reward in the enhanced enjoyment of a night with the heavens—all the result of your own ingenuity and handiwork.","name":"James Nasmyth","src":"James Nasmyth, Engineer: An Autobiography (ed. Samuel Smiles), ch. 18 (on making one's own telescope)","date":"1883","img":"gen_james_nasmyth","pos":"50% 22%"},
{"g":"history","text":"I had to compare myself with an Alpine climber, who, not knowing the way, ascends slowly and with toil, and is often compelled to retrace his steps because his progress is stopped; sometimes by reasoning, and sometimes by accident, he hits upon traces of a fresh path.","name":"Hermann von Helmholtz","src":"Autobiographical Sketch, address at his jubilee, in Popular Lectures on Scientific Subjects, 2nd series (tr. E. Atkinson, 1893)","date":"1891","img":"gen_hermann_von_helmholtz","pos":"50% 22%"},
{"g":"history","text":"The true artist and the true inquirer knows that great works can only be produced by hard work.","name":"Hermann von Helmholtz","src":"\"On Thought in Medicine\", address of 2 August 1877, in Popular Lectures on Scientific Subjects, 2nd series (tr. E. Atkinson, 1893)","date":"2 August 1877","img":"gen_hermann_von_helmholtz","pos":"50% 22%"},
{"g":"history","text":"Without talent nothing can be done, but without character just as little.","name":"Felix Mendelssohn","src":"Letter to Carl Eckert, Berlin, in Letters from 1833 to 1847 (tr. Lady Wallace, 1863)","date":"26 January 1842","img":"gen_felix_mendelssohn","pos":"50% 22%"},
{"g":"history","text":"In order to prevent existence being dissipated and wasted when brilliant and happy—or depressed and destroyed when the reverse—there is but one safeguard—to work, and to go on working.","name":"Felix Mendelssohn","src":"Letter to Carl Eckert, Berlin, in Letters from 1833 to 1847 (tr. Lady Wallace, 1863)","date":"26 January 1842","img":"gen_felix_mendelssohn","pos":"50% 22%"},
{"g":"history","text":"To go on working I consider the best and only thing to do … I believe that no man ever yet succeeded in controlling and commanding the minds of others by one work; a succession of works all aiming at one point can alone do it.","name":"Felix Mendelssohn","src":"Letter to Edouard Franck, Leipzig, in Letters from 1833 to 1847 (tr. Lady Wallace, 1863)","date":"8 January 1838","img":"gen_felix_mendelssohn","pos":"50% 22%"},
{"g":"history","text":"Do you really suppose anything can be accomplished without trouble and discipline? … Even when we are not disposed for it we must force ourselves to work. Otherwise nothing can be accomplished.","name":"Pyotr Ilyich Tchaikovsky","src":"Letter to his brother Modeste, in Modeste Tchaikovsky, The Life & Letters of Peter Ilich Tchaikovsky (tr. Rosa Newmarch, 1906)","date":"18 January 1875","img":"gen_pyotr_ilyich_tchaikovsky","pos":"50% 22%"},
{"g":"history","text":"We must always work, and a self-respecting artist must not fold his hands on the pretext that he is not in the mood. If we wait for the mood, without endeavouring to meet it halfway, we easily become indolent and apathetic.","name":"Pyotr Ilyich Tchaikovsky","src":"Letter to Nadezhda von Meck, Clarens, in The Life & Letters of Peter Ilich Tchaikovsky (tr. Rosa Newmarch, 1906)","date":"17 March 1878","img":"gen_pyotr_ilyich_tchaikovsky","pos":"50% 22%"},
{"g":"history","text":"Those little (perhaps not little) inconveniences we are none of us exempt from, arising from the imperfections of human nature … I believe the best receipt for them is endurance and a determination to show ourselves superior to them.","name":"John Herschel","src":"Letter to his aunt Caroline Herschel, Montpellier, in Memoir and Correspondence of Caroline Herschel (1876)","date":"17 September 1826","img":"gen_john_herschel","pos":"50% 22%"},
{"g":"history","text":"If I met with a difficult point … instead of poring over it till I was bewildered, I left it, took my work or some amusing book, and resumed it when my mind was fresh.","name":"Mary Somerville","src":"Personal Recollections, from Early Life to Old Age, of Mary Somerville, ch. IV (1873)","date":"1873","img":"gen_mary_somerville","pos":"50% 22%"},
{"g":"history","text":"The only thing in which I was determined and inflexible was in the prosecution of my studies. They were perpetually interrupted, but always resumed at the first opportunity.","name":"Mary Somerville","src":"Personal Recollections, from Early Life to Old Age, of Mary Somerville, ch. IX (1873)","date":"1873","img":"gen_mary_somerville","pos":"50% 22%"},
{"g":"history","text":"If any man seeks for greatness, let him forget greatness and ask for truth, and he will find both.","name":"Horace Mann","src":"Journal entry","date":"29 October 1838","img":"gen_horace_mann","pos":"50% 22%"},
{"g":"history","text":"Resolve to edge in a little reading every day, if it is but a single sentence. If you gain fifteen minutes a day, it will make itself felt at the end of the year.","name":"Horace Mann","src":"The Common School Journal, vol. V, no. 19","date":"2 October 1843","img":"gen_horace_mann","pos":"50% 22%"},
{"g":"history","text":"Every addition to true knowledge is an addition to human power.","name":"Horace Mann","src":"Lectures on Education, Lecture 1","date":"1845","img":"gen_horace_mann","pos":"50% 22%"},
{"g":"history","text":"There is safety in the midst of danger. What would life be if we had no courage to attempt anything?","name":"Vincent van Gogh","src":"Letter to his brother Theo, The Hague (tr. Johanna van Gogh-Bonger)","date":"29 December 1881","img":"gen_vincent_van_gogh","pos":"50% 22%"},
{"g":"history","text":"… He who does not try anything cannot obtain his ends.","name":"John James Audubon","src":"Journal, in Audubon and His Journals, vol. 1 (ed. Maria R. Audubon, 1897)","date":"October 1827","img":"gen_john_james_audubon","pos":"50% 22%"},
{"g":"history","text":"I must not despair; nothing can be done without patience and industry.","name":"John James Audubon","src":"Journal, Cambridge, in Audubon and His Journals, vol. 1 (ed. Maria R. Audubon, 1897)","date":"March 1828","img":"gen_john_james_audubon","pos":"50% 22%"},
{"g":"history","text":"The mind is made strong, not through much learning, but by the thorough possession of something.","name":"Louis Agassiz","src":"Obiter dicta to teachers, as recorded by David Starr Jordan and Burt G. Wilder, in Lane Cooper, Louis Agassiz as a Teacher (1917)","date":"1873","img":"gen_louis_agassiz","pos":"50% 22%"},
{"g":"history","text":"Lay aside all conceit. Learn to read the book of nature for yourself. Those who have succeeded best have followed for years some slim thread which has once in a while broadened out and disclosed some treasure worth a lifelong search.","name":"Louis Agassiz","src":"Obiter dicta to teachers, as recorded by David Starr Jordan and Burt G. Wilder, in Lane Cooper, Louis Agassiz as a Teacher (1917)","date":"1873","img":"gen_louis_agassiz","pos":"50% 22%"},
{"g":"history","text":"Have the courage to say: 'I do not know.'","name":"Louis Agassiz","src":"As recorded by Burt G. Wilder, Harvard Graduates' Magazine (June 1907)","date":"before 1873","img":"gen_louis_agassiz","pos":"50% 22%"},
{"g":"history","text":"The truly brave man … yields neither to fear nor anger, desire nor agony; he is at all times master of himself.","name":"Charles Eastman (Ohiyesa)","src":"The Soul of the Indian, ch. IV","date":"1911","img":"charles_eastman","pos":"50% 22%"},
{"g":"history","text":"The boundaries are not yet fixed which shall call out to talent and industry: thus far and no further!","name":"Ludwig van Beethoven","src":"As reported by Anton Schindler, in Beethoven, the Man and the Artist, as Revealed in His Own Words (ed. Kerst, tr. H. E. Krehbiel, 1905)","date":"c. 1820s","img":"gen_ludwig_van_beethoven","pos":"50% 22%"},
{"g":"history","text":"If you wish to learn about a thing, the best way is always to go and try to teach someone else that thing.","name":"Jacob Riis","src":"The Making of an American, ch. XII","date":"1901","img":"gen_jacob_riis","pos":"50% 22%"},
{"g":"history","text":"Good hard work goes a long way toward making up for lack of genius.","name":"Jacob Riis","src":"The Making of an American, ch. IX","date":"1901","img":"gen_jacob_riis","pos":"50% 22%"},
{"g":"history","text":"When things were going very well indeed it was just the time to anticipate trouble. And, conversely, I learned from pleasant experience that at the most despairing crisis, when all looked sour beyond words, some delightful \"break\" was apt to lurk just around the corner.","name":"Amelia Earhart","src":"Last Flight, p. 70","date":"1937","img":"gen_amelia_earhart","pos":"50% 22%"},
{"g":"history","text":"The time to worry is three months before a flight. Decide then whether or not the goal is worth the risks involved. If it is, stop worrying. To worry is to add another hazard.","name":"Amelia Earhart","src":"Original foreword to Last Flight, as quoted in Randall Brink, Lost Star: The Search for Amelia Earhart (1995)","date":"1937","img":"gen_amelia_earhart","pos":"50% 22%"},
{"g":"history","text":"Optimism is true moral courage.","name":"Ernest Shackleton","src":"As recorded by Leonard Hussey in South with Shackleton (1949)","date":"1914–1917","img":"gen_ernest_shackleton","pos":"50% 22%"},
{"g":"history","text":"Have no respect whatsoever for authority; forget who said it and instead look what he starts with, where he ends up, and ask yourself, \"Is it reasonable?\"","name":"Richard Feynman","src":"\"What Do You Care What Other People Think?\", p. 28–29 (a lesson from his father)","date":"1988","img":"gen_richard_feynman","pos":"50% 22%"},
{"g":"history","text":"We always think our problems are peculiar to us, and then finally discover how many others have gone through exactly the same thing.","name":"Rachel Carson","src":"Letter to Dorothy Freeman, in Always, Rachel (1994)","date":"1955","img":"gen_rachel_carson","pos":"50% 22%"},
{"g":"history","text":"I thus learned from his example that one could work happily even in very insufficient quarters.","name":"Marie Curie","src":"Autobiographical Notes, in Pierre Curie (tr. Charlotte and Vernon Kellogg, 1923)","date":"1923","img":"gen_marie_curie","pos":"50% 22%"},
{"g":"history","text":"The only thing for me to do in a perplexity is to go ahead, and learn by making mistakes.","name":"Anne Sullivan","src":"Letter from Tuscumbia, in Helen Keller, The Story of My Life (1903), Part III","date":"1887","img":"gen_anne_sullivan","pos":"50% 22%"},
{"g":"history","text":"I think I have improved a little … I still find it very difficult … but I am sure I shall succeed some day if I only persevere.","name":"Helen Keller","src":"Letter to Caroline Derby, New York, in The Story of My Life (1903)","date":"15 March 1895","img":"keller","pos":"50% 20%"},
{"g":"history","text":"Obstacles cannot crush me. Every obstacle yields to stern resolve. He who is fixed to a star does not change his mind.","name":"Leonardo da Vinci","src":"Notebooks, §682, mottoes for allegorical drawings (tr. Jean Paul Richter, 1888)","date":"c. 1490–1519","img":"gen_leonardo_da_vinci","pos":"50% 22%"},
{"g":"history","text":"I have always thought that one man of tolerable abilities may work great changes, and accomplish great affairs among mankind, if he first forms a good plan, and … makes the execution of that same plan his sole study and business.","name":"Benjamin Franklin","src":"Autobiography, ch. IX","date":"1788","img":"franklin","pos":"50% 25%"},
{"g":"history","text":"I am resolved not to trouble my head about the cry … which is raised against me, and to go on my way in a consistent and undeterred fashion.","name":"Franz Liszt","src":"Letter from Weimar on his critics, in Letters of Franz Liszt, vol. 1 (ed. La Mara, tr. Constance Bache, 1894)","date":"January 1858","img":"gen_franz_liszt","pos":"50% 22%"},
{"g":"history","text":"I never fail to do my very best, and to do so with all my strength.","name":"Wolfgang Amadeus Mozart","src":"Letter to his father, Paris, in The Letters of Wolfgang Amadeus Mozart (tr. Lady Wallace, 1865)","date":"July 1778","img":"gen_wolfgang_amadeus_mozart","pos":"50% 22%"},
{"g":"history","text":"Go to nature; take the facts into your own hands; look, and see for yourself!","name":"Louis Agassiz","src":"As recorded by William James, Louis Agassiz: Words Spoken at the Reception of the American Society of Naturalists (1897), in Lane Cooper, Louis Agassiz as a Teacher (1917)","date":"1896 (recalled)","img":"gen_louis_agassiz","pos":"50% 22%"},
{"g":"history","text":"I consider it … the duty of an artist not to be conquered by circumstances. He must not wait. Inspiration is a guest who does not care to visit those who are indolent.","name":"Pyotr Ilyich Tchaikovsky","src":"Letter to Nadezhda von Meck, Kamenka, in The Life & Letters of Peter Ilich Tchaikovsky (tr. Rosa Newmarch, 1906)","date":"6 Jul 1878","img":"gen_pyotr_ilyich_tchaikovsky","pos":"50% 22%"},
{"g":"history","text":"Exploration is the physical expression of the Intellectual Passion. And I tell you, if you have the desire for knowledge and the power to give it physical expression, go out and explore.","name":"Apsley Cherry-Garrard","src":"The Worst Journey in the World, ch. XIX","date":"1922","img":"gen_apsley_cherry_garrard","pos":"50% 22%"},
{"g":"history","text":"You must go on filling in; there is no other help for it. The stuff emptied in is doing its work out of sight, and if you will but have patience, it will soon begin to show.","name":"George Stephenson","src":"To his workmen on the Chat Moss bog, as recorded by Samuel Smiles in The Life of George Stephenson, ch. XI","date":"c. 1827","img":"gen_george_stephenson","pos":"50% 22%"},
{"g":"history","text":"I worked long at watch-cleaning myself, and when I was at a loss, I was never ashamed to ask for information.","name":"George Stephenson","src":"As recorded by Samuel Smiles in The Life of George Stephenson","date":"1840s","img":"gen_george_stephenson","pos":"50% 22%"},
{"g":"history","text":"I feel that the greatest reward for doing is the opportunity to do more.","name":"Jonas Salk","src":"On receiving the Congressional Medal for Distinguished Civilian Achievement","date":"23 April 1956","img":"gen_jonas_salk","pos":"50% 22%"},
{"g":"history","text":"Risks, I like to say, always pay off. You learn what to do, or what not to do.","name":"Jonas Salk","src":"Interview, Academy of Achievement, San Diego","date":"16 May 1991","img":"gen_jonas_salk","pos":"50% 22%"},
{"g":"history","text":"Hope lies in dreams, in imagination and in the courage of those who dare to make dreams into reality.","name":"Jonas Salk","src":"Address on receiving the Nehru Award, published in Virginia Woolf Quarterly, vol. 3, p. 11","date":"10 January 1977","img":"gen_jonas_salk","pos":"50% 22%"},
{"g":"history","text":"I have always considered the price of perfection prohibitive and allowed mistakes as a part of the learning process. I prefer a dash of daring and persistence to perfection.","name":"A. P. J. Abdul Kalam","src":"Wings of Fire: An Autobiography (with Arun Tiwari), p. 58","date":"1999","img":"gen_a_p_j_abdul_kalam","pos":"50% 22%"},
{"g":"history","text":"It has been my personal experience that the true flavour, the real fun, the continuous excitement of work lie in the process of doing it rather than in having it over and done with.","name":"A. P. J. Abdul Kalam","src":"Wings of Fire: An Autobiography (with Arun Tiwari), p. 135","date":"1999","img":"gen_a_p_j_abdul_kalam","pos":"50% 22%"},
{"g":"history","text":"The key to my motivation has always been to look at how far I had still to go rather than how far I had come.","name":"A. P. J. Abdul Kalam","src":"Wings of Fire: An Autobiography (with Arun Tiwari), p. 140","date":"1999","img":"gen_a_p_j_abdul_kalam","pos":"50% 22%"},
{"g":"history","text":"Total commitment is the common denominator among all successful men and women.","name":"A. P. J. Abdul Kalam","src":"Wings of Fire: An Autobiography (with Arun Tiwari), p. 90","date":"1999","img":"gen_a_p_j_abdul_kalam","pos":"50% 22%"},
{"g":"history","text":"The best way to win was to not need to win. The best performances are accomplished when you are relaxed and free of doubt.","name":"A. P. J. Abdul Kalam","src":"Wings of Fire: An Autobiography (with Arun Tiwari), p. 31","date":"1999","img":"gen_a_p_j_abdul_kalam","pos":"50% 22%"},
{"g":"history","text":"My work is about to be known, I have made a number of valuable and kind friends … and now I have a hope of success if I continue to be honest, industrious, and consistent.","name":"John James Audubon","src":"Journal, in Audubon and His Journals, vol. 1 (ed. Maria R. Audubon, 1897)","date":"1827","img":"gen_john_james_audubon","pos":"50% 22%"},
{"g":"history","text":"I was glad … to have taken this resolution, as it gave me confidence in myself and consequently courage to persevere.","name":"Mary Somerville","src":"Personal Recollections, from Early Life to Old Age, of Mary Somerville, ch. V (1873)","date":"1873","img":"gen_mary_somerville","pos":"50% 22%"},
{"g":"history","text":"It was a splendid chance, no doubt, but of what use would it have been to anyone who was not ready to use it?","name":"Ellen Terry","src":"The Story of My Life: Recollections and Reflections, ch. III","date":"1908","img":"gen_ellen_terry","pos":"50% 22%"},
{"g":"ancient","text":"To another asking him what was the best way to secure his present happiness, he answered, Not to trust all to Fortune.","name":"Leotychidas I","src":"As reported by Plutarch, Sayings of Spartans, Moralia (tr. several hands, rev. W. W. Goodwin, 1874)","date":"7th century BC","img":"gen_leotychidas_i","pos":"50% 22%"},
{"g":"ancient","text":"When asked how men might live most virtuously and most justly, he said, “If we never do ourselves what we blame in others.”","name":"Thales","src":"As reported by Diogenes Laertius, Lives I.36 (tr. C. D. Yonge)","date":"6th century BC","img":"gen_thales","pos":"50% 22%"},
{"g":"ancient","text":"Being once asked what was best, he replied, “To do what one is doing at the moment well.”","name":"Pittacus","src":"As reported by Diogenes Laertius, Lives I.77 (tr. C. D. Yonge)","date":"c. 600 BC","img":"gen_pittacus","pos":"50% 22%"},
{"g":"ancient","text":"Another saying of his was, that it was the part of wise men, before difficult circumstances arose, to provide for their not arising; but that it was the part of brave men to make the best of existing circumstances.","name":"Pittacus","src":"As reported by Diogenes Laertius, Lives I.78 (tr. C. D. Yonge)","date":"c. 600 BC","img":"gen_pittacus","pos":"50% 22%"},
{"g":"ancient","text":"When a man goes out of his house, he should consider what he is going to do: and when he comes home again he should consider what he has done.","name":"Cleobulus","src":"As reported by Diogenes Laertius, Lives I.92 (tr. C. D. Yonge)","date":"6th century BC","img":"gen_cleobulus","pos":"50% 22%"},
{"g":"ancient","text":"He only … seems to me to live, and to enjoy life, who, intent upon some employment, seeks reputation from some ennobling enterprise, or honorable pursuit.","name":"Sallust","src":"Conspiracy of Catiline 2 (tr. J. S. Watson)","date":"c. 42 BC","img":"gen_sallust","pos":"50% 22%"},
{"g":"ancient","text":"Neither natural ability without instruction nor instruction without natural ability can make the perfect artist.","name":"Vitruvius","src":"On Architecture I.1.3 (tr. M. H. Morgan, 1914)","date":"c. 25 BC","img":"gen_vitruvius","pos":"50% 22%"},
{"g":"ancient","text":"With no lie will I tinge my tale: trial is the test of men.","name":"Pindar","src":"Olympian IV, for Psaumis of Kamarina (tr. Ernest Myers)","date":"452 BC","img":"gen_pindar","pos":"50% 22%"},
{"g":"ancient","text":"It is related that he said, “I now find that I made a prosperous voyage when I was wrecked.”","name":"Zeno of Citium","src":"As reported by Diogenes Laertius, Lives VII.4, on the shipwreck that led him to philosophy (tr. C. D. Yonge)","date":"c. 300 BC","img":"gen_zeno","pos":"50% 22%"},
{"g":"ancient","text":"Cultivate truth, good faith, experience, cleverness, sociability, and industry.","name":"Pittacus","src":"As reported by Diogenes Laertius, Lives I.78 (tr. C. D. Yonge)","date":"6th century BC","img":"gen_pittacus","pos":"50% 22%"},
{"g":"ancient","text":"Be not haughty when prosperous.—Be not desponding when in difficulties.","name":"Cleobulus","src":"As reported by Diogenes Laertius, Lives I.93 (tr. C. D. Yonge)","date":"6th century BC","img":"gen_cleobulus","pos":"50% 22%"},
{"g":"ancient","text":"When some people said to him, “You are an old man, and should rest for the remainder of your life;” “Why so?” replied he, “suppose I had run a long distance, ought I to stop when I was near the end, and not rather press on?”","name":"Diogenes of Sinope","src":"As reported by Diogenes Laertius, Lives VI.34 (tr. C. D. Yonge)","date":"4th century BC","img":"gen_diogenes","pos":"50% 22%"},
{"g":"ancient","text":"Let us bend to the oars, let us make a great effort. … Be sanguine and stout-hearted and trust to time and practice.","name":"Marcus Cornelius Fronto","src":"Letter to Marcus Aurelius (tr. C. R. Haines, 1919)","date":"c. AD 143","img":"gen_marcus_cornelius_fronto","pos":"50% 22%"},
{"g":"ancient","text":"“The best wrestler,” he would say, “is not he who has learned thoroughly all the tricks and twists of the art, … but he who has well and carefully trained himself in one or two of them, and watches keenly for an opportunity of practising them.”","name":"Demetrius the Cynic","src":"As recorded by Seneca, On Benefits VII.1 (tr. Aubrey Stewart, 1887)","date":"1st century AD","img":"gen_demetrius_the_cynic","pos":"50% 22%"},
{"g":"ancient","text":"It was the custom of Sextius when the day was over, and he had betaken himself to rest, to inquire of his spirit: “What bad habit of yours have you cured today? what vice have you checked? in what respect are you better?”","name":"Quintus Sextius","src":"As recorded by Seneca, Of Anger III.36 (tr. Aubrey Stewart, 1889)","date":"1st century BC","img":"gen_quintus_sextius","pos":"50% 22%"},
{"g":"ancient","text":"It is human, he thought, to err, but divine (whether in God or man) to put the error right.","name":"Demonax","src":"As recorded by Lucian, Life of Demonax 7 (tr. H. W. and F. G. Fowler, 1905)","date":"2nd century AD","img":"gen_demonax","pos":"50% 22%"},
{"g":"ancient","text":"Many things which were considered not only difficult, but impossible at first, are, after an interval of time and practice, performed with the greatest ease.","name":"Polybius","src":"Histories X.47 (tr. E. S. Shuckburgh)","date":"2nd century BC","img":"gen_polybius","pos":"50% 22%"},
{"g":"business","text":"He that makes his pleasure be his business, will never make his business be a pleasure.","name":"Daniel Defoe","src":"The Complete English Tradesman","date":"1726","img":"gen_daniel_defoe","pos":"50% 22%"},
{"g":"business","text":"He that will keep in his business, need never fear keeping his business.","name":"Daniel Defoe","src":"The Complete English Tradesman","date":"1726","img":"gen_daniel_defoe","pos":"50% 22%"},
{"g":"business","text":"No time is given uselessly, and for nothing; time is no more to be unemployed, than it is to be ill employed.","name":"Daniel Defoe","src":"The Complete English Tradesman","date":"1726","img":"gen_daniel_defoe","pos":"50% 22%"},
{"g":"business","text":"You never gained a single inch of progress by dwelling upon miscarriages in business which you could not avoid.","name":"J. G. Holland","src":"Lessons in Life","date":"1861","img":"gen_j_g_holland","pos":"50% 22%"},
{"g":"business","text":"Do your work a little better than anyone else could do it.","name":"Frank Crane","src":"Four Minute Essays, vol. X","date":"1919","img":"gen_frank_crane","pos":"50% 22%"},
{"g":"business","text":"The first duty of a worker is to keep himself fit.","name":"Frank Crane","src":"Four Minute Essays, vol. X","date":"1919","img":"gen_frank_crane","pos":"50% 22%"},
{"g":"business","text":"The higher the quality of your work, the more necessary it is that you approach it only when you are at your best.","name":"Frank Crane","src":"Four Minute Essays, vol. X","date":"1919","img":"gen_frank_crane","pos":"50% 22%"},
{"g":"business","text":"Men who count for something do not wait for opportunities from any source—they help themselves to their opportunities.","name":"Russell H. Conwell","src":"Increasing Personal Efficiency","date":"1917","img":"russell_h_conwell","pos":"50% 22%"},
{"g":"business","text":"There is nothing that gives us greater assurance that our life-work will be thoroughly done than to habituate ourselves to do the slightest task completely.","name":"Russell H. Conwell","src":"Increasing Personal Efficiency","date":"1917","img":"russell_h_conwell","pos":"50% 22%"},
{"g":"business","text":"Do what you do with all your might. It is a good rule in anything; in sleeping, in playing, or in whatever you have in hand.","name":"Edward Everett Hale","src":"How to Do It, ch. on school life","date":"1871","img":"gen_edward_everett_hale","pos":"50% 22%"},
{"g":"business","text":"Form the habit, then, of looking at tomorrow as if you were the master of tomorrow.","name":"Edward Everett Hale","src":"How to Do It","date":"1871","img":"gen_edward_everett_hale","pos":"50% 22%"},
{"g":"business","text":"Nothing comes amiss in the great business of preparation, if it has been thoroughly well learned.","name":"Edward Everett Hale","src":"How to Do It","date":"1871","img":"gen_edward_everett_hale","pos":"50% 22%"},
{"g":"business","text":"Time is what we want most, but what, alas! we use worst.","name":"William Penn","src":"Some Fruits of Solitude, Preface","date":"1693","img":"gen_william_penn","pos":"50% 22%"},
{"g":"business","text":"The things are mighty few on earth That wishes can attain. Whate'er we want of any worth We've got to work to gain.","name":"Edgar Guest","src":"\"Results and Roses\", A Heap o' Livin'","date":"1916","img":"gen_edgar_guest","pos":"50% 22%"},
{"g":"business","text":"The job will not help you at all If you won't do the best that you can.","name":"Edgar Guest","src":"\"The Job\", Just Folks","date":"1917","img":"gen_edgar_guest","pos":"50% 22%"},
{"g":"business","text":"Let me but do my work from day to day … \"This is my work; my blessing, not my doom; Of all who live, I am the one by whom This work can best be done in the right way.\"","name":"Henry van Dyke","src":"\"Work\", The Three Best Things","date":"1911","img":"henry_van_dyke","pos":"50% 22%"},
{"g":"business","text":"There is no substitute for thorough-going, ardent, and sincere earnestness.","name":"Charles Dickens","src":"David Copperfield, ch. 42 (David Copperfield)","date":"1850","img":"dickens","pos":"50% 20%"},
{"g":"business","text":"You must be sure of two things: you must love your work, and not be always looking over the edge of it, wanting your play to begin. And the other is, you must not be ashamed of your work.","name":"George Eliot","src":"Middlemarch, ch. 56 (Caleb Garth)","date":"1872","img":"george_eliot","pos":"50% 22%"},
{"g":"business","text":"A small daily task, if it be really daily, will beat the labours of a spasmodic Hercules. It is the tortoise which always catches the hare.","name":"Anthony Trollope","src":"An Autobiography, ch. VII","date":"1883","img":"gen_anthony_trollope","pos":"50% 22%"},
{"g":"business","text":"Labour is the only price of solid fame … whatever their force of genius may be, there is no easy method of becoming a good painter.","name":"Joshua Reynolds","src":"Discourse I, at the opening of the Royal Academy","date":"1769","img":"gen_joshua_reynolds","pos":"50% 22%"},
{"g":"business","text":"It is indisputably evident that a great part of every man's life must be employed in collecting materials for the exercise of genius.","name":"Joshua Reynolds","src":"Discourse II to the students of the Royal Academy","date":"1769","img":"gen_joshua_reynolds","pos":"50% 22%"},
{"g":"business","text":"If you wish to go to the top of a building you must go up step by step; otherwise it will be impossible that you should reach the top. … And remember to acquire diligence rather than rapidity.","name":"Leonardo da Vinci","src":"Notebooks, §491 (tr. Jean Paul Richter, 1888)","date":"c. 1490–1519","img":"gen_leonardo_da_vinci","pos":"50% 22%"},
{"g":"business","text":"He that is choice of his time will be choice of his company, and choice of his actions.","name":"Jeremy Taylor","src":"Holy Living, ch. I, sect. 1 (Care of our Time)","date":"1650","img":"gen_jeremy_taylor","pos":"50% 22%"},
{"g":"business","text":"Let every man be occupied, and occupied in the highest employment of which his nature is capable.","name":"Sydney Smith","src":"Lady Holland's Memoir of the Rev. Sydney Smith, Vol. I, ch. 6 (\"Of Occupation\")","date":"1855","img":"gen_sydney_smith","pos":"50% 22%"},
{"g":"business","text":"I never got anything I didn’t work for. I never knew anyone to obtain lasting wealth without lots of hard work.","name":"Russell Sage","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_russell_sage","pos":"50% 22%"},
{"g":"business","text":"The man with the ideal, struggling to carry it out, is the successful man.","name":"Chauncey Depew","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_chauncey_depew","pos":"50% 22%"},
{"g":"business","text":"Work sharpens all his faculties and makes him thrifty; idleness makes him lazy and a spendthrift.","name":"Darius Ogden Mills","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 1)","date":"1905","img":"gen_darius_ogden_mills","pos":"50% 22%"},
{"g":"business","text":"Don’t be afraid to take a chance. … You will have your tumbles, of course, but the exercise of standing on your own legs will give you strength to get up again and push on.","name":"William Cornelius Van Horne","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_william_cornelius_van_horne","pos":"50% 22%"},
{"g":"business","text":"The man who feels no enthusiasm for his work will never accomplish anything worthwhile.","name":"William Cornelius Van Horne","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_william_cornelius_van_horne","pos":"50% 22%"},
{"g":"business","text":"No master, standing over your shoulder, can teach you more than you can observe, if you have the soul.","name":"Henry Merwin Shrady","src":"Interview in O. S. Marden (ed.), Little Visits with Great Americans (as recorded by Marden) (Vol. 2)","date":"1905","img":"gen_henry_merwin_shrady","pos":"50% 22%"},
{"g":"business","text":"Often the fear of not accomplishing what is before us is the only thing that stands in our way.","name":"Annie Payson Call","src":"The Freedom of Life","date":"1905","img":"gen_annie_payson_call","pos":"50% 22%"},
{"g":"business","text":"It is the doing of old things, Small acts that are just and right; And doing them over and over again, no matter what others say; In smiling at fate, when you want to cry, and in keeping at work when you want to play— Dear, those are the things that count.","name":"Ella Wheeler Wilcox","src":"\"The Things That Count\", Poems of Purpose","date":"1916","img":"ella_wheeler_wilcox","pos":"50% 22%"},
{"g":"business","text":"Take pains. Take trouble. Whatever you do, do thoroughly. Whatever you begin, finish.","name":"Charles Kingsley","src":"\"Work\", Town and Country Sermons, Sermon XII","date":"1861","img":"charles_kingsley","pos":"50% 22%"},
{"g":"business","text":"The leading rule for the lawyer, as for the man of every other calling, is diligence. Leave nothing for tomorrow which can be done today.","name":"Abraham Lincoln","src":"Notes for a Law Lecture","date":"c. 1850","img":"lincoln","pos":"50% 18%"},
{"g":"business","text":"Every man is proud of what he does well; and no man is proud of what he does not do well. With the former, his heart is in his work; and he will do twice as much of it with less fatigue.","name":"Abraham Lincoln","src":"Address before the Wisconsin State Agricultural Society, Milwaukee","date":"1859-09-30","img":"lincoln","pos":"50% 18%"},
{"g":"business","text":"Let what will be said or done, preserve your sang-froid immovably, and to every obstacle, oppose patience, perseverance, and soothing language.","name":"Thomas Jefferson","src":"Letter to William Short","date":"1792-03-18","img":"gen_thomas_jefferson","pos":"50% 22%"},
{"g":"business","text":"The truest lengthening of life is to live while we live, wasting no time but using every hour for the highest ends.","name":"Charles Spurgeon","src":"Faith's Checkbook, entry for June 22","date":"1888","img":"gen_charles_spurgeon","pos":"50% 22%"},
{"g":"business","text":"Whatever I have tried to do in life, I have tried with all my heart to do well; that whatever I have devoted myself to, I have devoted myself to completely; that in great aims and in small, I have always been thoroughly in earnest.","name":"Charles Dickens","src":"David Copperfield, ch. 42 (David Copperfield)","date":"1850","img":"dickens","pos":"50% 20%"},
{"g":"business","text":"There's nothing but what's bearable as long as a man can work.","name":"George Eliot","src":"Adam Bede, ch. XI (Adam Bede)","date":"1859","img":"george_eliot","pos":"50% 22%"},
{"g":"business","text":"In the elder days of Art, Builders wrought with greatest care Each minute and unseen part; For the Gods see everywhere. Let us do our work as well, Both the unseen and the seen.","name":"Henry Wadsworth Longfellow","src":"\"The Builders\", The Seaside and the Fireside","date":"1849","img":"henry_wadsworth_longfellow","pos":"50% 22%"},
{"g":"business","text":"Build today, then, strong and sure, With a firm and ample base; And ascending and secure Shall tomorrow find its place.","name":"Henry Wadsworth Longfellow","src":"\"The Builders\", The Seaside and the Fireside","date":"1849","img":"henry_wadsworth_longfellow","pos":"50% 22%"},
{"g":"business","text":"Let no act be done without a purpose, nor otherwise than according to the perfect principles of art.","name":"Marcus Aurelius","src":"Meditations IV.2 (tr. George Long)","date":"c. 170–180 AD","img":"aurelius","pos":"50% 20%"},
{"g":"business","text":"If I feel unable to labor, not because I am feeble, but because I am not in the mood, then I have the mood in my hands, to be dealt with intelligently.","name":"J. G. Holland","src":"Lessons in Life","date":"1861","img":"gen_j_g_holland","pos":"50% 22%"},
{"g":"business","text":"There ain't nowt a man can't bear if he'll only be dogged. … It's dogged as does it. It ain't thinking about it.","name":"Anthony Trollope","src":"The Last Chronicle of Barset, ch. LXI (Giles Hoggett)","date":"1867","img":"gen_anthony_trollope","pos":"50% 22%"},
{"g":"business","text":"If trade is not driven, it will not go.","name":"Daniel Defoe","src":"The Complete English Tradesman","date":"1726","img":"gen_daniel_defoe","pos":"50% 22%"},
{"g":"business","text":"It is because we do not let ourselves go, because we do not give ourselves joyously and entirely up to it, that our work overpowers us.","name":"Rabindranath Tagore","src":"Sadhana: The Realisation of Life, \"Realisation in Action\"","date":"1913","img":"rabindranath_tagore","pos":"50% 22%"},
{"g":"business","text":"Whatever be your lot, work is best for you, if you turn your misguided mind away from other men's property to your work and attend to your livelihood.","name":"Hesiod","src":"Works and Days 314–316 (tr. H. G. Evelyn-White)","date":"c. 700 BC","img":"gen_hesiod","pos":"50% 22%"},
{"g":"business","text":"The only school in which I could properly be taught was that world-wide school which awaited me, in which Toil and Hardship are the severe but noble teachers.","name":"Hugh Miller","src":"My Schools and Schoolmasters, ch. VII","date":"1854","img":"gen_hugh_miller","pos":"50% 22%"},
{"g":"business","text":"Let no hope of going, or seeing, or doing anything else, prevent your using the present time for improving yourself in whatever you find to do.","name":"Amos Lawrence","src":"Extracts from the Diary and Correspondence of the Late Amos Lawrence, letter to his son at school at Versailles","date":"1830-02-26","img":"gen_amos_lawrence","pos":"50% 22%"},
{"g":"business","text":"Let no one be discouraged by the thought of how much there is to learn. Looking back upon nearly thirty years of gardening (the earlier part of it in groping ignorance with scant means of help), I can remember no part of it that was not full of pleasure and encouragement.","name":"Gertrude Jekyll","src":"Wood and Garden, Introduction","date":"1899","img":"gen_gertrude_jekyll","pos":"50% 22%"},
{"g":"business","text":"The grand way to learn, in gardening as in all things else, is to wish to learn, and to be determined to find out—not to think that any one person can wave a wand and give the power and knowledge.","name":"Gertrude Jekyll","src":"Wood and Garden","date":"1899","img":"gen_gertrude_jekyll","pos":"50% 22%"},
{"g":"business","text":"It is the same with tools as with clothes; the familiar ease can only come of use and better acquaintance.","name":"Gertrude Jekyll","src":"Home and Garden, ch. XI (\"The Workshop\")","date":"1900","img":"gen_gertrude_jekyll","pos":"50% 22%"},
{"g":"business","text":"… I seek only to enforce the truth that great achievements are within the reach of whoever will pay their price.","name":"Horace Greeley","src":"What I Know of Farming","date":"1871","img":"gen_horace_greeley","pos":"50% 22%"},
{"g":"business","text":"Having worked hard when he must, he ought to rest and recuperate when he can.","name":"Horace Greeley","src":"What I Know of Farming","date":"1871","img":"gen_horace_greeley","pos":"50% 22%"},
{"g":"business","text":"Everyone learns by experience who steadily observes and reflects.","name":"Horace Greeley","src":"What I Know of Farming","date":"1871","img":"gen_horace_greeley","pos":"50% 22%"},
{"g":"business","text":"Whatever your position may be, do your duty in it, stoutly and perseveringly, with your eye fixed far ahead and upward.","name":"Thomas MacKellar","src":"The American Printer, \"To the Apprentice\"","date":"1866; 18th ed. 1893","img":"gen_thomas_mackellar","pos":"50% 22%"},
{"g":"business","text":"Do everything well—no slighting, no hiding defects, aiming always at perfection. Watch those who are skilful, and strive to equal and excel them.","name":"Thomas MacKellar","src":"The American Printer, \"To the Apprentice\"","date":"1866; 18th ed. 1893","img":"gen_thomas_mackellar","pos":"50% 22%"},
{"g":"business","text":"With a noble purpose as the end of all your actions, and with actions becoming your purpose, your success is merely a question of time—always provided you have some brain and abundant common sense.","name":"Thomas MacKellar","src":"The American Printer, \"To the Apprentice\"","date":"1866; 18th ed. 1893","img":"gen_thomas_mackellar","pos":"50% 22%"},
{"g":"business","text":"First, get a clear notion of what you desire to accomplish, and then in all probability you will succeed in doing it.","name":"Henry Maudslay","src":"One of his favourite maxims, as recorded by his assistant James Nasmyth, James Nasmyth, Engineer: An Autobiography, ch. 7","date":"publ. 1883","img":"gen_henry_maudslay","pos":"50% 22%"},
{"g":"business","text":"Keep a sharp look-out upon your materials; get rid of every pound of material you can do without; put to yourself the question, ‘What business has it to be there?’ Avoid complexities, and make everything as simple as possible.","name":"Henry Maudslay","src":"Maxim as recorded by his assistant James Nasmyth, James Nasmyth, Engineer: An Autobiography, ch. 7","date":"publ. 1883","img":"gen_henry_maudslay","pos":"50% 22%"},
{"g":"business","text":"Since no man can do his best work save as he uses his strongest faculties, the first duty of each is to search out the line of least resistance.","name":"Newell Dwight Hillis","src":"A Man's Value to Society","date":"1896","img":"gen_newell_dwight_hillis","pos":"50% 22%"},
{"g":"business","text":"The heights by great men reached and kept Were not attained by sudden flight, But they, while their companions slept, Were toiling upward in the night.","name":"Henry Wadsworth Longfellow","src":"\"The Ladder of Saint Augustine\", The Seaside and the Fireside","date":"1849","img":"henry_wadsworth_longfellow","pos":"50% 22%"},
{"g":"business","text":"I can imagine an easier life, but with love, health, and work I can be happy; for these three help one to do, to be, and to endure all things.","name":"Louisa May Alcott","src":"Journal, in Louisa May Alcott: Her Life, Letters, and Journals (ed. Ednah D. Cheney)","date":"1868-02","img":"alcott","pos":"50% 15%"},
{"g":"business","text":"Never trouble another for what you can do yourself.","name":"Thomas Jefferson","src":"\"A Decalogue of Canons for Observation in Practical Life\", letter to Thomas Jefferson Smith","date":"1825-02-21","img":"gen_thomas_jefferson","pos":"50% 22%"},
{"g":"business","text":"I have far more confidence in the one man who works mentally and bodily at a matter than in the six who merely talk about it.","name":"Michael Faraday","src":"Letter to John Tyndall","date":"1851-04-19","img":"gen_michael_faraday","pos":"50% 22%"},
{"g":"business","text":"Few things are impossible to diligence and skill.","name":"Samuel Johnson","src":"Rasselas, ch. XII (Imlac)","date":"1759","img":"samuel_johnson","pos":"50% 22%"},
{"g":"business","text":"Our swiftness in making use of our time ought therefore to vie with the swiftness of time itself, and we ought to drink of it as we should of a fast-running torrent which will not be always running.","name":"Seneca","src":"On the Shortness of Life (tr. Aubrey Stewart, 1889)","date":"c. 49 AD","img":"seneca","pos":"55% 30%"},
{"g":"business","text":"Possibly there is no needful occupation which is wholly unbeautiful. The beauty of work depends upon the way we meet it.","name":"Lucy Larcom","src":"A New England Girlhood","date":"1889","img":"gen_lucy_larcom","pos":"50% 22%"},
{"g":"business","text":"One day must tell another, one week certify another, one month bear witness to another of the same story, and you will acquire a habit by which the one-talent man will earn a high interest … Steady work of this sort gives a man a sane outlook on the world.","name":"William Osler","src":"A Way of Life, address to Yale students","date":"1913-04-20","img":"gen_william_osler","pos":"50% 22%"},
{"g":"business","text":"He must be for ever striving to make the piece he is at work at better than the last. …","name":"William Morris","src":"\"Making the Best of It\", Hopes and Fears for Art","date":"c. 1879","img":"gen_william_morris","pos":"50% 22%"},
{"g":"business","text":"Every job, coarse or fine, either in cutting or engraving, I did as well as I could, cheerfully.","name":"Thomas Bewick","src":"A Memoir of Thomas Bewick, Written by Himself (on his apprenticeship)","date":"publ. 1862","img":"gen_thomas_bewick","pos":"50% 22%"},
{"g":"kind","text":"It doesn't happen all at once. You become. It takes a long time.","name":"Margery Williams","src":"The Velveteen Rabbit (the Skin Horse)","date":"1922","img":"gen_margery_williams","pos":"50% 22%"},
{"g":"kind","text":"There is no joy comparable to the making of a friend, and the more resistant the material the greater the triumph.","name":"David Grayson (Ray Stannard Baker)","src":"Adventures in Contentment, ch. II \"I Buy a Farm\"","date":"1907","img":"gen_david_grayson","pos":"50% 22%"},
{"g":"kind","text":"I think that one ought to expect to find things beautiful and people interesting, not to take delight in detecting meannesses and failures.","name":"Arthur Christopher Benson","src":"From a College Window, I \"The Point of View\"","date":"1906","img":"gen_arthur_christopher_benson","pos":"50% 22%"},
{"g":"kind","text":"He is humble because he cannot reach the perfection for which he strives; he is hopeful because he gets nearer to it day by day.","name":"Arthur Christopher Benson","src":"From a College Window, VII \"Art\"","date":"1906","img":"gen_arthur_christopher_benson","pos":"50% 22%"},
{"g":"kind","text":"How common it is to hear people say that a man ought to have the courage of his opinions; how rare it is to find a man who will say that one ought to have the courage to change one's opinions.","name":"Arthur Christopher Benson","src":"From a College Window, XVII \"Habits\"","date":"1906","img":"gen_arthur_christopher_benson","pos":"50% 22%"},
{"g":"kind","text":"It is better to be honest and good … better even in this life; better by so much as being good is better than having good.","name":"Frederick William Robertson","src":"Sermons Preached at Brighton, Third Series, \"The Illusiveness of Life\"","date":"1857","img":"gen_frederick_william_robertson","pos":"50% 22%"},
{"g":"kind","text":"There is no way by which we can surround ourselves by good society so readily as by being good ourselves.","name":"J. G. Holland","src":"Lessons in Life, Lesson IV \"Reproduction in Kind\"","date":"1861","img":"gen_j_g_holland","pos":"50% 22%"},
{"g":"kind","text":"If I go to a man with my heart in my hand, I have good reason for expecting to meet a man with his heart in his hand.","name":"J. G. Holland","src":"Lessons in Life, Lesson IV \"Reproduction in Kind\"","date":"1861","img":"gen_j_g_holland","pos":"50% 22%"},
{"g":"kind","text":"It is foolish to forget the great virtues of our friend in fretful irritation at a few blemishes.","name":"Hugh Black","src":"Friendship, \"The Culture of Friendship\"","date":"1898","img":"gen_hugh_black","pos":"50% 22%"},
{"g":"kind","text":"If every evil man is a centre of contagion, every good man is a centre of healing.","name":"Hugh Black","src":"Friendship, \"The Choice of Friendship\"","date":"1898","img":"gen_hugh_black","pos":"50% 22%"},
{"g":"kind","text":"What is needed is a habit of cheerfulness, to enjoy every day as we go along; not to fret and stew all the week, and then expect to make up for it Sunday or on some holiday.","name":"Orison Swett Marden","src":"Cheerfulness as a Life Power, \"A Foreword\"","date":"1899","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"kind","text":"A good laugh makes us better friends with ourselves and everybody around us, and puts us into closer touch with what is best and brightest in our lot in life.","name":"Orison Swett Marden","src":"Cheerfulness as a Life Power, ch. I \"The Laugh Cure\"","date":"1899","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"kind","text":"Paradise is here or nowhere: you must take your joy with you or you will never find it.","name":"Orison Swett Marden","src":"Cheerfulness as a Life Power, ch. IV \"Taking Your Fun Every Day as You Do Your Work\"","date":"1899","img":"gen_orison_swett_marden","pos":"50% 22%"},
{"g":"kind","text":"If we are happy we must hold the lamp of our happiness so that its beams will fall upon the shadowed heart.","name":"J. R. Miller","src":"Making the Most of Life, ch. XI \"Other People\"","date":"1891","img":"gen_j_r_miller","pos":"50% 22%"},
{"g":"kind","text":"A flower cannot sing bird-songs, but its sweet beauty and gentle fragrance make it a blessing wherever it is seen.","name":"J. R. Miller","src":"Making the Most of Life, ch. II \"Laid on God's Altar\"","date":"1891","img":"gen_j_r_miller","pos":"50% 22%"},
{"g":"kind","text":"The true way to live is to yield to no burden; to carry the heaviest load with courage and gladness; never to let one's eyes be turned downward toward the earth, but to keep them ever lifted up to the hills.","name":"J. R. Miller","src":"Making the Most of Life, ch. VIII \"Moral Curvatures\"","date":"1891","img":"gen_j_r_miller","pos":"50% 22%"},
{"g":"kind","text":"Let a man once love, and all those difficulties which appeared opposed to love, will just be so many arguments for loving.","name":"George MacDonald","src":"Unspoken Sermons, First Series, \"Love Thy Neighbour\"","date":"1867","img":"gen_george_macdonald","pos":"50% 22%"},
{"g":"kind","text":"It is one's business to live bravely, with dignity, with faith, with generosity of consideration and good will, with love, indeed, which is the expression of the highest energy.","name":"Lilian Whiting","src":"The Life Radiant, \"The Golden Age Lies Onward\"","date":"1903","img":"gen_lilian_whiting","pos":"50% 22%"},
{"g":"kind","text":"Every day is a new and definite re-entrance upon life. Nor is it worthwhile to linger too much on the mistakes, the errors of yesterday.","name":"Lilian Whiting","src":"The Life Radiant, \"The Nectar of the Hour\"","date":"1903","img":"gen_lilian_whiting","pos":"50% 22%"},
{"g":"kind","text":"Life was meant to be uncertain … no man can tell what a day will bring forth, and … it is the part of wisdom to be prepared for disappointments and grateful for all kinds of small mercies.","name":"Henry van Dyke","src":"Fisherman's Luck, ch. I \"Fisherman's Luck\"","date":"1899","img":"henry_van_dyke","pos":"50% 22%"},
{"g":"kind","text":"Dance, my heart! dance today with joy. The strains of love fill the days and the nights with music, and the world is listening to its melodies.","name":"Kabir","src":"Songs of Kabir, XXXII (tr. Rabindranath Tagore, 1915)","date":"15th century","img":"kabir","pos":"50% 22%"},
{"g":"kind","text":"I have stilled my restless mind, and my heart is radiant … Living in bondage, I have set myself free: I have broken away from the clutch of all narrowness.","name":"Kabir","src":"Songs of Kabir, XLVIII (tr. Rabindranath Tagore, 1915)","date":"15th century","img":"kabir","pos":"50% 22%"},
{"g":"kind","text":"Remember then: there is only one time that is important—Now! It is the most important time because it is the only time when we have any power.","name":"Leo Tolstoy","src":"\"Three Questions\" (the hermit), in What Men Live By and Other Tales, tr. Louise and Aylmer Maude","date":"1903","img":"leo_tolstoy","pos":"50% 22%"},
{"g":"kind","text":"Resolve to be thyself; and know, that he Who finds himself loses his misery!","name":"Matthew Arnold","src":"\"Self-Dependence\", Poems","date":"1852","img":"gen_matthew_arnold","pos":"50% 22%"},
{"g":"kind","text":"Only that day dawns to which we are awake. There is more day to dawn. The sun is but a morning star.","name":"Henry David Thoreau","src":"Walden, \"Conclusion\"","date":"1854","img":"thoreau","pos":"50% 20%"},
{"g":"kind","text":"I say to any man or woman, Let your soul stand cool and composed before a million universes.","name":"Walt Whitman","src":"Song of Myself, 48, Leaves of Grass","date":"1892 ed.","img":"whitman","pos":"50% 12%"},
{"g":"kind","text":"The sage does not accumulate (for himself). The more that he expends for others, the more does he possess of his own; the more that he gives to others, the more does he have himself.","name":"Laozi","src":"Tao Te Ching, ch. 81 (tr. James Legge)","date":"c. 4th century BC","img":"laozi","pos":"50% 30%"},
{"g":"kind","text":"Is virtue a thing remote? I wish to be virtuous, and lo! virtue is at hand.","name":"Confucius","src":"Analects VII.29 (tr. James Legge)","date":"c. 5th century BC","img":"confucius","pos":"50% 30%"},
{"g":"kind","text":"Your friend is your needs answered. He is your field which you sow with love and reap with thanksgiving.","name":"Kahlil Gibran","src":"The Prophet, On Friendship","date":"1923","img":"kahlil_gibran","pos":"50% 22%"},
{"g":"kind","text":"Give thanks for nights spent in good company, And take the gifts a tranquil mind may bring; No heart is dark when the kind moon doth shine, And grass-grown river-banks are fair to see.","name":"Hafiz","src":"Divan, XL (tr. Gertrude Bell)","date":"14th century","img":"hafiz","pos":"50% 22%"},
{"g":"kind","text":"All are architects of Fate, Working in these walls of Time; Some with massive deeds and great, Some with ornaments of rhyme. Nothing useless is, or low; Each thing in its place is best.","name":"Henry Wadsworth Longfellow","src":"\"The Builders\"","date":"1849","img":"henry_wadsworth_longfellow","pos":"50% 22%"},
{"g":"kind","text":"Do not suffer life to stagnate: it will grow muddy for want of motion; commit yourself again to the current of the world.","name":"Samuel Johnson","src":"Rasselas, ch. 35 (Imlac)","date":"1759","img":"samuel_johnson","pos":"50% 22%"},
{"g":"kind","text":"Be grateful for the growing trees, the roses soon to bloom, The tenderness of kindly hearts that shared your days of gloom; Be grateful for the morning dew, the grass beneath your feet.","name":"Edgar Guest","src":"\"Gratitude\", A Heap o' Livin'","date":"1916","img":"gen_edgar_guest","pos":"50% 22%"},
{"g":"kind","text":"Oh, you'll not be any poorer if you smile along your way, And your lot will not be harder for the kindly things you say.","name":"Edgar Guest","src":"\"It Isn't Costly\", A Heap o' Livin'","date":"1916","img":"gen_edgar_guest","pos":"50% 22%"},
{"g":"kind","text":"We should deal with ourselves … as gently as we would with a friend, excepting that we can tell the truth to ourselves more plainly than we can to most friends.","name":"Annie Payson Call","src":"The Freedom of Life, ch. IV \"Hurry, Worry, and Irritability\"","date":"1905","img":"gen_annie_payson_call","pos":"50% 22%"},
{"g":"kind","text":"If we want to avoid hurry we must get the habit of hurry out of our brains, and cut ourselves off, patiently and kindly, from the atmosphere of hurry about us.","name":"Annie Payson Call","src":"The Freedom of Life, ch. IV \"Hurry, Worry, and Irritability\"","date":"1905","img":"gen_annie_payson_call","pos":"50% 22%"},
{"g":"kind","text":"For the main growth of our lives … we must be steadily patient, content to aim in the true direction day by day, hour by hour, minute by minute.","name":"Annie Payson Call","src":"The Freedom of Life, ch. VI \"Self-Consciousness\"","date":"1905","img":"gen_annie_payson_call","pos":"50% 22%"},
{"g":"kind","text":"There is no living thing that is not afraid when it faces danger. The True courage is in facing danger when you are afraid, and that kind of courage you have in plenty.","name":"L. Frank Baum","src":"The Wonderful Wizard of Oz, ch. 15 (Oz, to the Lion)","date":"1900","img":"l_frank_baum","pos":"50% 22%"},
{"g":"kind","text":"We live by Admiration, Hope, and Love; And, even as these are well and wisely fixed, In dignity of being we ascend.","name":"William Wordsworth","src":"The Excursion, Book IV \"Despondency Corrected\" (the Wanderer)","date":"1814","img":"william_wordsworth","pos":"50% 22%"},
{"g":"kind","text":"There are dark shadows on the earth, but its lights are stronger in the contrast.","name":"Charles Dickens","src":"The Pickwick Papers, ch. LVII","date":"1837","img":"dickens","pos":"50% 20%"},
{"g":"kind","text":"You answer questions courageously; and he who has courage can become a good travelling companion, even if he is ignorant in the beginning.","name":"Selma Lagerlöf","src":"The Wonderful Adventures of Nils, \"Akka from Kebnekaise\" (Akka), tr. Velma Swanston Howard (1907)","date":"1906","img":"gen_selma_lagerlof","pos":"50% 22%"},
{"g":"kind","text":"The consciousness of the darkness in one and around one brings the longing for light. And then the light dawns; through mist and fog, perhaps, but enough to pick one's way by.","name":"Thomas Hughes","src":"True Manliness (selections from his writings), LXVII","date":"1880","img":"gen_thomas_hughes","pos":"50% 22%"},
{"g":"kind","text":"You get to know the sun's light better and better, and to keep out of the blind alleys; and I am surer and surer every day that there's always sunlight enough for every honest fellow, and a good sound road under his feet, if he will only step out on it.","name":"Thomas Hughes","src":"True Manliness (selections from his writings), LXVIII","date":"1880","img":"gen_thomas_hughes","pos":"50% 22%"},
{"g":"kind","text":"Join the whole creation of animate things in a deep, heartfelt joy that you are alive, that you see the sun, that you are in this glorious earth which nature has made so beautiful, and which is yours to conquer and to enjoy.","name":"William Osler","src":"A Way of Life, address to Yale students","date":"20 April 1913","img":"gen_william_osler","pos":"50% 22%"},
{"g":"kind","text":"The quiet life in day-tight compartments will help you to bear your own and others' burdens with a light heart.","name":"William Osler","src":"A Way of Life, address to Yale students","date":"20 April 1913","img":"gen_william_osler","pos":"50% 22%"},
{"g":"kind","text":"To every man there openeth A Way, and Ways, and a Way … And every man decideth The Way his soul shall go.","name":"John Oxenham","src":"\"The Ways\", Bees in Amber","date":"1913","img":"gen_john_oxenham","pos":"50% 22%"},
{"g":"kind","text":"Let thy house be a meeting-place for the wise; cover thyself with the dust of their feet, and drink in their words with thirst.","name":"Jose ben Joezer","src":"Pirke Avot 1:4 (tr. Joseph I. Gorfinkle)","date":"c. 2nd century BC","img":"gen_jose_ben_joezer","pos":"50% 22%"},
{"g":"kind","text":"Calmness of mind is one of the beautiful jewels of wisdom. It is the result of long and patient effort in self-control.","name":"James Allen","src":"As a Man Thinketh, \"Serenity\"","date":"1903","img":"james_allen","pos":"50% 22%"},
{"g":"kind","text":"It is well to believe that there needs but a little more thought, a little more courage, more love, more devotion to life, a little more eagerness, one day to fling open wide the portals of joy and of truth.","name":"Maurice Maeterlinck","src":"Wisdom and Destiny (tr. Alfred Sutro), §2","date":"1898","img":"gen_maurice_maeterlinck","pos":"50% 22%"},
{"g":"kind","text":"Happiness is not a matter of events; it depends upon the tides of the mind.","name":"Alice Meynell","src":"\"The Rhythm of Life\", The Rhythm of Life and Other Essays","date":"1893","img":"gen_alice_meynell","pos":"50% 22%"},
{"g":"kind","text":"There are pioneer souls that blaze their paths Where highways never ran: But let me live by the side of the road And be a friend to man.","name":"Sam Walter Foss","src":"\"The House by the Side of the Road\"","date":"1898","img":"gen_sam_walter_foss","pos":"50% 22%"},
{"g":"kind","text":"Who would have thought my shrivelled heart Could have recovered greenness?","name":"George Herbert","src":"\"The Flower\", The Temple, ll. 8–9","date":"1633","img":"gen_george_herbert","pos":"50% 22%"},
{"g":"kind","text":"To show to all your kindness, it behoves: There's none so small but you his aid may need.","name":"Jean de La Fontaine","src":"Fables, Book II, XI \"The Lion and the Rat\" (tr. Elizur Wright, 1841)","date":"1668","img":"gen_jean_de_la_fontaine","pos":"50% 22%"},
{"g":"kind","text":"Friendship is held to be the severest test of character. … To have a friend, and to be true under any and all trials, is the mark of a man!","name":"Charles Eastman (Ohiyesa)","src":"The Soul of the Indian, ch. II \"The Family Altar\"","date":"1911","img":"charles_eastman","pos":"50% 22%"},
{"g":"history","text":"The only way I can keep up my spirits is by resolutely resisting all disposition to repine, and by fighting perseveringly against all the obstacles that hinder the progress of art.","name":"Samuel Morse","src":"Letter, in Samuel F. B. Morse, His Letters and Journals, ed. E. L. Morse (1914), vol. II, ch. XXI","date":"1833","img":"gen_samuel_morse","pos":"50% 22%"},
{"g":"history","text":"If you get a job or a trouble that seems to you to be too big for you, don't shirk it: smile, think out a way by which you might get successfully through with it, and then go at it.","name":"Robert Baden-Powell","src":"Scouting for Boys, Camp Fire Yarn on endurance and resourcefulness","date":"1908","img":"gen_robert_baden_powell","pos":"50% 22%"},
{"g":"history","text":"If you are in the habit of taking things cheerfully, you will very seldom find yourself in serious trouble, because if a difficulty or annoyance or danger seems very great, you will, if you are wise, force yourself to laugh at it.","name":"Robert Baden-Powell","src":"Scouting for Boys, Camp Fire Yarn on chivalry","date":"1908","img":"gen_robert_baden_powell","pos":"50% 22%"},
{"g":"history","text":"He who seeks, finds, if he does not lose heart.","name":"Alfred Thayer Mahan","src":"From Sail to Steam: Recollections of Naval Life, ch. XI","date":"1907","img":"gen_alfred_thayer_mahan","pos":"50% 22%"},
{"g":"history","text":"If you think that you are bound, you remain bound; you make your own bondage. If you realize that you are free, you are free this moment.","name":"Swami Vivekananda","src":"Jnâna Yoga, Part II, lecture III: Sânkhya and Advaita (New York lectures, 1896; publ. 1907)","date":"1896","img":"gen_swami_vivekananda","pos":"50% 22%"},
{"g":"history","text":"The art of war teaches us to rely not on the likelihood of the enemy's not coming, but on our own readiness to receive him; not on the chance of his not attacking, but rather on the fact that we have made our position unassailable.","name":"Sun Tzu","src":"The Art of War, ch. VIII §11 (tr. Lionel Giles, 1910)","date":"c. 5th century BC","img":"suntzu","pos":"50% 20%"},
{"g":"history","text":"No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the human spirit.","name":"Helen Keller","src":"Optimism: An Essay, Part I","date":"1903","img":"keller","pos":"50% 20%"},
{"g":"history","text":"I know not how to aid you, save in the assurance of one of mature age, and much severe experience, that you cannot fail if you resolutely determine that you will not.","name":"Abraham Lincoln","src":"Letter to George C. Latham, 22 July 1860 (Collected Works, ed. Basler, vol. 4, p. 4)","date":"1860-07-22","img":"lincoln","pos":"50% 18%"},
{"g":"history","text":"Many a man is handicapped in his course by a cursed combination of retro- and intro-spection, the mistakes of yesterday paralysing the efforts of today.","name":"William Osler","src":"A Way of Life, address to Yale students, 20 April 1913","date":"1913-04-20","img":"gen_william_osler","pos":"50% 22%"},
{"g":"history","text":"Concentration is an art of slow acquisition, but little by little the mind is accustomed to habits of slow eating and careful digestion.","name":"William Osler","src":"A Way of Life, address to Yale students, 20 April 1913","date":"1913-04-20","img":"gen_william_osler","pos":"50% 22%"},
{"g":"history","text":"This conviction of the solvability of every mathematical problem is a powerful incentive to the worker. We hear within us the perpetual call: There is the problem. Seek its solution.","name":"David Hilbert","src":"Mathematical Problems, lecture to the International Congress of Mathematicians, Paris, 1900 (tr. Mary Winston Newson, 1902)","date":"1900-08-08","img":"gen_david_hilbert","pos":"50% 22%"},
{"g":"history","text":"That which made me succeed with the bicycle was precisely what had gained me a measure of success in life … the persistence of will that held me to my task, and the patience that was willing to begin again when the last stroke had failed.","name":"Frances Willard","src":"A Wheel Within a Wheel: How I Learned to Ride the Bicycle","date":"1895","img":"gen_frances_willard","pos":"50% 22%"},
{"g":"history","text":"The best gains that we make come to us after an interval of rest which follows strenuous endeavor.","name":"Frances Willard","src":"A Wheel Within a Wheel: How I Learned to Ride the Bicycle","date":"1895","img":"gen_frances_willard","pos":"50% 22%"},
{"g":"history","text":"Every obstacle which has ever been placed in my way, whether physical or mental … has ultimately acted as a spur to the determination to accomplish the fixed purpose of my life.","name":"Robert Peary","src":"The North Pole, ch. II","date":"1910","img":"gen_robert_peary","pos":"50% 22%"},
{"g":"history","text":"I have found the only safe plan to be to stick to the truth and let the house come down if it must.","name":"Jacob Riis","src":"The Making of an American, ch. II","date":"1901","img":"gen_jacob_riis","pos":"50% 22%"},
{"g":"history","text":"To be bright and cheerful often requires an effort; there is a certain art in keeping ourselves happy; and in this respect, as in others, we require to watch over and manage ourselves, almost as if we were somebody else.","name":"John Lubbock","src":"The Pleasures of Life, Part I, ch. I: The Duty of Happiness","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"history","text":"We must not, indeed, be discouraged if success be slow in coming, nor puffed up if it comes quickly.","name":"John Lubbock","src":"The Pleasures of Life, Part I, ch. II: The Happiness of Duty","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"history","text":"There is hardly anyone from whom we may not learn much, if only they will trouble themselves to tell us.","name":"John Lubbock","src":"The Pleasures of Life, Part I","date":"1887","img":"gen_john_lubbock","pos":"50% 22%"},
{"g":"history","text":"Not a moment must be lost, every instant must be spent in study.","name":"Marie Bashkirtseff","src":"Journal, in Marie Bashkirtseff (From Childhood to Girlhood), tr. Mary J. Safford, 1889","date":"1873-03-14","img":"gen_marie_bashkirtseff","pos":"50% 22%"},
{"g":"history","text":"It is a very common fault with men to give in to trouble or fear long before there is any necessity. They often give up working because they don't get success all at once, and probably if they stuck to it a little longer, success would come.","name":"Robert Baden-Powell","src":"Scouting for Boys, Camp Fire Yarn on chivalry (Fortitude)","date":"1908","img":"gen_robert_baden_powell","pos":"50% 22%"},
{"g":"history","text":"Do not be discouraged—like every other habit, the acquisition takes time, and the way is one you must find for yourselves.","name":"William Osler","src":"A Way of Life, address to Yale students, 20 April 1913","date":"1913-04-20","img":"gen_william_osler","pos":"50% 22%"},
{"g":"history","text":"By means of industry and perseverance you will rise higher and higher.","name":"Robert Schumann","src":"Advice to Young Musicians (Musikalische Haus- und Lebensregeln), tr. Henry Hugo Pierson (1860)","date":"1850","img":"gen_robert_schumann","pos":"50% 22%"},
{"g":"history","text":"One thing life has taught me: if you are interested, you never have to look for new interests. They come to you. … All you need to do is to be curious, receptive, eager for experience.","name":"Eleanor Roosevelt","src":"You Learn by Living (1960), p. 14","date":"1960","img":"gen_eleanor_roosevelt","pos":"50% 22%"},
{"g":"history","text":"Life was meant to be lived, and curiosity must be kept alive. One must never, for whatever reason, turn his back on life.","name":"Eleanor Roosevelt","src":"The Autobiography of Eleanor Roosevelt (1961), Preface, p. xix","date":"December 1960","img":"gen_eleanor_roosevelt","pos":"50% 22%"},
{"g":"history","text":"The improvement of idle moments is an accomplishment of itself, as many a retired business man has found out too late.","name":"Alfred Thayer Mahan","src":"From Sail to Steam: Recollections of Naval Life (1907)","date":"1907","img":"gen_alfred_thayer_mahan","pos":"50% 22%"},
{"g":"history","text":"It is a pleasure sometimes to be out in dirty weather on a lee shore; it permits you to devote all your energies to accomplishing something.","name":"Wilfred Grenfell","src":"A Labrador Doctor: The Autobiography of Wilfred Thomason Grenfell (1919), ch. XV","date":"1919","img":"gen_wilfred_grenfell","pos":"50% 22%"},
{"g":"history","text":"Few men during their lifetime come anywhere near exhausting the resources dwelling within them. There are deep wells of strength that are never used.","name":"Richard E. Byrd","src":"Alone (1938), ch. 7","date":"1938","img":"gen_richard_e_byrd","pos":"50% 22%"},
{"g":"history","text":"I never fail to note down as soon as possible everything that I wish not to forget.","name":"Joseph Priestley","src":"Memoirs of Dr. Joseph Priestley, written by himself (to 1795; publ. 1806)","date":"1795","img":"gen_joseph_priestley","pos":"50% 22%"},
{"g":"history","text":"It seemed to us that the main reason why the problem had remained so long unsolved was that no one had been able to obtain any adequate practice.","name":"Wilbur Wright","src":"Some Aeronautical Experiments, address to the Western Society of Engineers, Chicago, in The Early History of the Airplane (1922)","date":"1901-09-18","img":"gen_wilbur_wright","pos":"50% 22%"},
{"g":"history","text":"We soon passed from the reading to the thinking, and finally to the working stage.","name":"Wilbur Wright","src":"Some Aeronautical Experiments, address to the Western Society of Engineers, Chicago, in The Early History of the Airplane (1922)","date":"1901-09-18","img":"gen_wilbur_wright","pos":"50% 22%"},
{"g":"history","text":"At first my resolutions faded like snow in April, but in a little while I conquered my weakness and felt a pleasure I never knew before—that of doing as I willed.","name":"Nikola Tesla","src":"My Inventions, ch. I: My Early Life (Electrical Experimenter, 1919)","date":"1919","img":"gen_nikola_tesla","pos":"50% 22%"},
{"g":"history","text":"A man, as a general rule, owes very little to what he is born with — a man is what he makes of himself.","name":"Alexander Graham Bell","src":"Interview, as recorded by Orison Swett Marden in How They Succeeded (1901), ch. 2","date":"1901","img":"gen_alexander_graham_bell","pos":"50% 22%"},
{"g":"history","text":"… We had to give it up for that day, and went to bed much discouraged. However, after a night's rest, we got up the next morning in better spirits and resolved to try again.","name":"Orville Wright","src":"How We Made the First Flight (1913), in The Early History of the Airplane (1922)","date":"1913","img":"gen_orville_wright","pos":"50% 22%"},
{"g":"history","text":"The greatest happiness is the happiness that comes as a by-product of striving to do what must be done, even though sorrow is met in the doing.","name":"Theodore Roosevelt","src":"Theodore Roosevelt: An Autobiography (1913), ch. IX: Outdoors and Indoors","date":"1913","img":"roosevelt","pos":"50% 22%"},
{"g":"history","text":"Nothing ever comes to me, that is worth having, except as the result of hard work.","name":"Booker T. Washington","src":"Up from Slavery (1901), ch. XII: Raising Money","date":"1901","img":"washington","pos":"50% 15%"},
{"g":"history","text":"I think that science would never have achieved much progress if it had always imagined unknown obstacles hidden round every corner. At least we may peer gingerly round the corner, and perhaps we shall find there is nothing very formidable after all.","name":"Arthur Eddington","src":"Stars and Atoms (1927), Lecture 1","date":"1927","img":"gen_arthur_eddington","pos":"50% 22%"},
{"g":"history","text":"Be fit for more than the thing you are now doing. Let everyone know that you have a reserve in yourself — that you have more power than you are now using. If you are not too large for the place you occupy, you are too small for it.","name":"James A. Garfield","src":"\"Elements of Success\", address at the Spencerian Business College, Washington, in President Garfield and Education, comp. B. A. Hinsdale (1882), p. 327","date":"1869-07-29","img":"gen_james_a_garfield","pos":"50% 22%"},
{"g":"history","text":"If hard work is not another name for talent, it is the best possible substitute for it.","name":"James A. Garfield","src":"\"College Education\", address before the literary societies of the Eclectic Institute, Hiram, in President Garfield and Education (1882)","date":"1867-06","img":"gen_james_a_garfield","pos":"50% 22%"},
{"g":"history","text":"One can never consent to creep when one feels an impulse to soar.","name":"Helen Keller","src":"Address to the American Association to Promote the Teaching of Speech to the Deaf, Mt. Airy, Philadelphia","date":"1896-07-08","img":"keller","pos":"50% 20%"},
{"g":"history","text":"Things don't turn up in this world until somebody turns them up.","name":"James A. Garfield","src":"Speech in the House of Representatives, June 1874, in E. E. Brown, The Life and Public Services of James A. Garfield (1881), p. 437","date":"1874-06","img":"gen_james_a_garfield","pos":"50% 22%"},
{"g":"history","text":"Mere intelligence is still not courage, for we often see the cleverest people devoid of resolution.","name":"Carl von Clausewitz","src":"On War, Book I, ch. III: The Genius for War (tr. J. J. Graham, 1873)","date":"1832","img":"gen_carl_von_clausewitz","pos":"50% 22%"},
{"g":"business","text":"Genuine activity, which is not mere sport, has the property of becoming interesting as soon as a man becomes seriously absorbed in it.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Work\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"business","text":"Other people wait for some special inspiration, which in reality is much more likely to come by means of, or in the midst of, work itself.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Work\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"business","text":"Do your work, as a rule, for each day. The morrow will come in its own time, and with it will come the strength for the morrow.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Work\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"business","text":"He who tries to do too much usually accomplishes too little.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Work\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"business","text":"As a man trains himself to the habit of work, the resistance of idleness constantly diminishes until at last work becomes a necessity.","name":"Carl Hilty","src":"Happiness, tr. Francis Greenwood Peabody (1903), \"The Art of Work\"","date":"1891","img":"gen_carl_hilty","pos":"50% 22%"},
{"g":"business","text":"It is not the plan, it is the man behind the plan that is responsible for the success.","name":"William Crosbie Hunter","src":"Dollars and Sense","date":"1907","img":"gen_william_crosbie_hunter","pos":"50% 22%"},
{"g":"business","text":"Do not regard competition as hurtful to your business, but rather look upon it as a pace-maker for you.","name":"William Crosbie Hunter","src":"Dollars and Sense","date":"1907","img":"gen_william_crosbie_hunter","pos":"50% 22%"},
{"g":"business","text":"The man that reaches the top is the gritty, plucky, hard worker and never the timid, uncertain, slow worker.","name":"William Walker Atkinson","src":"The Power of Concentration (as Theron Q. Dumont), Lesson I","date":"c. 1916–1918","img":"gen_william_walker_atkinson","pos":"50% 22%"},
{"g":"business","text":"The secret of success is to try always to improve yourself no matter where you are or what your position.","name":"William Walker Atkinson","src":"The Power of Concentration (as Theron Q. Dumont), Lesson I","date":"c. 1916–1918","img":"gen_william_walker_atkinson","pos":"50% 22%"},
{"g":"business","text":"Art requires resolute and unremitting industry, as well as incessant observation.","name":"Vincent van Gogh","src":"Letter to Theo, The Hague (tr. Anthony M. Ludovici, 1912)","date":"21 Jul 1882","img":"gen_vincent_van_gogh","pos":"50% 22%"},
{"g":"business","text":"The busier I am the better; I prefer a piece of work that is a failure to inactivity.","name":"Vincent van Gogh","src":"The Letters of a Post-Impressionist, tr. Anthony M. Ludovici (1912), letter to Theo","date":"c. 1881–1890","img":"gen_vincent_van_gogh","pos":"50% 22%"},
{"g":"business","text":"There is an essential meanness in the wish to get the better of anyone. The only competition worthy of a wise man is with himself.","name":"Washington Allston","src":"Lectures on Art, \"Aphorisms: Sentences Written by Mr. Allston on the Walls of His Studio\"","date":"1850","img":"gen_washington_allston","pos":"50% 22%"},
{"g":"business","text":"Concentration is the first letter in the alphabet of success.","name":"Josef Hofmann","src":"Piano Playing, with Piano Questions Answered, \"Practice\"","date":"1908","img":"gen_josef_hofmann","pos":"50% 22%"},
{"g":"business","text":"The greatest persistence cannot turn a bad habit into a virtue.","name":"Josef Hofmann","src":"Piano Playing, with Piano Questions Answered, \"Practice\"","date":"1908","img":"gen_josef_hofmann","pos":"50% 22%"},
{"g":"business","text":"To find your right place, to do your right work, here is the basis of all virtue, joy, and growth.","name":"Charlotte Perkins Gilman","src":"Human Work, ch. XVII \"The True Position\"","date":"1904","img":"gen_charlotte_perkins_gilman","pos":"50% 22%"},
{"g":"business","text":"No one is born a great cook, one learns by doing.","name":"Julia Child","src":"My Life in France (with Alex Prud'homme)","date":"2006","img":"gen_julia_child","pos":"50% 22%"},
{"g":"business","text":"One of the secrets, and pleasures, of cooking is to learn to correct something if it goes awry; and one of the lessons is to grin and bear it if it cannot be fixed.","name":"Julia Child","src":"My Life in France (with Alex Prud'homme)","date":"2006","img":"gen_julia_child","pos":"50% 22%"},
{"g":"business","text":"This is my invariable advice to people: Learn how to cook — try new recipes, learn from your mistakes, be fearless, and above all have fun!","name":"Julia Child","src":"My Life in France (with Alex Prud'homme)","date":"2006","img":"gen_julia_child","pos":"50% 22%"},
{"g":"business","text":"There is no more dangerous illusion than the belief that one can get something for nothing.","name":"Bernard Baruch","src":"Baruch: My Own Story","date":"1957","img":"gen_bernard_baruch","pos":"50% 22%"},
{"g":"business","text":"The key is not to prioritize what's on your schedule, but to schedule your priorities.","name":"Stephen Covey","src":"The 7 Habits of Highly Effective People, p. 161","date":"1989","img":"gen_stephen_covey","pos":"50% 22%"},
{"g":"business","text":"Management is efficiency in climbing the ladder of success; leadership determines whether the ladder is leaning against the right wall.","name":"Stephen Covey","src":"The 7 Habits of Highly Effective People, p. 101","date":"1989","img":"gen_stephen_covey","pos":"50% 22%"},
{"g":"business","text":"To learn and not to do is really not to learn. To know and not to do is really not to know.","name":"Stephen Covey","src":"The 7 Habits of Highly Effective People, p. 12","date":"1989","img":"gen_stephen_covey","pos":"50% 22%"},
{"g":"business","text":"The true workman is quick to turn to advantage all the inconveniences of a situation.","name":"Judith Cladel","src":"Rodin: The Man and His Art, tr. S. K. Star","date":"1917","img":"gen_judith_cladel","pos":"50% 22%"},
{"g":"business","text":"It is better, whether one is working with bricks or souls, to build nobly than to build perfectly.","name":"Nella Braddy","src":"The Book of Business Etiquette, ch. I \"The American Business Man\"","date":"1922","img":"gen_nella_braddy","pos":"50% 22%"},
{"g":"business","text":"The only way to learn to do a job is to do it, and the only way to succeed is to work.","name":"Nella Braddy","src":"The Book of Business Etiquette, ch. IV \"Personality\"","date":"1922","img":"gen_nella_braddy","pos":"50% 22%"},
{"g":"business","text":"There is nothing so fatal to good work as that flabby spirit under which some weak men try to hide their inefficiency—the spirit of \"What's the use?\"","name":"Gifford Pinchot","src":"The Training of a Forester, \"Personal Equipment\"","date":"1914","img":"gen_gifford_pinchot","pos":"50% 22%"},
{"g":"business","text":"Work well done is a doorway to whatever good things we most desire.","name":"Marjory MacMurchy","src":"The Canadian Girl at Work, \"Thinking about Work\"","date":"1919","img":"gen_marjory_macmurchy","pos":"50% 22%"},
{"g":"business","text":"Nothing so increases the value of a worker as to be able to fill a number of different positions.","name":"Marjory MacMurchy","src":"The Canadian Girl at Work, \"The Girl Who Works in a Factory\"","date":"1919","img":"gen_marjory_macmurchy","pos":"50% 22%"},
{"g":"business","text":"The best workers keep on learning year by year.","name":"Marjory MacMurchy","src":"The Canadian Girl at Work, \"The Girl at Work in an Office\"","date":"1919","img":"gen_marjory_macmurchy","pos":"50% 22%"},
{"g":"business","text":"With engineering, I view this year's failure as next year's opportunity to try it again. Failures are not something to be avoided. You want to have them happen as quickly as you can so you can make progress rapidly.","name":"Gordon Moore","src":"Interview with Laura Schmitt, Ingenuity vol. 5 no. 2","date":"May 2000","img":"gen_gordon_moore","pos":"50% 22%"},
{"g":"business","text":"Tell yourself every morning as you go to work that you love your job. Think of it as interesting, even fascinating. By so doing you will ultimately get enthusiastic about your work — and you will undoubtedly do a better job.","name":"Norman Vincent Peale","src":"Power of the Plus Factor, p. 149","date":"1987","img":"gen_norman_vincent_peale","pos":"50% 22%"},
{"g":"business","text":"When obstacles or difficulties arise, the positive thinker takes them as creative opportunities. He welcomes the challenge of a tough problem and looks for ways to turn it to advantage.","name":"Norman Vincent Peale","src":"Have a Great Day, p. 2","date":"1986","img":"gen_norman_vincent_peale","pos":"50% 22%"},
{"g":"business","text":"A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be.","name":"Abraham Maslow","src":"\"A Theory of Human Motivation\", Psychological Review vol. 50 no. 4, p. 382","date":"1943","img":"gen_abraham_maslow","pos":"50% 22%"},
{"g":"business","text":"No one of us can do everything, but each of us can do something, and if we work together the aggregate of these somethings will be very considerable.","name":"Theodore Roosevelt","src":"\"Christian Citizenship\", address to the YMCA, Carnegie Hall, New York","date":"30 December 1900","img":"roosevelt","pos":"50% 22%"},
{"g":"business","text":"No big challenge has ever been solved, and no lasting improvement has ever been achieved, unless people dare to try something different.","name":"Tim Cook","src":"Duke University commencement address, as quoted in Entrepreneur, 24 May 2018","date":"May 2018","img":"gen_tim_cook","pos":"50% 22%"},
{"g":"business","text":"It's not so important what you work on, so long as you're not wasting your time. Work on things that interest you and increase your options, and worry later about which you'll take.","name":"Paul Graham","src":"\"What You'll Wish You'd Known\" (essay)","date":"January 2005","img":"gen_paul_graham","pos":"50% 22%"},
{"g":"business","text":"Time represents your only chance, your only wealth, your only possibility for achieving anything.","name":"Arthur Brisbane","src":"Editorials from the Hearst Newspapers, \"There Should Be a Monument to Time\"","date":"1906","img":"gen_arthur_brisbane","pos":"50% 22%"},
{"g":"business","text":"There is no greater mistake than skimping your work—because you are working for another, and fear you may do too much.","name":"Arthur Brisbane","src":"Editorials from the Hearst Newspapers, \"Your Work Is Your Brain's Gymnasium\"","date":"1906","img":"gen_arthur_brisbane","pos":"50% 22%"},
{"g":"business","text":"Make up your mind that for your own sake you will make every effort your best effort.","name":"Arthur Brisbane","src":"Editorials from the Hearst Newspapers, \"Merely Working 'Fairly Well' Is Not Enough\"","date":"1906","img":"gen_arthur_brisbane","pos":"50% 22%"},
{"g":"business","text":"The habit of years cannot be thrown off in a day.","name":"Josef Hofmann","src":"Piano Playing, with Piano Questions Answered, \"Position of the Fingers\"","date":"1908","img":"gen_josef_hofmann","pos":"50% 22%"},
{"g":"business","text":"Happiness is not mere pleasure, not the outcome of wealth. It is the result of active work rather than passive enjoyment of pleasure.","name":"Robert Baden-Powell","src":"How to Be Happy Though Rich or Poor","date":"1930","img":"gen_robert_baden_powell","pos":"50% 22%"},
{"g":"business","text":"Character counts above all things in the business world.","name":"William Crosbie Hunter","src":"Dollars and Sense","date":"1907","img":"gen_william_crosbie_hunter","pos":"50% 22%"},
{"g":"business","text":"Diligent study, even if it seem to be fruitless, leads to familiarity with nature and to a thorough knowledge of things.","name":"Vincent van Gogh","src":"The Letters of a Post-Impressionist, tr. Anthony M. Ludovici (1912), letter to Theo","date":"c. 1881–1890","img":"gen_vincent_van_gogh","pos":"50% 22%"},
{"g":"kind","text":"I am looking forward to next summer with more hope than ever in spite of my many failures.","name":"Elizabeth von Arnim","src":"Elizabeth and Her German Garden","date":"1898","img":"gen_elizabeth_von_arnim","pos":"50% 22%"},
{"g":"kind","text":"The measure of our sympathies is the measure of our joy in living.","name":"A. G. Gardiner (\"Alpha of the Plough\")","src":"Pebbles on the Shore, \"On Living Again\"","date":"1916","img":"gen_a_g_gardiner","pos":"50% 22%"},
{"g":"kind","text":"Whereas we love ourselves in spite of our faults, our friends often love us even on account of our faults, the highest level to which attachment can go.","name":"Christopher Morley","src":"Pipefuls, \"On Making Friends\"","date":"1920","img":"gen_christopher_morley","pos":"50% 22%"},
{"g":"kind","text":"The pilgrim needs patience and endurance, not hurry and unrest.","name":"Sharafuddin Maneri","src":"Letters from a Sufi Teacher, The Series of 28 Letters, letter 4 (tr. Baijnath Singh, 1908)","date":"14th century","img":"gen_sharafuddin_maneri","pos":"50% 22%"},
{"g":"kind","text":"Where I found a heart in pain, I would make it glad again.","name":"James Whitcomb Riley","src":"Afterwhiles, \"If I Knew What Poets Know\"","date":"1887","img":"gen_james_whitcomb_riley","pos":"50% 22%"},
{"g":"kind","text":"When you're hunting for the glad things, you sort of forget the other kind.","name":"Eleanor H. Porter","src":"Pollyanna, ch. V \"The Game\" (Pollyanna)","date":"1913","img":"gen_eleanor_h_porter","pos":"50% 22%"},
{"g":"kind","text":"I reckon I am glad this morning just to be alive!","name":"Eleanor H. Porter","src":"Pollyanna, ch. VI \"A Question of Duty\" (Pollyanna)","date":"1913","img":"gen_eleanor_h_porter","pos":"50% 22%"},
{"g":"kind","text":"I think that the most necessary quality for any person to have is imagination. It makes people able to put themselves in other people's places. It makes them kind and sympathetic and understanding.","name":"Jean Webster","src":"Daddy-Long-Legs (Judy's letter)","date":"1912","img":"gen_jean_webster","pos":"50% 22%"},
{"g":"kind","text":"The world will never starve for want of wonders; but only for want of wonder.","name":"G. K. Chesterton","src":"Tremendous Trifles, I \"Tremendous Trifles\"","date":"1909","img":"g_k_chesterton","pos":"50% 22%"},
{"g":"kind","text":"Be not solitary, be not idle.","name":"Robert Burton","src":"The Anatomy of Melancholy, Part III, closing words","date":"1621","img":"gen_robert_burton","pos":"50% 22%"},
{"g":"kind","text":"I will be the gladdest thing Under the sun! I will touch a hundred flowers And not pick one.","name":"Edna St. Vincent Millay","src":"\"Afternoon on a Hill\", Renascence and Other Poems","date":"1917","img":"gen_edna_st_vincent_millay","pos":"50% 22%"},
{"g":"kind","text":"The world stands out on either side No wider than the heart is wide; Above the world is stretched the sky— No higher than the soul is high.","name":"Edna St. Vincent Millay","src":"\"Renascence\", Renascence and Other Poems","date":"1912","img":"gen_edna_st_vincent_millay","pos":"50% 22%"},
{"g":"kind","text":"Be sure that better days will come and tell them so continually, for it is true.","name":"George Sand","src":"Letter to Gustave Flaubert, 15 August 1875, The George Sand–Gustave Flaubert Letters, CCXCIV (tr. Aimée L. McKenzie, 1921)","date":"1875","img":"gen_george_sand","pos":"50% 22%"},
{"g":"kind","text":"Think of healing those whom you love, and forget yourself.","name":"George Sand","src":"Letter to Gustave Flaubert, 15 August 1875, The George Sand–Gustave Flaubert Letters, CCXCIV (tr. Aimée L. McKenzie, 1921)","date":"1875","img":"gen_george_sand","pos":"50% 22%"},
{"g":"kind","text":"Patience, there is everything in that, and that is acquired.","name":"George Sand","src":"Letter to Gustave Flaubert, 7 December 1871, The George Sand–Gustave Flaubert Letters, CCV (tr. Aimée L. McKenzie, 1921)","date":"1871","img":"gen_george_sand","pos":"50% 22%"},
{"g":"kind","text":"Cheerfulness is a beauty which everybody admires. A cheerful spirit is a continual feast. It smiles its way through life.","name":"G. S. Weaver","src":"Aims and Aids for Girls and Young Women, \"Beauty\"","date":"1856","img":"gen_g_s_weaver","pos":"50% 22%"},
{"g":"kind","text":"Happiness is not hid away beyond our search, nor laid above our reach.","name":"G. S. Weaver","src":"Aims and Aids for Girls and Young Women, \"Happiness\"","date":"1856","img":"gen_g_s_weaver","pos":"50% 22%"},
{"g":"kind","text":"Hope, faith, love, joy, peace, sympathy, self-sacrifice, humility—spiritual qualities these, that shine through the face, and transform the life.","name":"Newell Dwight Hillis","src":"Right Living as a Fine Art, \"Strength Blossoming into Beauty\"","date":"1899","img":"gen_newell_dwight_hillis","pos":"50% 22%"},
{"g":"kind","text":"The world is full of happy people, but no one ever hears of them.","name":"Gene Stratton-Porter","src":"A Girl of the Limberlost, ch. XVI (Elnora)","date":"1909","img":"gen_gene_stratton_porter","pos":"50% 22%"},
{"g":"kind","text":"Try to be cheerful, and to amuse yourself and the others. It's much easier for me if you can be a little bit happy and enjoy things.","name":"E. Nesbit","src":"The Railway Children, ch. X \"The Terrible Secret\" (Mother)","date":"1906","img":"gen_e_nesbit","pos":"50% 22%"},
{"g":"kind","text":"Where are the clouds of yesterday? The world is good, the world is sweet, And life is new and hope reborn.","name":"Susan Coolidge","src":"\"Morning\", Verses","date":"1880","img":"gen_susan_coolidge","pos":"50% 22%"},
{"g":"kind","text":"\"Supposing a tree fell down, Pooh, when we were underneath it?\" \"Supposing it didn't,\" said Pooh after careful thought.","name":"A. A. Milne","src":"The House at Pooh Corner, ch. VIII \"In Which Piglet Does a Very Grand Thing\" (Piglet and Pooh)","date":"1928","img":"gen_a_a_milne","pos":"50% 22%"},
{"g":"kind","text":"I am beginning to learn that it is the sweet, simple things of life which are the real ones after all.","name":"Laura Ingalls Wilder","src":"\"A Bouquet of Wild Flowers\", Missouri Ruralist (20 July 1917)","date":"20 July 1917","img":"gen_laura_ingalls_wilder","pos":"50% 22%"},
{"g":"kind","text":"I would always rather be happy than dignified.","name":"Charlotte Brontë","src":"Jane Eyre, ch. XXXIV (Jane)","date":"1847","img":"bronte","pos":"50% 30%"},
{"g":"kind","text":"The sovereign voluntary path to cheerfulness, if our spontaneous cheerfulness be lost, is to sit up cheerfully, to look round cheerfully, and to act and speak as if cheerfulness were already there.","name":"William James","src":"\"The Gospel of Relaxation\", Talks to Teachers on Psychology and to Students on Some of Life's Ideals","date":"1899","img":"william_james","pos":"50% 22%"},
{"g":"kind","text":"Wherever a process of life communicates an eagerness to him who lives it, there the life becomes genuinely significant.","name":"William James","src":"\"On a Certain Blindness in Human Beings\", Talks to Teachers on Psychology and to Students on Some of Life's Ideals","date":"1899","img":"william_james","pos":"50% 22%"},
{"g":"kind","text":"Grief can take care of itself; but to get the full value of a joy you must have somebody to divide it with.","name":"Mark Twain","src":"Following the Equator, ch. XLVIII epigraph (Pudd'nhead Wilson's New Calendar)","date":"1897","img":"twain","pos":"50% 15%"},
{"g":"kind","text":"Wrinkles should merely indicate where smiles have been.","name":"Mark Twain","src":"Following the Equator, ch. LII epigraph (Pudd'nhead Wilson's New Calendar)","date":"1897","img":"twain","pos":"50% 15%"},
{"g":"kind","text":"Be careless in your dress if you must, but keep a tidy soul.","name":"Mark Twain","src":"Following the Equator, ch. XXIII epigraph (Pudd'nhead Wilson's New Calendar)","date":"1897","img":"twain","pos":"50% 15%"},
{"g":"kind","text":"Prosperity is not without many fears and distastes; and adversity is not without comforts and hopes.","name":"Francis Bacon","src":"Of Adversity, Essays","date":"1625","img":"gen_francis_bacon","pos":"50% 22%"},
{"g":"kind","text":"Let your boat of life be light, packed with only what you need—a homely home and simple pleasures, one or two friends, worth the name, someone to love and someone to love you, a cat, a dog, and a pipe or two, enough to eat and enough to wear.","name":"Jerome K. Jerome","src":"Three Men in a Boat, ch. III","date":"1889","img":"jerome_k_jerome","pos":"50% 22%"},
{"g":"kind","text":"Heaven is under our feet as well as over our heads.","name":"Henry David Thoreau","src":"Walden, ch. 16 \"The Pond in Winter\"","date":"1854","img":"thoreau","pos":"50% 20%"},
{"g":"kind","text":"I exist as I am, that is enough, If no other in the world be aware I sit content, And if each and all be aware I sit content.","name":"Walt Whitman","src":"Song of Myself, 20, Leaves of Grass (1891–92 ed.)","date":"1855 (1891–92 text)","img":"whitman","pos":"50% 12%"},
{"g":"kind","text":"The world is full of happiness, and plenty to go round, if you are only willing to take the kind that comes your way. The whole secret is in being pliable.","name":"Jean Webster","src":"Daddy-Long-Legs (Judy's letter)","date":"1912","img":"gen_jean_webster","pos":"50% 22%"},
{"g":"kind","text":"To be healthy and happy we must also give affection and kind help to other people.","name":"Marjory MacMurchy","src":"The Canadian Girl at Work, ch. XXV \"Health\"","date":"1919","img":"gen_marjory_macmurchy","pos":"50% 22%"},
{"g":"kind","text":"We shape ourselves the joy or fear Of which the coming life is made, And fill our Future's atmosphere With sunshine or with shade.","name":"John Greenleaf Whittier","src":"\"Raphael\"","date":"1842","img":"john_greenleaf_whittier","pos":"50% 22%"},
{"g":"kind","text":"Be cheerful and hopeful, for the Door of Compassion is open.","name":"Sharafuddin Maneri","src":"Letters from a Sufi Teacher, letter 61 (tr. Baijnath Singh, 1908)","date":"14th century","img":"gen_sharafuddin_maneri","pos":"50% 22%"},
{"g":"kind","text":"The best gifts in the world are love, kindness, faithfulness, sincerity, and purity.","name":"Marjory MacMurchy","src":"The Canadian Girl at Work, ch. VI \"What Every Girl Needs to Know\"","date":"1919","img":"gen_marjory_macmurchy","pos":"50% 22%"},
{"g":"kind","text":"An adventure is only an inconvenience rightly considered. An inconvenience is only an adventure wrongly considered.","name":"G. K. Chesterton","src":"All Things Considered, \"On Running After One's Hat\"","date":"1908","img":"g_k_chesterton","pos":"50% 22%"},
{"g":"history","text":"Do not think so much of the end of your work. … Go on studying with earnestness and interest, and find your pleasure in the endeavour, not in the accomplishment.","name":"Josef Hofmann","src":"Piano Playing, with Piano Questions Answered, \"What the Object of Study Should Be\"","date":"1909","img":"gen_josef_hofmann","pos":"50% 22%"},
{"g":"history","text":"We can stand an immense deal of work, and can, even if weak, bear much, if only we learn to dismiss small questions without worry or unreasonable reconsiderations.","name":"S. Weir Mitchell","src":"Doctor and Patient","date":"1888","img":"gen_s_weir_mitchell","pos":"50% 22%"},
{"g":"history","text":"To be a successful artist is to know what you want and to get it at any necessary sacrifice, though the greatest artists maintain a noble balance and sacrifice no more than is necessary.","name":"Kenyon Cox","src":"Artist and Public, and Other Essays on Art Subjects","date":"1914","img":"gen_kenyon_cox","pos":"50% 22%"},
{"g":"history","text":"Build up your weaknesses until they become your strong points.","name":"Knute Rockne","src":"As recorded by Harry A. Stuhldreher, Knute Rockne: Man Builder (1940), p. 53","date":"before 1931","img":"gen_knute_rockne","pos":"50% 22%"},
{"g":"history","text":"The great thing is not to be discouraged by the unavoidable difficulties encountered at the outset.","name":"Jean-Henri Fabre","src":"The Life of the Fly, ch. XIII: Mathematical Memories: My Little Table (tr. Alexander Teixeira de Mattos, 1913)","date":"c. 1907","img":"gen_jean_henri_fabre","pos":"50% 22%"},
{"g":"history","text":"… Let us strive … within the measure of our capacity, to force a gleam of light from the vast unknown; let us examine and question and, here and there, wrest a few shreds of truth.","name":"Jean-Henri Fabre","src":"The Life of the Fly, ch. VII: The Pond (tr. Alexander Teixeira de Mattos, 1913)","date":"c. 1905","img":"gen_jean_henri_fabre","pos":"50% 22%"},
{"g":"history","text":"To practice means to perform, in the face of all obstacles, some act of vision, of faith, of desire. Practice is a means of inviting the perfection desired.","name":"Martha Graham","src":"\"I Am a Dancer\", This I Believe (radio essay)","date":"1952","img":"gen_martha_graham","pos":"50% 22%"},
{"g":"history","text":"There is only one of you in all of time, this expression is unique. … It is not your business to determine how good it is nor how valuable nor how it compares with other expressions. It is your business to keep it yours clearly and directly, to keep the channel open.","name":"Martha Graham","src":"Said to Agnes de Mille in 1943, as recorded by de Mille, Martha: The Life and Work of Martha Graham (1991), p. 264","date":"1943","img":"gen_martha_graham","pos":"50% 22%"},
{"g":"history","text":"There can be no happiness if the things we believe in are different from the things we do.","name":"Freya Stark","src":"The Journey's Echo","date":"1963","img":"gen_freya_stark","pos":"50% 22%"},
{"g":"history","text":"To become a singer requires work, work, and again work!","name":"Enrico Caruso","src":"Interview, as recorded by Harriette Brower, Vocal Mastery (1920), \"The Value of Work\"","date":"c. 1919","img":"gen_enrico_caruso","pos":"50% 22%"},
{"g":"history","text":"If you will only use your own intelligence you can correct your own faults.","name":"Enrico Caruso","src":"Interview, as recorded by Harriette Brower, Vocal Mastery (1920), \"The Value of Work\"","date":"c. 1919","img":"gen_enrico_caruso","pos":"50% 22%"},
{"g":"history","text":"I learned to listen, to be critical, to judge my own work; for if it was not up to the mark I must see what was the matter and correct it myself.","name":"Teresa Carreño","src":"Interview, as recorded by Harriette Brower, Piano Mastery (1915), \"Early Technical Training\"","date":"c. 1914","img":"gen_teresa_carreno","pos":"50% 22%"},
{"g":"history","text":"I am always studying, always striving to improve what I have already learned and trying to acquire the things I find difficult, or that I have not yet attained to.","name":"Louise Homer","src":"Interview, as recorded by Harriette Brower, Vocal Mastery (1920)","date":"c. 1919","img":"gen_louise_homer","pos":"50% 22%"},
{"g":"history","text":"The secret to so many artists living so long is that every painting is a new adventure. So, you see, they're always looking ahead to something new and exciting. The secret is not to look back.","name":"Norman Rockwell","src":"As recorded by Donald Walton, A Rockwell Portrait: An Intimate Biography (1978)","date":"before 1978","img":"gen_norman_rockwell","pos":"50% 22%"},
{"g":"history","text":"Every rehearsal is like a concert, and every concert like a debut.","name":"Arturo Toscanini","src":"As recorded by Howard Taubman, \"The Maestro\", The Atlantic (October 1943)","date":"1943","img":"gen_arturo_toscanini","pos":"50% 22%"},
{"g":"history","text":"Courage and concentration will conquer most obstacles.","name":"Walter Camp","src":"Keeping Fit All the Way, \"Health Maxims\"","date":"1919","img":"gen_walter_camp","pos":"50% 22%"},
{"g":"history","text":"Work will take your mind off most of your ills.","name":"Walter Camp","src":"Keeping Fit All the Way, \"Health Maxims\"","date":"1919","img":"gen_walter_camp","pos":"50% 22%"},
{"g":"history","text":"Honest investigation is but the application of common sense to the solution of the unknown. Science does not wait on Genius, but is the companion of Industry.","name":"John Wesley Powell","src":"\"The Larger Import of Scientific Education\", address at the Corcoran School of Science and Arts, Popular Science Monthly (1885), p. 453","date":"1 October 1884","img":"gen_john_wesley_powell","pos":"50% 22%"},
{"g":"history","text":"In my own development as an artist it has been made evident to me, time and time again, that success comes from the careful observance of details.","name":"Ferruccio Busoni","src":"Interview, as recorded by James Francis Cooke, Great Pianists on Piano Playing (1913), \"Important Details in Piano Study\"","date":"c. 1912","img":"gen_ferruccio_busoni","pos":"50% 22%"},
{"g":"history","text":"This mountain, I thought, was like education: The higher you climbed, the farther you could see.","name":"Christiaan Barnard","src":"One Life (New York, 1970), p. 49","date":"1970","img":"gen_christiaan_barnard","pos":"50% 22%"},
{"g":"history","text":"I cannot say I was ever discouraged, for I so enjoyed my art that it was always of absorbing interest; but my whole life has been made up of hard work, always work.","name":"Marcella Sembrich","src":"Interview, as recorded by Mabel Wagnalls, Stars of the Opera (1899), \"An Interview with Marcella Sembrich\"","date":"c. 1898","img":"gen_marcella_sembrich","pos":"50% 22%"},
{"g":"history","text":"Luck is the residue of design.","name":"Branch Rickey","src":"The Sporting News, 21 February 1946 (Rickey also said it in 1915, Lexington Leader, per Quote Investigator)","date":"21 February 1946","img":"gen_branch_rickey","pos":"50% 22%"},
{"g":"history","text":"For myself I am never satisfied — never really. I almost always fail — always I think: now next time I can do it. Maybe that is part of what keeps one working.","name":"Georgia O'Keeffe","src":"Letter to William Howard Schubart, Abiquiu, quoted in Mara R. Witzling (ed.), Voicing Our Visions (1991), p. 228","date":"4 August 1950","img":"gen_georgia_o_keeffe","pos":"50% 22%"},
{"g":"history","text":"I know that, if I have to master some subject, I just sit down and work at that thing till I can do it—till it is done.","name":"Anna Case","src":"Interview, as recorded by Harriette Brower, Vocal Mastery (1920), \"Inspired Interpretation\"","date":"c. 1919","img":"gen_anna_case","pos":"50% 22%"},
{"g":"history","text":"There ain't no man can avoid being born average. But there ain't no man got to be common.","name":"Satchel Paige","src":"As recorded by Jim Raglin, \"Change of Pace\", Lincoln Evening Journal and Nebraska State Journal (26 July 1958), p. 8","date":"1958","img":"gen_satchel_paige","pos":"50% 22%"},
{"g":"ancient","text":"The die is cast.","name":"Julius Caesar","src":"Crossing the Rubicon, reported by Plutarch, Life of Caesar 32 (Dryden tr., rev. A. H. Clough)","date":"49 BC","img":"gen_caesar","pos":"50% 22%"}];
const CREDITS = {
"franklin": {
"who": "Benjamin Franklin",
"file": "Benjamin Franklin after Joseph Siffred Duplessis.jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Benjamin_Franklin_after_Joseph_Siffred_Duplessis.jpg"
},
"barnum": {
"who": "P. T. Barnum",
"file": "P. T. Barnum - 02176a (cropped).jpg",
"by": "Brady-Handy Photograph Collection (Library of Congress)",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:P._T._Barnum_-_02176a_%28cropped%29.jpg"
},
"ford": {
"who": "Henry Ford",
"file": "Henry ford 1919 (cropped).jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Henry_ford_1919_%28cropped%29.jpg"
},
"carnegie": {
"who": "Andrew Carnegie",
"file": "Andrew Carnegie, three-quarter length portrait, seated, facing slightly left, 1913 (cropped).jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Andrew_Carnegie%2C_three-quarter_length_portrait%2C_seated%2C_facing_slightly_left%2C_1913_%28cropped%29.jpg"
},
"smiles": {
"who": "Samuel Smiles",
"file": "Samuel Smiles by Sir George Reid.jpg",
"by": "George Reid",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Samuel_Smiles_by_Sir_George_Reid.jpg"
},
"jobs": {
"who": "Steve Jobs",
"file": "Steve Jobs Headshot 2010-CROP.jpg",
"by": "Matthew Yohe",
"lic": "CC BY-SA 3.0",
"url": "https://commons.wikimedia.org/wiki/File:Steve_Jobs_Headshot_2010-CROP.jpg"
},
"russell_h_conwell": {
"who": "Russell H. Conwell",
"file": "Russell Herman Conwell.jpg",
"by": "R. Campbell Tibb and Henry W. Ruoff (1867-1935)",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Russell_Herman_Conwell.jpg"
},
"elbert_hubbard": {
"who": "Elbert Hubbard",
"file": "Elbert Hubbard (1904).jpg",
"by": "Edward Samuel Goodnow",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Elbert_Hubbard_%281904%29.jpg"
},
"orison_swett_marden": {
"who": "Orison Swett Marden",
"file": "Boston harbor wharves at dawn, 1890s",
"by": "AI-generated illustration (American Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"arnold_bennett": {
"who": "Arnold Bennett",
"file": "Arnold Bennett's Photograph.jpg",
"by": "Pirie MacDonald",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Arnold_Bennett%27s_Photograph.jpg"
},
"george_horace_lorimer": {
"who": "George Horace Lorimer",
"file": "Chicago meatpacking merchant house, 1902",
"by": "AI-generated illustration (Ashcan School oil)",
"lic": "AI illustration",
"url": ""
},
"edward_bok": {
"who": "Edward Bok",
"file": "Philadelphia magazine press hall, early 1900s",
"by": "AI-generated illustration (Ashcan School oil)",
"lic": "AI illustration",
"url": ""
},
"wallace_d_wattles": {
"who": "Wallace D. Wattles",
"file": "Indiana small town main street, 1910",
"by": "AI-generated illustration (American Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"thomas_carlyle": {
"who": "Thomas Carlyle",
"file": "Victorian mill town under smoky sky, 1843",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"edwin_lefevre": {
"who": "Edwin Lefèvre",
"file": "Wall Street ticker room, early 1900s",
"by": "AI-generated illustration (Ashcan School oil)",
"lic": "AI illustration",
"url": ""
},
"john_d_rockefeller": {
"who": "John D. Rockefeller",
"file": "Oil derricks and refinery, 1870s Pennsylvania",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"philip_d_armour": {
"who": "Philip D. Armour",
"file": "Chicago Union Stock Yards, 1890s",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"john_wanamaker": {
"who": "John Wanamaker",
"file": "Grand department store court, Philadelphia, 1911",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"william_cobbett": {
"who": "William Cobbett",
"file": "Horseman riding English downland lanes, 1820s",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"konosuke_matsushita": {
"who": "Kōnosuke Matsushita",
"file": "Osaka electrical workshop, 1920s",
"by": "AI-generated illustration (Shin-hanga woodblock print)",
"lic": "AI illustration",
"url": ""
},
"ingvar_kamprad": {
"who": "Ingvar Kamprad",
"file": "Swedish forest furniture warehouse, 1950s",
"by": "AI-generated illustration (Scandinavian mid-century illustration)",
"lic": "AI illustration",
"url": ""
},
"thomas_j_watson": {
"who": "Thomas J. Watson",
"file": "Punched-card tabulating office, 1930s",
"by": "AI-generated illustration (Streamline Moderne illustration)",
"lic": "AI illustration",
"url": ""
},
"coco_chanel": {
"who": "Coco Chanel",
"file": "Mirrored staircase of a Paris couture salon, 1920s",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"ray_kroc": {
"who": "Ray Kroc",
"file": "Roadside hamburger stand at dusk, 1955",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"thomas_edison": {
"who": "Thomas Edison",
"file": "Menlo Park laboratory lit by first bulbs, 1879",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"walt_disney": {
"who": "Walt Disney",
"file": "Animators at light desks, 1930s studio",
"by": "AI-generated illustration (Streamline Moderne illustration)",
"lic": "AI illustration",
"url": ""
},
"peter_drucker": {
"who": "Peter Drucker",
"file": "Midcentury automobile assembly line, 1940s",
"by": "AI-generated illustration (WPA heroic mural)",
"lic": "AI illustration",
"url": ""
},
"indra_nooyi": {
"who": "Indra Nooyi",
"file": "Modern corporate campus with sculpture garden",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"charles_kettering": {
"who": "Charles Kettering",
"file": "Dayton workshop with early electric self-starter, 1911",
"by": "AI-generated illustration (Ashcan School oil)",
"lic": "AI illustration",
"url": ""
},
"oprah_winfrey": {
"who": "Oprah Winfrey",
"file": "Chicago television studio under stage lights",
"by": "AI-generated illustration (1980s airbrush illustration)",
"lic": "AI illustration",
"url": ""
},
"muhammad_yunus": {
"who": "Muhammad Yunus",
"file": "Village women's lending circle, rural Bangladesh",
"by": "AI-generated illustration (Bengal School wash painting)",
"lic": "AI illustration",
"url": ""
},
"jack_ma": {
"who": "Jack Ma",
"file": "Hangzhou apartment startup, 1999",
"by": "AI-generated illustration (Chinese ink-and-wash)",
"lic": "AI illustration",
"url": ""
},
"larry_page": {
"who": "Larry Page",
"file": "Garage startup with server racks, 1998",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"napoleon_hill": {
"who": "Napoleon Hill",
"file": "Pittsburgh steel mills at night, early 1900s",
"by": "AI-generated illustration (WPA heroic mural)",
"lic": "AI illustration",
"url": ""
},
"zig_ziglar": {
"who": "Zig Ziglar",
"file": "Convention hall stage with spotlight, 1970s",
"by": "AI-generated illustration (1970s editorial illustration)",
"lic": "AI illustration",
"url": ""
},
"alexander_graham_bell": {
"who": "Alexander Graham Bell",
"file": "Boston laboratory with first telephone, 1876",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"akio_morita": {
"who": "Akio Morita",
"file": "Tokyo transistor radio factory, 1950s",
"by": "AI-generated illustration (Shin-hanga woodblock print)",
"lic": "AI illustration",
"url": ""
},
"j_r_d_tata": {
"who": "J. R. D. Tata",
"file": "Single-engine airmail plane over the Indian coast, 1932",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"john_b_herreshoff": {
"who": "John B. Herreshoff",
"file": "A New England yacht yard, 1890s (Currier & Ives lithograph)",
"by": "AI-generated illustration",
"lic": "AI illustration",
"url": ""
},
"herbert_h_vreeland": {
"who": "Herbert H. Vreeland",
"file": "Electric streetcars on Broadway, 1900",
"by": "AI-generated illustration (Ashcan School oil)",
"lic": "AI illustration",
"url": ""
},
"washington": {
"who": "Booker T. Washington",
"file": "Booker T Washington retouched flattened-crop.jpg",
"by": "Harris & Ewing",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Booker_T_Washington_retouched_flattened-crop.jpg"
},
"churchill": {
"who": "Winston Churchill",
"file": "Sir Winston Churchill - 19086236948 (restored).jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg"
},
"eisenhower": {
"who": "Dwight D. Eisenhower",
"file": "Dwight D. Eisenhower, official photo portrait, May 29, 1959 (crop).jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959_%28crop%29.jpg"
},
"paine": {
"who": "Thomas Paine",
"file": "Laurent Dabos – Thomas Paine – Google Art Project.jpg",
"by": "Laurent Dabos",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Laurent_Dabos_%E2%80%93_Thomas_Paine_%E2%80%93_Google_Art_Project.jpg"
},
"carl_von_clausewitz": {
"who": "Carl von Clausewitz",
"file": "Battle of Borodino, 1812",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"xenophon": {
"who": "Xenophon",
"file": "The Ten Thousand sighting the sea from Mount Theches",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"ulysses_s_grant": {
"who": "Ulysses S. Grant",
"file": "Union lines at Spotsylvania, 1864",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"william_tecumseh_sherman": {
"who": "William Tecumseh Sherman",
"file": "Union army on the march through Georgia, 1864",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"mary_seacole": {
"who": "Mary Seacole",
"file": "British Hotel near Balaclava, Crimea, 1855",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"napoleon_bonaparte": {
"who": "Napoleon Bonaparte",
"file": "Sun of Austerlitz breaking through the mist, 1805",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"duke_of_wellington": {
"who": "Duke of Wellington",
"file": "British redcoats in the Peninsular War, 1809",
"by": "AI-generated illustration (Academic history painting)",
"lic": "AI illustration",
"url": ""
},
"john_fisher": {
"who": "John Fisher",
"file": "HMS Dreadnought at sea, 1906",
"by": "AI-generated illustration (Edwardian marine oil)",
"lic": "AI illustration",
"url": ""
},
"giuseppe_garibaldi": {
"who": "Giuseppe Garibaldi",
"file": "Red Shirts landing at Marsala, 1860",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"george_washington": {
"who": "George Washington",
"file": "Continental Army drilling at Valley Forge, 1778",
"by": "AI-generated illustration (Grand Manner history painting)",
"lic": "AI illustration",
"url": ""
},
"john_paul_jones": {
"who": "John Paul Jones",
"file": "Bonhomme Richard and Serapis by moonlight, 1779",
"by": "AI-generated illustration (18th-century naval oil)",
"lic": "AI illustration",
"url": ""
},
"george_s_patton": {
"who": "George S. Patton",
"file": "Armored column in Ardennes snow, 1944",
"by": "AI-generated illustration (WWII poster art)",
"lic": "AI illustration",
"url": ""
},
"charles_de_gaulle": {
"who": "Charles de Gaulle",
"file": "Free French sailors in a British harbor, 1940",
"by": "AI-generated illustration (WWII poster art)",
"lic": "AI illustration",
"url": ""
},
"george_c_marshall": {
"who": "George C. Marshall",
"file": "Rebuilding a European city, 1948",
"by": "AI-generated illustration (WPA heroic mural)",
"lic": "AI illustration",
"url": ""
},
"t_e_lawrence": {
"who": "T. E. Lawrence",
"file": "Arab camel cavalry charging toward Aqaba, 1917",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"audie_murphy": {
"who": "Audie Murphy",
"file": "Snowy forest edge in the Colmar Pocket, 1945",
"by": "AI-generated illustration (WWII poster art)",
"lic": "AI illustration",
"url": ""
},
"cuthbert_collingwood": {
"who": "Cuthbert Collingwood",
"file": "Leading the lee line at Trafalgar, 1805",
"by": "AI-generated illustration (18th-century naval oil)",
"lic": "AI illustration",
"url": ""
},
"lincoln": {
"who": "Abraham Lincoln",
"file": "Abraham Lincoln O-77 matte collodion print (3x4 close cropped).jpg",
"by": "Alexander Gardner",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Abraham_Lincoln_O-77_matte_collodion_print_%283x4_close_cropped%29.jpg"
},
"keller": {
"who": "Helen Keller",
"file": "Helen Keller circa 1920 - restored (cropped2).jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Helen_Keller_circa_1920_-_restored_%28cropped2%29.jpg"
},
"alcott": {
"who": "Louisa May Alcott",
"file": "Louisa May Alcott, c. 1870 - Warren's Portraits, Boston.jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Louisa_May_Alcott%2C_c._1870_-_Warren%27s_Portraits%2C_Boston.jpg"
},
"laozi": {
"who": "Laozi",
"file": "Laozi.jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Laozi.jpg"
},
"emerson": {
"who": "Ralph Waldo Emerson",
"file": "Ralph Waldo Emerson ca1857.jpg",
"by": "Southworth & Hawes",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Ralph_Waldo_Emerson_ca1857.jpg"
},
"thoreau": {
"who": "Henry David Thoreau",
"file": "Henry David Thoreau (3x4 cropped).jpg",
"by": "B. D. Maxham",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Henry_David_Thoreau_%283x4_cropped%29.jpg"
},
"whitman": {
"who": "Walt Whitman",
"file": "Walt Whitman - Brady-Handy restored.png",
"by": "Mathew Benjamin Brady",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Walt_Whitman_-_Brady-Handy_restored.png"
},
"dickens": {
"who": "Charles Dickens",
"file": "Dickens Gurney head.jpg",
"by": "Jeremiah Gurney",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Dickens_Gurney_head.jpg"
},
"confucius": {
"who": "Confucius",
"file": "Confucius Tang Dynasty, black print.jpg",
"by": "Wu Daozi, 685-758, Tang Dynasty.",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Confucius_Tang_Dynasty%2C_black_print.jpg"
},
"twain": {
"who": "Mark Twain",
"file": "Mark Twain 1907.jpg",
"by": "Photographer: A.F. Bradley in his studio.",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Mark_Twain_1907.jpg"
},
"montgomery": {
"who": "L. M. Montgomery",
"file": "Lucy Maud Montgomery (1897).jpg",
"by": "AnonymousUnknown author",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Lucy_Maud_Montgomery_%281897%29.jpg"
},
"bronte": {
"who": "Charlotte Brontë",
"file": "Charlotte Brontë by George Richmond, 1850.png",
"by": "George Richmond",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Charlotte_Bront%C3%AB_by_George_Richmond%2C_1850.png"
},
"stevenson": {
"who": "Robert Louis Stevenson",
"file": "Robert Louis Stevenson, Knox Series.jpg",
"by": "Knox Series",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Robert_Louis_Stevenson%2C_Knox_Series.jpg"
},
"jane_austen": {
"who": "Jane Austen",
"file": "CassandraAusten-JaneAusten(c.1810) hires.jpg",
"by": "Cassandra Austen",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:CassandraAusten-JaneAusten%28c.1810%29_hires.jpg"
},
"george_eliot": {
"who": "George Eliot",
"file": "George Eliot, por François D'Albert Durade.jpg",
"by": "replica by François D’Albert Durade (1804–1886)",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:George_Eliot%2C_por_Fran%C3%A7ois_D%27Albert_Durade.jpg"
},
"victor_hugo": {
"who": "Victor Hugo",
"file": "Victor Hugo by Bertall.jpg",
"by": "Bertall",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Victor_Hugo_by_Bertall.jpg"
},
"miguel_de_cervantes": {
"who": "Miguel de Cervantes",
"file": "Cervantes Jáuregui.jpg",
"by": "Attributed to Juan de Jáuregui",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Cervantes_J%C3%A1uregui.jpg"
},
"frances_hodgson_burnett": {
"who": "Frances Hodgson Burnett",
"file": "Frances Burnett.jpg",
"by": "Herbert Rose Barraud (1845-1896)",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Frances_Burnett.jpg"
},
"j_m_barrie": {
"who": "J. M. Barrie",
"file": "James Matthew Barrie00.jpg",
"by": "Herbert Rose Barraud",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:James_Matthew_Barrie00.jpg"
},
"lewis_carroll": {
"who": "Lewis Carroll",
"file": "LewisCarrollSelfPhoto.jpg",
"by": "Lewis Carroll",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:LewisCarrollSelfPhoto.jpg"
},
"eleanor_h_porter": {
"who": "Eleanor H. Porter",
"file": "New England village hillside in summer, 1913",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"rabindranath_tagore": {
"who": "Rabindranath Tagore",
"file": "1926 Rabindrath Tagore.jpg",
"by": "Georges Chevalier",
"lic": "CC BY 4.0",
"url": "https://commons.wikimedia.org/wiki/File:1926_Rabindrath_Tagore.jpg"
},
"kahlil_gibran": {
"who": "Kahlil Gibran",
"file": "Kahlil Gibran 1913.jpg",
"by": "Unknown authorUnknown author",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Kahlil_Gibran_1913.jpg"
},
"samuel_johnson": {
"who": "Samuel Johnson",
"file": "Samuel Johnson by Joshua Reynolds.jpg",
"by": "Joshua Reynolds",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Samuel_Johnson_by_Joshua_Reynolds.jpg"
},
"oscar_wilde": {
"who": "Oscar Wilde",
"file": "Oscar Wilde by Napoleon Sarony. Three-quarter-length photograph, seated (cropped).jpg",
"by": "Napoleon Sarony / Adam Cuerden",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Oscar_Wilde_by_Napoleon_Sarony._Three-quarter-length_photograph%2C_seated_%28cropped%29.jpg"
},
"william_shakespeare": {
"who": "William Shakespeare",
"file": "William Shakespeare by John Taylor, edited.jpg",
"by": "Attributed to John Taylor",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:William_Shakespeare_by_John_Taylor%2C_edited.jpg"
},
"emily_dickinson": {
"who": "Emily Dickinson",
"file": "Black-white photograph of Emily Dickinson2.png",
"by": "Unknown authorUnknown author",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Black-white_photograph_of_Emily_Dickinson2.png"
},
"henry_wadsworth_longfellow": {
"who": "Henry Wadsworth Longfellow",
"file": "Henry Wadsworth Longfellow, photographed by Julia Margaret Cameron in 1868.jpg",
"by": "Julia Margaret Cameron",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Henry_Wadsworth_Longfellow%2C_photographed_by_Julia_Margaret_Cameron_in_1868.jpg"
},
"alfred_tennyson": {
"who": "Alfred, Lord Tennyson",
"file": "Alfred, Lord Tennyson by Elliott & Fry - Original.jpg",
"by": "Elliott & Fry",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Alfred%2C_Lord_Tennyson_by_Elliott_%26_Fry_-_Original.jpg"
},
"robert_browning": {
"who": "Robert Browning",
"file": "Robert Browning by Herbert Rose Barraud, circa 1888.jpg",
"by": "Herbert Rose Barraud / Adam Cuerden",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Robert_Browning_by_Herbert_Rose_Barraud%2C_circa_1888.jpg"
},
"william_wordsworth": {
"who": "William Wordsworth",
"file": "Wordsworth on Helvellyn by Benjamin Robert Haydon.jpg",
"by": "Benjamin Haydon",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Wordsworth_on_Helvellyn_by_Benjamin_Robert_Haydon.jpg"
},
"percy_bysshe_shelley": {
"who": "Percy Bysshe Shelley",
"file": "Percy Bysshe Shelley by Alfred Clint.jpg",
"by": "After Amelia Curran",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Percy_Bysshe_Shelley_by_Alfred_Clint.jpg"
},
"rudyard_kipling": {
"who": "Rudyard Kipling",
"file": "Rudyard Kipling (portrait).jpg",
"by": "Elliott & Fry",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Rudyard_Kipling_%28portrait%29.jpg"
},
"william_ernest_henley": {
"who": "William Ernest Henley",
"file": "William Ernest Henley`s Portrait.jpg",
"by": "not stated",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:William_Ernest_Henley%60s_Portrait.jpg"
},
"sara_teasdale": {
"who": "Sara Teasdale",
"file": "Sara Teasdale. Photograph by Gerhard Sisters, ca. 1910 Missouri History Museum Photograph and Print Collection. Portraits n21492.jpg",
"by": "Creator: Gerhard Sisters",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Sara_Teasdale._Photograph_by_Gerhard_Sisters%2C_ca._1910_Missouri_History_Museum_Photograph_and_Print_Collection._Portraits_n21492.jpg"
},
"alexander_pope": {
"who": "Alexander Pope",
"file": "Alexander Pope by Michael Dahl.jpg",
"by": "Michael Dahl",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Alexander_Pope_by_Michael_Dahl.jpg"
},
"john_donne": {
"who": "John Donne",
"file": "John Donne by Isaac Oliver.jpg",
"by": "After Isaac Oliver",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:John_Donne_by_Isaac_Oliver.jpg"
},
"julian_of_norwich": {
"who": "Julian of Norwich",
"file": "Statue of Dame Julian crop.jpg",
"by": "User:Poliphilo",
"lic": "CC0",
"url": "https://commons.wikimedia.org/wiki/File:Statue_of_Dame_Julian_crop.jpg"
},
"john_muir": {
"who": "John Muir",
"file": "John Muir Watkins Portrait circa 1875 Edit.png",
"by": "Carlton E. Watkins",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:John_Muir_Watkins_Portrait_circa_1875_Edit.png"
},
"leo_tolstoy": {
"who": "Leo Tolstoy",
"file": "Leo Tolstoy 1908 Portrait (3x4 cropped).jpg",
"by": "Sergei Prokudin-Gorskii",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Leo_Tolstoy_1908_Portrait_%283x4_cropped%29.jpg"
},
"henry_drummond": {
"who": "Henry Drummond",
"file": "Drummond Henry frontispiece.jpg",
"by": "George Adam Smith",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Drummond_Henry_frontispiece.jpg"
},
"emily_bronte": {
"who": "Emily Brontë",
"file": "Emily Brontë by Patrick Branwell Brontë restored.jpg",
"by": "Branwell Brontë",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Emily_Bront%C3%AB_by_Patrick_Branwell_Bront%C3%AB_restored.jpg"
},
"william_james": {
"who": "William James",
"file": "William James b1842c.jpg",
"by": "Notman Studios (photographer)",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:William_James_b1842c.jpg"
},
"booker_t_washington": {
"who": "Booker T. Washington",
"file": "Booker T Washington retouched flattened-crop.jpg",
"by": "Harris & Ewing",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Booker_T_Washington_retouched_flattened-crop.jpg"
},
"hillel_the_elder": {
"who": "Hillel the Elder",
"file": "Knesset Menorah P5200009 Hilel.JPG",
"by": "Deror avi",
"lic": "CC BY-SA 3.0",
"url": "https://commons.wikimedia.org/wiki/File:Knesset_Menorah_P5200009_Hilel.JPG"
},
"rabbi_tarfon": {
"who": "Rabbi Tarfon",
"file": "Imagined portrait (Dura-Europos wall painting)",
"by": "AI-generated illustration",
"lic": "AI illustration",
"url": ""
},
"rumi": {
"who": "Rumi",
"file": "مولانا اثر حسین بهزاد (cropped).jpg",
"by": "Hossein Behzad",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:%D9%85%D9%88%D9%84%D8%A7%D9%86%D8%A7_%D8%A7%D8%AB%D8%B1_%D8%AD%D8%B3%DB%8C%D9%86_%D8%A8%D9%87%D8%B2%D8%A7%D8%AF_%28cropped%29.jpg"
},
"henri_frederic_amiel": {
"who": "Henri-Frédéric Amiel",
"file": "Portrait of Henri-Frédéric Amiel.jpg",
"by": "Unknown authorUnknown author",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Portrait_of_Henri-Fr%C3%A9d%C3%A9ric_Amiel.jpg"
},
"goethe": {
"who": "Johann Wolfgang von Goethe",
"file": "Goethe (Stieler 1828).jpg",
"by": "Joseph Karl Stieler",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Goethe_%28Stieler_1828%29.jpg"
},
"adam_lindsay_gordon": {
"who": "Adam Lindsay Gordon",
"file": "Adam Lindsay Gordon 2.jpeg",
"by": "S. Milbourn",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Adam_Lindsay_Gordon_2.jpeg"
},
"g_k_chesterton": {
"who": "G. K. Chesterton",
"file": "Gilbert Chesterton.jpg",
"by": "Ernest Herbert Mills",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Gilbert_Chesterton.jpg"
},
"james_allen": {
"who": "James Allen",
"file": "James Allen.jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:James_Allen.jpg"
},
"michel_de_montaigne": {
"who": "Michel de Montaigne",
"file": "Portrait of Michel de Montaigne, circa unknown.jpg",
"by": "Unknown authorUnknown author",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Portrait_of_Michel_de_Montaigne%2C_circa_unknown.jpg"
},
"hans_christian_andersen": {
"who": "Hans Christian Andersen",
"file": "HCA by Thora Hallager 1869 crop.jpg",
"by": "Thora Hallager",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:HCA_by_Thora_Hallager_1869_crop.jpg"
},
"john_ruskin": {
"who": "John Ruskin",
"file": "John Ruskin 1863.jpg",
"by": "W. & D. Downey",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:John_Ruskin_1863.jpg"
},
"roosevelt": {
"who": "Theodore Roosevelt",
"file": "President Theodore Roosevelt, 1904.jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:President_Theodore_Roosevelt%2C_1904.jpg"
},
"kennedy": {
"who": "John F. Kennedy",
"file": "John F. Kennedy, White House color photo portrait (3x4).jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:John_F._Kennedy%2C_White_House_color_photo_portrait_%283x4%29.jpg"
},
"fdr": {
"who": "Franklin D. Roosevelt",
"file": "Franklin Delano Roosevelt, Portrait 1933 (cropped).jpg",
"by": "Elias Goldensky",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Franklin_Delano_Roosevelt%2C_Portrait_1933_%28cropped%29.jpg"
},
"douglass": {
"who": "Frederick Douglass",
"file": "Frederick Douglass (circa 1879) (cropped).jpg",
"by": "George Kendall Warren",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg"
},
"roald_amundsen": {
"who": "Roald Amundsen",
"file": "Tent and dog teams at the South Pole, 1911",
"by": "AI-generated illustration (Nordic National Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"charles_darwin": {
"who": "Charles Darwin",
"file": "HMS Beagle in the Galápagos, 1835",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"louis_pasteur": {
"who": "Louis Pasteur",
"file": "Laboratory with swan-neck flasks, 1860s Paris",
"by": "AI-generated illustration (Academic history painting)",
"lic": "AI illustration",
"url": ""
},
"wilbur_wright": {
"who": "Wilbur Wright",
"file": "Glider soaring over the Kitty Hawk dunes, 1902",
"by": "AI-generated illustration (Tinted photogravure look)",
"lic": "AI illustration",
"url": ""
},
"albert_einstein": {
"who": "Albert Einstein",
"file": "Eclipse expedition telescopes, 1919",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"christa_mcauliffe": {
"who": "Christa McAuliffe",
"file": "Space shuttle on the launch pad at dawn",
"by": "AI-generated illustration (Space-age concept art)",
"lic": "AI illustration",
"url": ""
},
"mahatma_gandhi": {
"who": "Mahatma Gandhi",
"file": "The Salt March reaching the sea at Dandi, 1930",
"by": "AI-generated illustration (Bengal School wash painting)",
"lic": "AI illustration",
"url": ""
},
"nelson_mandela": {
"who": "Nelson Mandela",
"file": "Robben Island limestone quarry",
"by": "AI-generated illustration (South African linocut)",
"lic": "AI illustration",
"url": ""
},
"eleanor_roosevelt": {
"who": "Eleanor Roosevelt",
"file": "UN General Assembly in Paris, 1948",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"alan_turing": {
"who": "Alan Turing",
"file": "Codebreaking machine room at Bletchley Park",
"by": "AI-generated illustration (WWII poster art)",
"lic": "AI illustration",
"url": ""
},
"carl_sagan": {
"who": "Carl Sagan",
"file": "Spacecraft passing Saturn and its rings",
"by": "AI-generated illustration (Space-age concept art)",
"lic": "AI illustration",
"url": ""
},
"arthur_c_clarke": {
"who": "Arthur C. Clarke",
"file": "Satellite in orbit above Earth",
"by": "AI-generated illustration (Space-age concept art)",
"lic": "AI illustration",
"url": ""
},
"emmeline_pankhurst": {
"who": "Emmeline Pankhurst",
"file": "Suffragette procession in London, 1910s",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"elizabeth_blackwell": {
"who": "Elizabeth Blackwell",
"file": "Medical college lecture theatre, 1840s",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"alberto_santos_dumont": {
"who": "Alberto Santos-Dumont",
"file": "Airship circling the Eiffel Tower, 1901",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"douglas_mawson": {
"who": "Douglas Mawson",
"file": "Lone sledger in an Antarctic blizzard, 1912",
"by": "AI-generated illustration (Tinted photogravure look)",
"lic": "AI illustration",
"url": ""
},
"florence_nightingale": {
"who": "Florence Nightingale",
"file": "Lamp-lit hospital ward at Scutari, 1855",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"swami_vivekananda": {
"who": "Swami Vivekananda",
"file": "Chicago World's Fair 1893, Parliament of Religions",
"by": "AI-generated illustration (Academic history painting)",
"lic": "AI illustration",
"url": ""
},
"beryl_markham": {
"who": "Beryl Markham",
"file": "Monoplane flying west over the Atlantic at night, 1936",
"by": "AI-generated illustration (Streamline Moderne illustration)",
"lic": "AI illustration",
"url": ""
},
"fridtjof_nansen": {
"who": "Fridtjof Nansen",
"file": "The Fram locked in Arctic ice",
"by": "AI-generated illustration (Nordic National Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"maria_mitchell": {
"who": "Maria Mitchell",
"file": "Rooftop telescope on Nantucket, 1847",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"king": {
"who": "Martin Luther King Jr.",
"file": "Martin Luther King Jr NYWTS 4.jpg",
"by": "New York World-Telegram and the Sun staff photographer: Albertin, Walter, photog",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Martin_Luther_King_Jr_NYWTS_4.jpg"
},
"reagan": {
"who": "Ronald Reagan",
"file": "Official Portrait of President Reagan 1981.jpg",
"by": "Michael Evans",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Official_Portrait_of_President_Reagan_1981.jpg"
},
"amelia_earhart": {
"who": "Amelia Earhart",
"file": "Red monoplane crossing the Atlantic, 1932",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"aurelius": {
"who": "Marcus Aurelius",
"file": "Marcus Aurelius Glyptothek München (3x4 cropped).jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Marcus_Aurelius_Glyptothek_M%C3%BCnchen_%283x4_cropped%29.jpg"
},
"epictetus": {
"who": "Epictetus",
"file": "Epictetus from L. Annaei Senecae philosophi Opera, 1605, title page detail.png",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Epictetus_from_L._Annaei_Senecae_philosophi_Opera%2C_1605%2C_title_page_detail.png"
},
"horace": {
"who": "Horace",
"file": "Quintus Horatius Flaccus.jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Quintus_Horatius_Flaccus.jpg"
},
"seneca": {
"who": "Seneca",
"file": "Double herm of Socrates and Seneca (Berlin Ant Sk 397) 03.jpg",
"by": "Mark Landon",
"lic": "CC BY 4.0",
"url": "https://commons.wikimedia.org/wiki/File:Double_herm_of_Socrates_and_Seneca_%28Berlin_Ant_Sk_397%29_03.jpg"
},
"heraclitus": {
"who": "Heraclitus",
"file": "Johannes Moreelse (after 1602-1634) (attributed to) - Heraclitus, Ancient Greek Scientist - VIS.1671 - Sheffield Galleries and Museums Trust.jpg",
"by": "Johannes Moreelse",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Johannes_Moreelse_%28after_1602-1634%29_%28attributed_to%29_-_Heraclitus%2C_Ancient_Greek_Scientist_-_VIS.1671_-_Sheffield_Galleries_and_Museums_Trust.jpg"
},
"homer": {
"who": "Homer",
"file": "Achaean ships beached on the Trojan shore",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"hesiod": {
"who": "Hesiod",
"file": "Ploughing beneath Mount Helicon, archaic Boeotia",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"aesop": {
"who": "Aesop",
"file": "Tortoise and hare on an ancient Greek road",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"pindar": {
"who": "Pindar",
"file": "Chariot race at Olympia",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"sophocles": {
"who": "Sophocles",
"file": "Sacred grove at Colonus near Athens",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"euripides": {
"who": "Euripides",
"file": "Sea cave on Salamis island",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"herodotus": {
"who": "Herodotus",
"file": "Traveler before the Egyptian pyramids, 5th century BC",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"pericles": {
"who": "Pericles",
"file": "Athenian funeral procession beneath the Acropolis, 431 BC",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"socrates": {
"who": "Socrates",
"file": "Athenian agora at dawn, 399 BC",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"plato": {
"who": "Plato",
"file": "Olive grove of the Academy outside Athens",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"aristotle": {
"who": "Aristotle",
"file": "Aristotle Altemps Inv8575.jpg",
"by": "After Lysippos",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg"
},
"periander": {
"who": "Periander",
"file": "Ships hauled across the Isthmus of Corinth",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"pittacus": {
"who": "Pittacus",
"file": "Harbor of Mytilene on Lesbos, 600 BC",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"bias": {
"who": "Bias of Priene",
"file": "Ionian city of Priene beneath its cliffs",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"zeno": {
"who": "Zeno of Citium",
"file": "Painted Stoa in Athens, 300 BC",
"by": "AI-generated illustration (Hellenistic wall painting)",
"lic": "AI illustration",
"url": ""
},
"diogenes": {
"who": "Diogenes of Sinope",
"file": "Cynic's clay jar in the Athenian agora",
"by": "AI-generated illustration (Hellenistic wall painting)",
"lic": "AI illustration",
"url": ""
},
"democritus": {
"who": "Democritus",
"file": "Abdera on the Thracian coast",
"by": "AI-generated illustration (Hellenistic wall painting)",
"lic": "AI illustration",
"url": ""
},
"menander": {
"who": "Menander",
"file": "Comic actors in masks on a Greek stage",
"by": "AI-generated illustration (Hellenistic pebble-tessera mosaic)",
"lic": "AI illustration",
"url": ""
},
"alexander": {
"who": "Alexander the Great",
"file": "Battle of the Hydaspes with war elephants, 326 BC",
"by": "AI-generated illustration (Hellenistic pebble-tessera mosaic)",
"lic": "AI illustration",
"url": ""
},
"terence": {
"who": "Terence",
"file": "Roman festival theater performance, 161 BC",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"cicero": {
"who": "Cicero",
"file": "Roman Senate house and Forum, 44 BC",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"virgil": {
"who": "Virgil",
"file": "Mantuan countryside with shepherds",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"livy": {
"who": "Livy",
"file": "Ancient Rome from the Janiculum, Augustan era",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"augustus": {
"who": "Augustus",
"file": "Marble Rome under Augustus",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"ovid": {
"who": "Ovid",
"file": "Imagined portrait (Fayum mummy portrait)",
"by": "AI-generated illustration",
"lic": "AI illustration",
"url": ""
},
"plutarch": {
"who": "Plutarch",
"file": "Temple of Apollo at Delphi",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"quintilian": {
"who": "Quintilian",
"file": "Imagined portrait (Fayum mummy portrait)",
"by": "AI-generated illustration",
"lic": "AI illustration",
"url": ""
},
"boethius": {
"who": "Boethius",
"file": "Prison tower at Pavia, 524 AD",
"by": "AI-generated illustration (Byzantine gold mosaic)",
"lic": "AI illustration",
"url": ""
},
"lord_chesterfield": {
"who": "Lord Chesterfield",
"file": "Georgian London library above St James's Park",
"by": "AI-generated illustration (18th-century copperplate engraving)",
"lic": "AI illustration",
"url": ""
},
"lydia_maria_child": {
"who": "Lydia Maria Child",
"file": "New England farmhouse kitchen, 1830s",
"by": "AI-generated illustration (19th-century genre oil)",
"lic": "AI illustration",
"url": ""
},
"saadi": {
"who": "Saadi",
"file": "Saadi by Hossein Behzad (1894–1968) (Inverted).jpg",
"by": "Hossein Behzad",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Saadi_by_Hossein_Behzad_%281894%E2%80%931968%29_%28Inverted%29.jpg"
},
"alfred_p_sloan": {
"who": "Alfred P. Sloan",
"file": "Detroit motorcar plant and office tower, 1927",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"w_edwards_deming": {
"who": "W. Edwards Deming",
"file": "A Japanese factory floor, c. 1950 (1950s Japanese industrial poster)",
"by": "AI-generated illustration",
"lic": "AI illustration",
"url": ""
},
"henry_j_kaiser": {
"who": "Henry J. Kaiser",
"file": "Building the great dam in Black Canyon, 1930s",
"by": "AI-generated illustration (WPA heroic mural)",
"lic": "AI illustration",
"url": ""
},
"charlie_munger": {
"who": "Charlie Munger",
"file": "Vast sunlit library reading room",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"andrew_grove": {
"who": "Andrew Grove",
"file": "Glowing silicon chip fabrication cleanroom",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"soichiro_honda": {
"who": "Soichiro Honda",
"file": "Post-war Hamamatsu engine workshop, Mount Fuji",
"by": "AI-generated illustration (Shin-hanga woodblock print)",
"lic": "AI illustration",
"url": ""
},
"n_r_narayana_murthy": {
"who": "N. R. Narayana Murthy",
"file": "Bangalore technology campus at dusk",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"satya_nadella": {
"who": "Satya Nadella",
"file": "Glass campus among firs near Seattle",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"mary_barra": {
"who": "Mary Barra",
"file": "Electric-vehicle factory floor in Michigan",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"jeff_bezos": {
"who": "Jeff Bezos",
"file": "Vast modern parcel fulfilment warehouse",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"buffett": {
"who": "Warren Buffett",
"file": "Warren Buffett KU Visit.jpg",
"by": "Mark Hirschey",
"lic": "CC BY-SA 2.0",
"url": "https://commons.wikimedia.org/wiki/File:Warren_Buffett_KU_Visit.jpg"
},
"mary_proctor": {
"who": "Mary Proctor",
"file": "Rooftop telescope under the moon, 1901",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"james_whitcomb_riley": {
"who": "James Whitcomb Riley",
"file": "Indiana farm at frosty autumn sunrise",
"by": "AI-generated illustration (American Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"lillian_nordica": {
"who": "Lillian Nordica",
"file": "Grand opera house stage, 1890s",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"john_lubbock": {
"who": "John Lubbock",
"file": "Kentish countryside on a sunny day",
"by": "AI-generated illustration (Romantic landscape oil)",
"lic": "AI illustration",
"url": ""
},
"francis_de_sales": {
"who": "Francis de Sales",
"file": "Lake Annecy and the Savoy Alps",
"by": "AI-generated illustration (Baroque oil painting)",
"lic": "AI illustration",
"url": ""
},
"adelaide_anne_procter": {
"who": "Adelaide Anne Procter",
"file": "Riverside meadow at dawn, 1850s",
"by": "AI-generated illustration (Pre-Raphaelite oil)",
"lic": "AI illustration",
"url": ""
},
"susan_coolidge": {
"who": "Susan Coolidge",
"file": "New England dawn over hills and lake",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"zhuangzi": {
"who": "Zhuangzi",
"file": "Mountain stream and butterfly among pines",
"by": "AI-generated illustration (Chinese ink-and-wash)",
"lic": "AI illustration",
"url": ""
},
"edgar_guest": {
"who": "Edgar Guest",
"file": "Detroit neighbourhood at morning, 1919",
"by": "AI-generated illustration (Golden Age illustration oil)",
"lic": "AI illustration",
"url": ""
},
"ben_zoma": {
"who": "Ben Zoma",
"file": "Sages teaching in a Galilean study house",
"by": "AI-generated illustration (Dura-Europos fresco)",
"lic": "AI illustration",
"url": ""
},
"shammai": {
"who": "Shammai",
"file": "Sage with a builder's measuring rod, Jerusalem",
"by": "AI-generated illustration (Dura-Europos fresco)",
"lic": "AI illustration",
"url": ""
},
"buddha": {
"who": "The Buddha",
"file": "Buddha in Sarnath Museum (Dhammajak Mutra).jpg",
"by": "พระมหาเทวประภาส วชิรญาณเมธี (ผู้ถ่าย-ปล่อยสัญญาอนุญาตภาพให้นำไปใช้ได้เพื่อการศึก",
"lic": "CC BY-SA 3.0",
"url": "https://commons.wikimedia.org/wiki/File:Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg"
},
"ella_wheeler_wilcox": {
"who": "Ella Wheeler Wilcox",
"file": "Ella W. Wilcox LCCN2014709802 (cropped).jpg",
"by": "Bain News Service, publisher",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Ella_W._Wilcox_LCCN2014709802_%28cropped%29.jpg"
},
"oliver_wendell_holmes_sr": {
"who": "Oliver Wendell Holmes Sr.",
"file": "Rower on Boston's Charles River, 1860s",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"jean_webster": {
"who": "Jean Webster",
"file": "College campus in spring, 1912",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"dinah_craik": {
"who": "Dinah Craik",
"file": "Two friends in a cottage garden",
"by": "AI-generated illustration (Pre-Raphaelite oil)",
"lic": "AI illustration",
"url": ""
},
"henry_wotton": {
"who": "Henry Wotton",
"file": "Jacobean country garden at peace",
"by": "AI-generated illustration (Baroque oil painting)",
"lic": "AI illustration",
"url": ""
},
"fyodor_dostoevsky": {
"who": "Fyodor Dostoevsky",
"file": "Vasily Perov - Портрет Ф.М.Достоевского - Google Art Project.jpg",
"by": "Vasily Perov",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg"
},
"vyasa": {
"who": "Vyasa",
"file": "Sage's forest hermitage on the Ganges",
"by": "AI-generated illustration (Ajanta cave mural)",
"lic": "AI illustration",
"url": ""
},
"ptahhotep": {
"who": "Ptahhotep",
"file": "Old Kingdom sage teaching beside the Nile",
"by": "AI-generated illustration (Egyptian tomb painting)",
"lic": "AI illustration",
"url": ""
},
"william_george_jordan": {
"who": "William George Jordan",
"file": "Calm starry night above a city",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"charles_wagner": {
"who": "Charles Wagner",
"file": "Simple Alsace village at evening",
"by": "AI-generated illustration (French naturalist oil)",
"lic": "AI illustration",
"url": ""
},
"william_makepeace_thackeray": {
"who": "William Makepeace Thackeray",
"file": "Glittering Regency ballroom of mirrors",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"maurice_maeterlinck": {
"who": "Maurice Maeterlinck",
"file": "Glowing cottage window in a dark forest",
"by": "AI-generated illustration (Belgian Symbolist painting)",
"lic": "AI illustration",
"url": ""
},
"sydney_smith": {
"who": "Sydney Smith",
"file": "Somerset rectory garden at morning",
"by": "AI-generated illustration (Romantic landscape oil)",
"lic": "AI illustration",
"url": ""
},
"anne_bradstreet": {
"who": "Anne Bradstreet",
"file": "Massachusetts village at spring thaw",
"by": "AI-generated illustration (Dutch Golden Age landscape oil)",
"lic": "AI illustration",
"url": ""
},
"phillips_brooks": {
"who": "Phillips Brooks",
"file": "Romanesque church in Boston, 1880s",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"edward_everett_hale": {
"who": "Edward Everett Hale",
"file": "Boston harbour at sunrise, 1870",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"washington_irving": {
"who": "Washington Irving",
"file": "Hudson Valley and Catskills at golden hour",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"henry_ward_beecher": {
"who": "Henry Ward Beecher",
"file": "Brooklyn Heights and East River ferries, 1858",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"george_macdonald": {
"who": "George MacDonald",
"file": "Enchanted Victorian fairy forest",
"by": "AI-generated illustration (Edwardian book watercolor)",
"lic": "AI illustration",
"url": ""
},
"joseph_addison": {
"who": "Joseph Addison",
"file": "London from Hampstead, lightning then sunshine",
"by": "AI-generated illustration (Georgian landscape oil)",
"lic": "AI illustration",
"url": ""
},
"edwin_markham": {
"who": "Edwin Markham",
"file": "Great circle of people on a hilltop",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"kate_douglas_wiggin": {
"who": "Kate Douglas Wiggin",
"file": "Maine farm with brook and stage coach",
"by": "AI-generated illustration (Edwardian book watercolor)",
"lic": "AI illustration",
"url": ""
},
"leonardo_da_vinci": {
"who": "Leonardo da Vinci",
"file": "Renaissance engineer's workshop by Milan canals",
"by": "AI-generated illustration (Renaissance oil painting)",
"lic": "AI illustration",
"url": ""
},
"joshua_reynolds": {
"who": "Joshua Reynolds",
"file": "A London painter's studio, 1770s",
"by": "AI-generated illustration (Grand Manner history painting)",
"lic": "AI illustration",
"url": ""
},
"ludwig_van_beethoven": {
"who": "Ludwig van Beethoven",
"file": "Walker on the Heiligenstadt hills in a storm",
"by": "AI-generated illustration (German Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"jacob_riis": {
"who": "Jacob Riis",
"file": "Stonecutter splitting a granite block",
"by": "AI-generated illustration (Ashcan School oil)",
"lic": "AI illustration",
"url": ""
},
"thomas_henry_huxley": {
"who": "Thomas Henry Huxley",
"file": "Oxford evolution debate, 1860",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"clara_barton": {
"who": "Clara Barton",
"file": "Relief workers handing out supplies, 1889",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"jawaharlal_nehru": {
"who": "Jawaharlal Nehru",
"file": "Delhi crowds at midnight, independence 1947",
"by": "AI-generated illustration (Indian independence-era poster art)",
"lic": "AI illustration",
"url": ""
},
"chester_w_nimitz": {
"who": "Chester W. Nimitz",
"file": "Landing craft approaching Iwo Jima, 1945",
"by": "AI-generated illustration (WWII poster art)",
"lic": "AI illustration",
"url": ""
},
"richard_feynman": {
"who": "Richard Feynman",
"file": "Physics lecture hall, Caltech, 1960s",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"michael_faraday": {
"who": "Michael Faraday",
"file": "Royal Institution candle lecture, 1860",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"ida_m_tarbell": {
"who": "Ida M. Tarbell",
"file": "Titusville oil boomtown, 1860s",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"isaac_newton": {
"who": "Isaac Newton",
"file": "Prism splitting sunlight in a darkened chamber",
"by": "AI-generated illustration (Enlightenment candlelit oil)",
"lic": "AI illustration",
"url": ""
},
"kalpana_chawla": {
"who": "Kalpana Chawla",
"file": "Space shuttle orbiting above glowing Earth",
"by": "AI-generated illustration (Space-age concept art)",
"lic": "AI illustration",
"url": ""
},
"katherine_johnson": {
"who": "Katherine Johnson",
"file": "1960s research office and rocket at dawn",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"wangari_maathai": {
"who": "Wangari Maathai",
"file": "Tree seedlings planted across the Kenyan highlands",
"by": "AI-generated illustration (1970s East African poster art)",
"lic": "AI illustration",
"url": ""
},
"vincent_van_gogh": {
"who": "Vincent van Gogh",
"file": "Sower in a wheat field at sunset",
"by": "AI-generated illustration (Post-Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"auguste_rodin": {
"who": "Auguste Rodin",
"file": "Sculptor's studio with great marble block",
"by": "AI-generated illustration (Academic history painting)",
"lic": "AI illustration",
"url": ""
},
"abigail_adams": {
"who": "Abigail Adams",
"file": "Massachusetts farmhouse overlooking Boston harbor, 1774",
"by": "AI-generated illustration (18th-century copperplate engraving)",
"lic": "AI illustration",
"url": ""
},
"chuck_yeager": {
"who": "Chuck Yeager",
"file": "Orange rocket plane over the Mojave, 1947",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"sertorius": {
"who": "Sertorius",
"file": "Plucking a horse's tail hair by hair",
"by": "AI-generated illustration (Roman floor mosaic)",
"lic": "AI illustration",
"url": ""
},
"antisthenes": {
"who": "Antisthenes",
"file": "Philosopher teaching at the Cynosarges gymnasium",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"theophrastus": {
"who": "Theophrastus",
"file": "Walking students in the Lyceum garden",
"by": "AI-generated illustration (Hellenistic wall painting)",
"lic": "AI illustration",
"url": ""
},
"bion_of_borysthenes": {
"who": "Bion of Borysthenes",
"file": "Wandering philosopher in a Hellenistic agora",
"by": "AI-generated illustration (Hellenistic wall painting)",
"lic": "AI illustration",
"url": ""
},
"polemo": {
"who": "Polemo",
"file": "Philosopher in the Academy grove at work",
"by": "AI-generated illustration (Hellenistic wall painting)",
"lic": "AI illustration",
"url": ""
},
"sallust": {
"who": "Sallust",
"file": "The Roman Senate during Catiline's conspiracy, 63 BC",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"pliny_younger": {
"who": "Pliny the Younger",
"file": "Vesuvius erupting over the Bay of Naples, 79 AD (Pompeian fresco)",
"by": "AI-generated illustration",
"lic": "AI illustration",
"url": ""
},
"juvenal": {
"who": "Juvenal",
"file": "Crowded streets of imperial Rome",
"by": "AI-generated illustration (Roman floor mosaic)",
"lic": "AI illustration",
"url": ""
},
"persius": {
"who": "Persius",
"file": "Archer taking aim in an Etruscan landscape",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"publilius_syrus": {
"who": "Publilius Syrus",
"file": "Mime actors on a Roman stage",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"xenophanes": {
"who": "Xenophanes",
"file": "Wandering poet-philosopher on the Elea coast",
"by": "AI-generated illustration (Attic black-figure amphora painting)",
"lic": "AI illustration",
"url": ""
},
"plotinus": {
"who": "Plotinus",
"file": "Sculptor carving a draped statue",
"by": "AI-generated illustration (Late Roman fresco)",
"lic": "AI illustration",
"url": ""
},
"longinus": {
"who": "Longinus",
"file": "Figure gazing at Etna erupting at night",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"pliny_the_elder": {
"who": "Pliny the Elder",
"file": "Apelles painting a panel in his studio",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"lacydes": {
"who": "Lacydes",
"file": "Elderly scholar drawing geometry in sand",
"by": "AI-generated illustration (Hellenistic wall painting)",
"lic": "AI illustration",
"url": ""
},
"pyrrho": {
"who": "Pyrrho",
"file": "Philosopher alone on a riverbank at Elis",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"solon": {
"who": "Solon",
"file": "Athenian assembly before the archaic Acropolis, 590 BC",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"lucretius": {
"who": "Lucretius",
"file": "Roman villa above the Bay of Naples at night",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"hippocrates": {
"who": "Hippocrates",
"file": "Physicians at the Asclepieion of Kos",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"isocrates": {
"who": "Isocrates",
"file": "Students listening in an Athenian school",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"theognis_of_megara": {
"who": "Theognis of Megara",
"file": "Symposium with lyre at Megara",
"by": "AI-generated illustration (Attic black-figure amphora painting)",
"lic": "AI illustration",
"url": ""
},
"simonides_of_ceos": {
"who": "Simonides",
"file": "Climbing the steep rock to Virtue",
"by": "AI-generated illustration (Attic black-figure amphora painting)",
"lic": "AI illustration",
"url": ""
},
"fabius_maximus": {
"who": "Fabius Maximus",
"file": "Patient Roman army camp on hills",
"by": "AI-generated illustration (Roman floor mosaic)",
"lic": "AI illustration",
"url": ""
},
"agesilaus": {
"who": "Agesilaus",
"file": "Spartan king in a simple Laconian valley",
"by": "AI-generated illustration (Attic red-figure krater)",
"lic": "AI illustration",
"url": ""
},
"francis_bacon": {
"who": "Francis Bacon",
"file": "Jacobean garden walk at Gray's Inn",
"by": "AI-generated illustration (Baroque oil painting)",
"lic": "AI illustration",
"url": ""
},
"philip_gilbert_hamerton": {
"who": "Philip Gilbert Hamerton",
"file": "Burgundy country house and Morvan hills",
"by": "AI-generated illustration (Victorian etching)",
"lic": "AI illustration",
"url": ""
},
"hiram_maxim": {
"who": "Hiram Maxim",
"file": "Giant steam flying machine on rails, 1894",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"joseph_hodges_choate": {
"who": "Joseph Hodges Choate",
"file": "Gilded Age New York courtroom",
"by": "AI-generated illustration (Academic history painting)",
"lic": "AI illustration",
"url": ""
},
"chauncey_depew": {
"who": "Chauncey Depew",
"file": "Steam trains under great rail shed, 1900",
"by": "AI-generated illustration (Ashcan School oil)",
"lic": "AI illustration",
"url": ""
},
"lew_wallace": {
"who": "Lew Wallace",
"file": "Chariot race in a Roman circus",
"by": "AI-generated illustration (1890s theatrical lithograph poster)",
"lic": "AI illustration",
"url": ""
},
"edwin_austin_abbey": {
"who": "Edwin Austin Abbey",
"file": "Mural studio with Arthurian canvas",
"by": "AI-generated illustration (Edwardian academic mural)",
"lic": "AI illustration",
"url": ""
},
"charles_dana_gibson": {
"who": "Charles Dana Gibson",
"file": "Fifth Avenue promenade, 1900",
"by": "AI-generated illustration (Edwardian pen-and-ink illustration)",
"lic": "AI illustration",
"url": ""
},
"shemaiah": {
"who": "Shemaiah",
"file": "Artisans at work in ancient Jerusalem",
"by": "AI-generated illustration (Dura-Europos fresco)",
"lic": "AI illustration",
"url": ""
},
"marie_curie": {
"who": "Marie Curie",
"file": "Paris laboratory with glowing radium, 1900s",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"george_stephenson": {
"who": "George Stephenson",
"file": "Pioneering steam locomotive at Rainhill, 1829",
"by": "AI-generated illustration (Turneresque Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"russell_sage": {
"who": "Russell Sage",
"file": "Hudson River grocery waterfront, Troy 1830s",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"hazen_s_pingree": {
"who": "Hazen S. Pingree",
"file": "Detroit vacant lots turned potato gardens, 1890s",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"frederick_burr_opper": {
"who": "Frederick Burr Opper",
"file": "Cartoonist's studio above New York rooftops",
"by": "AI-generated illustration (Edwardian pen-and-ink illustration)",
"lic": "AI illustration",
"url": ""
},
"okakura_kakuzo": {
"who": "Okakura Kakuzō",
"file": "Okakura Kakuzo Portrait c1905.png",
"by": "Unknown",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Okakura_Kakuzo_Portrait_c1905.png"
},
"bill_gates": {
"who": "Bill Gates",
"file": "Early microcomputer office in the desert, late 1970s",
"by": "AI-generated illustration (1980s airbrush illustration)",
"lic": "AI illustration",
"url": ""
},
"hamilton_wright_mabie": {
"who": "Hamilton Wright Mabie",
"file": "Workers crossing Brooklyn Bridge at sunset",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"catharine_beecher": {
"who": "Catharine Beecher",
"file": "New England female seminary schoolroom, 1840s",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"richard_mansfield": {
"who": "Richard Mansfield",
"file": "Broadway stage under limelight, 1900",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"nathan_straus": {
"who": "Nathan Straus",
"file": "Pure-milk depot on a Manhattan pier, 1890s",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"robert_collyer": {
"who": "Robert Collyer",
"file": "Yorkshire village forge at work",
"by": "AI-generated illustration (Enlightenment candlelit oil)",
"lic": "AI illustration",
"url": ""
},
"james_loudon": {
"who": "James Loudon",
"file": "University College Toronto in autumn, 1905",
"by": "AI-generated illustration (Canadian Northern Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"henry_merwin_shrady": {
"who": "Henry Merwin Shrady",
"file": "Sculptor's foundry casting a bronze horse",
"by": "AI-generated illustration (Academic history painting)",
"lic": "AI illustration",
"url": ""
},
"thomas_lipton": {
"who": "Thomas Lipton",
"file": "Ceylon tea estate hills at sunrise",
"by": "AI-generated illustration (Edwardian travel poster)",
"lic": "AI illustration",
"url": ""
},
"alice_barber_stephens": {
"who": "Alice Barber Stephens",
"file": "Philadelphia illustrators' studio, 1900",
"by": "AI-generated illustration (Golden Age illustration oil)",
"lic": "AI illustration",
"url": ""
},
"carl_hilty": {
"who": "Carl Hilty",
"file": "Mountain path above a Swiss valley",
"by": "AI-generated illustration (Swiss Alpine Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"anton_chekhov": {
"who": "Anton Chekhov",
"file": "Moscow river and churches at dusk",
"by": "AI-generated illustration (Russian realist landscape oil)",
"lic": "AI illustration",
"url": ""
},
"ralph_waldo_trine": {
"who": "Ralph Waldo Trine",
"file": "Radiant sun rising over hills and lake",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"richard_jefferies": {
"who": "Richard Jefferies",
"file": "Wiltshire downs on a summer day",
"by": "AI-generated illustration (Romantic landscape oil)",
"lic": "AI illustration",
"url": ""
},
"simeon_ben_gamaliel": {
"who": "Simeon ben Gamaliel",
"file": "Sages in quiet study in Jerusalem",
"by": "AI-generated illustration (Dura-Europos fresco)",
"lic": "AI illustration",
"url": ""
},
"fred_rogers": {
"who": "Fred Rogers",
"file": "Pittsburgh neighbourhood at dusk",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"thich_nhat_hanh": {
"who": "Thích Nhất Hạnh",
"file": "Monks in walking meditation among plum trees",
"by": "AI-generated illustration (Vietnamese silk painting)",
"lic": "AI illustration",
"url": ""
},
"c_s_lewis": {
"who": "C. S. Lewis",
"file": "Oxford spires and riverside walk at dusk",
"by": "AI-generated illustration (Mid-century British illustration)",
"lic": "AI illustration",
"url": ""
},
"maya_angelou": {
"who": "Maya Angelou",
"file": "Bird soaring over Southern fields at dawn",
"by": "AI-generated illustration (Harlem Renaissance mural)",
"lic": "AI illustration",
"url": ""
},
"thomas_a_kempis": {
"who": "Thomas à Kempis",
"file": "Thomas von Kempen JS.JPG",
"by": "zeitgenössischer Maler",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Thomas_von_Kempen_JS.JPG"
},
"elizabeth_barrett_browning": {
"who": "Elizabeth Barrett Browning",
"file": "Elizabeth Barrett Browning.jpg",
"by": "",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Elizabeth_Barrett_Browning.jpg"
},
"john_burroughs": {
"who": "John Burroughs",
"file": "Naturalist's cabin above the Hudson Valley",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"izaak_walton": {
"who": "Izaak Walton",
"file": "Angler fishing in an English meadow river",
"by": "AI-generated illustration (Dutch Golden Age landscape oil)",
"lic": "AI illustration",
"url": ""
},
"edward_whymper": {
"who": "Edward Whymper",
"file": "Roped climbers on an Alpine ridge",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"john_tyndall": {
"who": "John Tyndall",
"file": "Climbers crossing an Alpine glacier",
"by": "AI-generated illustration (Romantic watercolor)",
"lic": "AI illustration",
"url": ""
},
"james_nasmyth": {
"who": "James Nasmyth",
"file": "Steam hammer forging in a Victorian foundry",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"hermann_von_helmholtz": {
"who": "Hermann von Helmholtz",
"file": "Climber on a misty Alpine peak",
"by": "AI-generated illustration (German Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"felix_mendelssohn": {
"who": "Felix Mendelssohn",
"file": "Waves surging into Fingal's Cave",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"pyotr_ilyich_tchaikovsky": {
"who": "Pyotr Ilyich Tchaikovsky",
"file": "Swan ballet on a moonlit stage, 1870s",
"by": "AI-generated illustration (Russian realist oil)",
"lic": "AI illustration",
"url": ""
},
"john_herschel": {
"who": "John Herschel",
"file": "Great telescope under Table Mountain stars",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"mary_somerville": {
"who": "Mary Somerville",
"file": "Fife coast under planets and stars",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"horace_mann": {
"who": "Horace Mann",
"file": "Antioch College in Ohio, 1850s",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"john_james_audubon": {
"who": "John James Audubon",
"file": "Artist-naturalist sketching in a Louisiana bayou",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"louis_agassiz": {
"who": "Louis Agassiz",
"file": "Scientists' hut on an Alpine glacier, 1840s",
"by": "AI-generated illustration (Romantic watercolor)",
"lic": "AI illustration",
"url": ""
},
"charles_eastman": {
"who": "Charles Eastman (Ohiyesa)",
"file": "Charles eastman smithsonian gn 03462a.jpg",
"by": "Sawyer, Wells Moses Artist",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Charles_eastman_smithsonian_gn_03462a.jpg"
},
"ernest_shackleton": {
"who": "Ernest Shackleton",
"file": "Endurance trapped in Antarctic pack ice, 1915",
"by": "AI-generated illustration (Tinted photogravure look)",
"lic": "AI illustration",
"url": ""
},
"rachel_carson": {
"who": "Rachel Carson",
"file": "Maine rocky coast and tide pools at dawn",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"anne_sullivan": {
"who": "Anne Sullivan",
"file": "Teacher and child at a garden water pump, 1887",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"franz_liszt": {
"who": "Franz Liszt",
"file": "Pianist on a grand concert stage, 1850s",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"wolfgang_amadeus_mozart": {
"who": "Wolfgang Amadeus Mozart",
"file": "Salzburg salon concert, 1776",
"by": "AI-generated illustration (Rococo oil painting)",
"lic": "AI illustration",
"url": ""
},
"apsley_cherry_garrard": {
"who": "Apsley Cherry-Garrard",
"file": "Antarctic winter journey under the aurora",
"by": "AI-generated illustration (Expedition watercolor)",
"lic": "AI illustration",
"url": ""
},
"jonas_salk": {
"who": "Jonas Salk",
"file": "Vaccine laboratory in gleaming light, 1950s",
"by": "AI-generated illustration (Mid-century magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"a_p_j_abdul_kalam": {
"who": "A. P. J. Abdul Kalam",
"file": "Rocket launch from an Indian coast at dawn",
"by": "AI-generated illustration (Indian space-age poster art)",
"lic": "AI illustration",
"url": ""
},
"ellen_terry": {
"who": "Ellen Terry",
"file": "Shakespeare on a London stage, 1880s",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"leotychidas_i": {
"who": "Leotychidas I",
"file": "Spartan farmer working his own fields",
"by": "AI-generated illustration (Laconian black-figure cup)",
"lic": "AI illustration",
"url": ""
},
"thales": {
"who": "Thales",
"file": "Solar eclipse over Miletus, 585 BC",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"cleobulus": {
"who": "Cleobulus",
"file": "Acropolis of Lindos above the sea, Rhodes",
"by": "AI-generated illustration (Attic black-figure amphora)",
"lic": "AI illustration",
"url": ""
},
"vitruvius": {
"who": "Vitruvius",
"file": "Roman builders raising a basilica",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"marcus_cornelius_fronto": {
"who": "Marcus Cornelius Fronto",
"file": "Roman tutor's garden study",
"by": "AI-generated illustration (Roman fresco)",
"lic": "AI illustration",
"url": ""
},
"demetrius_the_cynic": {
"who": "Demetrius the Cynic",
"file": "Cynic philosopher on a Roman road",
"by": "AI-generated illustration (Roman fresco)",
"lic": "AI illustration",
"url": ""
},
"quintus_sextius": {
"who": "Quintus Sextius",
"file": "Roman philosopher at evening reflection",
"by": "AI-generated illustration (Roman fresco)",
"lic": "AI illustration",
"url": ""
},
"demonax": {
"who": "Demonax",
"file": "Athenian sage in the agora",
"by": "AI-generated illustration (Classical Greek fresco)",
"lic": "AI illustration",
"url": ""
},
"polybius": {
"who": "Polybius",
"file": "Carthage burning, 146 BC",
"by": "AI-generated illustration (Pompeian fresco)",
"lic": "AI illustration",
"url": ""
},
"daniel_defoe": {
"who": "Daniel Defoe",
"file": "Georgian London trading wharf",
"by": "AI-generated illustration (18th-century copperplate engraving)",
"lic": "AI illustration",
"url": ""
},
"j_g_holland": {
"who": "J. G. Holland",
"file": "New England valley town, 1860s",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"frank_crane": {
"who": "Frank Crane",
"file": "American small town reading the paper, 1919",
"by": "AI-generated illustration (1930s WPA mural)",
"lic": "AI illustration",
"url": ""
},
"william_penn": {
"who": "William Penn",
"file": "Early Philadelphia on the Delaware, 1690s",
"by": "AI-generated illustration (17th-century copperplate engraving)",
"lic": "AI illustration",
"url": ""
},
"henry_van_dyke": {
"who": "Henry van Dyke",
"file": "Portrait of Henry van Dyke.jpg",
"by": "Harris & Ewing",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Portrait_of_Henry_van_Dyke.jpg"
},
"anthony_trollope": {
"who": "Anthony Trollope",
"file": "Cathedral close and post road, 1860s",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"jeremy_taylor": {
"who": "Jeremy Taylor",
"file": "Welsh valley estate in evening light",
"by": "AI-generated illustration (Baroque oil painting)",
"lic": "AI illustration",
"url": ""
},
"darius_ogden_mills": {
"who": "Darius Ogden Mills",
"file": "Gold Rush Sacramento bank and riverboats, 1850s",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"william_cornelius_van_horne": {
"who": "William Cornelius Van Horne",
"file": "Steam train through the Canadian Rockies",
"by": "AI-generated illustration (Canadian Northern Romantic oil)",
"lic": "AI illustration",
"url": ""
},
"annie_payson_call": {
"who": "Annie Payson Call",
"file": "Calm New England lakeside, 1900",
"by": "AI-generated illustration (Edwardian book illustration)",
"lic": "AI illustration",
"url": ""
},
"charles_kingsley": {
"who": "Charles Kingsley",
"file": "Charles Kingsley. Photograph by Charles Watkins. Wellcome V0026646.jpg",
"by": "",
"lic": "CC BY 4.0",
"url": "https://commons.wikimedia.org/wiki/File:Charles_Kingsley._Photograph_by_Charles_Watkins._Wellcome_V0026646.jpg"
},
"thomas_jefferson": {
"who": "Thomas Jefferson",
"file": "Monticello on its mountaintop, 1816",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"charles_spurgeon": {
"who": "Charles Spurgeon",
"file": "Metropolitan Tabernacle, 1880s",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"hugh_miller": {
"who": "Hugh Miller",
"file": "Cromarty sea cliffs and sandstone shore",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"amos_lawrence": {
"who": "Amos Lawrence",
"file": "Boston merchant's waterfront, 1830",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"gertrude_jekyll": {
"who": "Gertrude Jekyll",
"file": "Surrey cottage garden borders",
"by": "AI-generated illustration (Impressionist oil painting)",
"lic": "AI illustration",
"url": ""
},
"horace_greeley": {
"who": "Horace Greeley",
"file": "American prairie farm, 1870s",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"thomas_mackellar": {
"who": "Thomas MacKellar",
"file": "Philadelphia type foundry and print shop",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"henry_maudslay": {
"who": "Henry Maudslay",
"file": "Regency machine workshop",
"by": "AI-generated illustration (Wood engraving)",
"lic": "AI illustration",
"url": ""
},
"newell_dwight_hillis": {
"who": "Newell Dwight Hillis",
"file": "Brooklyn church and skyline, 1896",
"by": "AI-generated illustration (Art Nouveau poster)",
"lic": "AI illustration",
"url": ""
},
"lucy_larcom": {
"who": "Lucy Larcom",
"file": "Vast New England view from a hilltop",
"by": "AI-generated illustration (Hudson River School luminism)",
"lic": "AI illustration",
"url": ""
},
"william_osler": {
"who": "William Osler",
"file": "Yale campus lecture hall, 1913",
"by": "AI-generated illustration (Art Nouveau poster)",
"lic": "AI illustration",
"url": ""
},
"william_morris": {
"who": "William Morris",
"file": "Arts and Crafts weaving workshop",
"by": "AI-generated illustration (Pre-Raphaelite painting)",
"lic": "AI illustration",
"url": ""
},
"thomas_bewick": {
"who": "Thomas Bewick",
"file": "Northumbrian countryside and engraver's bench",
"by": "AI-generated illustration (Wood engraving)",
"lic": "AI illustration",
"url": ""
},
"margery_williams": {
"who": "Margery Williams",
"file": "Nursery with a velveteen rabbit",
"by": "AI-generated illustration (Edwardian book illustration)",
"lic": "AI illustration",
"url": ""
},
"david_grayson": {
"who": "David Grayson (Ray Stannard Baker)",
"file": "Contented New England farm, 1907",
"by": "AI-generated illustration (Edwardian book illustration)",
"lic": "AI illustration",
"url": ""
},
"arthur_christopher_benson": {
"who": "Arthur Christopher Benson",
"file": "Cambridge college window view",
"by": "AI-generated illustration (Edwardian book illustration)",
"lic": "AI illustration",
"url": ""
},
"frederick_william_robertson": {
"who": "Frederick William Robertson",
"file": "Brighton seafront at sunrise",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"hugh_black": {
"who": "Hugh Black",
"file": "Two friends on a Scottish hill",
"by": "AI-generated illustration (Edwardian book illustration)",
"lic": "AI illustration",
"url": ""
},
"j_r_miller": {
"who": "J. R. Miller",
"file": "Philadelphia neighbourhood, 1890s",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"lilian_whiting": {
"who": "Lilian Whiting",
"file": "Radiant Boston sunrise, 1903",
"by": "AI-generated illustration (Art Nouveau poster)",
"lic": "AI illustration",
"url": ""
},
"kabir": {
"who": "Kabir",
"file": "Kabir004.jpg",
"by": "Unknown authorUnknown author",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Kabir004.jpg"
},
"matthew_arnold": {
"who": "Matthew Arnold",
"file": "Starlit sea and calm shore",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"hafiz": {
"who": "Hafiz",
"file": "Anselm Feuerbach Hafis vor der Schenke (cropped).jpg",
"by": "Anselm Feuerbach",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Anselm_Feuerbach_Hafis_vor_der_Schenke_%28cropped%29.jpg"
},
"l_frank_baum": {
"who": "L. Frank Baum",
"file": "L. Frank Baum (1911).jpg",
"by": "George Steckel",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:L._Frank_Baum_%281911%29.jpg"
},
"selma_lagerlof": {
"who": "Selma Lagerlöf",
"file": "Wild geese over Lapland",
"by": "AI-generated illustration (Scandinavian national-romantic painting)",
"lic": "AI illustration",
"url": ""
},
"thomas_hughes": {
"who": "Thomas Hughes",
"file": "Rugby School playing fields",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"john_oxenham": {
"who": "John Oxenham",
"file": "Crossroads of high and low paths",
"by": "AI-generated illustration (Edwardian book illustration)",
"lic": "AI illustration",
"url": ""
},
"jose_ben_joezer": {
"who": "Jose ben Joezer",
"file": "Sages gathering in an ancient house",
"by": "AI-generated illustration (Ancient Near Eastern mosaic)",
"lic": "AI illustration",
"url": ""
},
"alice_meynell": {
"who": "Alice Meynell",
"file": "Rhythm of tides on an English coast",
"by": "AI-generated illustration (Impressionist oil painting)",
"lic": "AI illustration",
"url": ""
},
"sam_walter_foss": {
"who": "Sam Walter Foss",
"file": "House by the side of the road",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"george_herbert": {
"who": "George Herbert",
"file": "Country parsonage window, 1630s",
"by": "AI-generated illustration (Dutch Golden Age oil)",
"lic": "AI illustration",
"url": ""
},
"jean_de_la_fontaine": {
"who": "Jean de La Fontaine",
"file": "The lion and the mouse",
"by": "AI-generated illustration (Baroque oil painting)",
"lic": "AI illustration",
"url": ""
},
"samuel_morse": {
"who": "Samuel Morse",
"file": "Telegraph lines across the land",
"by": "AI-generated illustration (Hudson River School oil)",
"lic": "AI illustration",
"url": ""
},
"robert_baden_powell": {
"who": "Robert Baden-Powell",
"file": "Boy Scouts' first camp",
"by": "AI-generated illustration (Edwardian book illustration)",
"lic": "AI illustration",
"url": ""
},
"alfred_thayer_mahan": {
"who": "Alfred Thayer Mahan",
"file": "Steam and sail warship at sea",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"suntzu": {
"who": "Sun Tzu",
"file": "Enchoen27n3200.jpg",
"by": "663highland",
"lic": "CC BY 2.5",
"url": "https://commons.wikimedia.org/wiki/File:Enchoen27n3200.jpg"
},
"david_hilbert": {
"who": "David Hilbert",
"file": "Paris congress hall, 1900",
"by": "AI-generated illustration (Art Nouveau poster)",
"lic": "AI illustration",
"url": ""
},
"frances_willard": {
"who": "Frances Willard",
"file": "Woman learning to ride a bicycle",
"by": "AI-generated illustration (Art Nouveau poster)",
"lic": "AI illustration",
"url": ""
},
"robert_peary": {
"who": "Robert Peary",
"file": "Sledges over Arctic pressure ridges, 1909",
"by": "AI-generated illustration (Tinted photogravure look)",
"lic": "AI illustration",
"url": ""
},
"marie_bashkirtseff": {
"who": "Marie Bashkirtseff",
"file": "Young painter in a Nice villa",
"by": "AI-generated illustration (Impressionist oil painting)",
"lic": "AI illustration",
"url": ""
},
"robert_schumann": {
"who": "Robert Schumann",
"file": "Piano in a Romantic music room",
"by": "AI-generated illustration (Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"wilfred_grenfell": {
"who": "Wilfred Grenfell",
"file": "Hospital ship along the Labrador coast",
"by": "AI-generated illustration (Group of Seven painting)",
"lic": "AI illustration",
"url": ""
},
"richard_e_byrd": {
"who": "Richard E. Byrd",
"file": "Antarctic hut under aurora",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"joseph_priestley": {
"who": "Joseph Priestley",
"file": "Experimental chemistry study, 1770s",
"by": "AI-generated illustration (18th-century copperplate engraving)",
"lic": "AI illustration",
"url": ""
},
"nikola_tesla": {
"who": "Nikola Tesla",
"file": "Experimental laboratory with lightning bolts, 1899",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"orville_wright": {
"who": "Orville Wright",
"file": "Fragile biplane over a field, 1908",
"by": "AI-generated illustration (Art Nouveau poster illustration)",
"lic": "AI illustration",
"url": ""
},
"arthur_eddington": {
"who": "Arthur Eddington",
"file": "Stars and the atom",
"by": "AI-generated illustration (Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"james_a_garfield": {
"who": "James A. Garfield",
"file": "Ohio college and towpath",
"by": "AI-generated illustration (Currier & Ives lithograph)",
"lic": "AI illustration",
"url": ""
},
"william_crosbie_hunter": {
"who": "William Crosbie Hunter",
"file": "American city at dawn of commerce, 1907",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"william_walker_atkinson": {
"who": "William Walker Atkinson",
"file": "Lamplit study of focused thought, 1910s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"washington_allston": {
"who": "Washington Allston",
"file": "Moonlit Romantic landscape with painter",
"by": "AI-generated illustration (Romantic landscape oil)",
"lic": "AI illustration",
"url": ""
},
"josef_hofmann": {
"who": "Josef Hofmann",
"file": "Grand piano on a concert stage, 1900s",
"by": "AI-generated illustration (Belle Époque oil painting)",
"lic": "AI illustration",
"url": ""
},
"charlotte_perkins_gilman": {
"who": "Charlotte Perkins Gilman",
"file": "Women workers in a New England mill, 1890s",
"by": "AI-generated illustration (Victorian wood engraving)",
"lic": "AI illustration",
"url": ""
},
"julia_child": {
"who": "Julia Child",
"file": "Parisian market kitchen, 1950s",
"by": "AI-generated illustration (1950s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"bernard_baruch": {
"who": "Bernard Baruch",
"file": "Wall Street and park bench, early 1900s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"stephen_covey": {
"who": "Stephen Covey",
"file": "Compass and mountain path at dawn",
"by": "AI-generated illustration (1980s airbrush poster art)",
"lic": "AI illustration",
"url": ""
},
"judith_cladel": {
"who": "Judith Cladel",
"file": "Rodin's sculpture studio, Meudon",
"by": "AI-generated illustration (French Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"nella_braddy": {
"who": "Nella Braddy",
"file": "1920s office lobby, courteous bustle",
"by": "AI-generated illustration (1920s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"gifford_pinchot": {
"who": "Gifford Pinchot",
"file": "Forester in a vast conifer forest",
"by": "AI-generated illustration (1930s WPA mural)",
"lic": "AI illustration",
"url": ""
},
"marjory_macmurchy": {
"who": "Marjory MacMurchy",
"file": "Canadian working women, 1919",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"gordon_moore": {
"who": "Gordon Moore",
"file": "Silicon wafer cleanroom, 1960s",
"by": "AI-generated illustration (1960s modernist illustration)",
"lic": "AI illustration",
"url": ""
},
"norman_vincent_peale": {
"who": "Norman Vincent Peale",
"file": "Sunrise over Manhattan, 1950s",
"by": "AI-generated illustration (1950s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"abraham_maslow": {
"who": "Abraham Maslow",
"file": "Mountain climb to the summit",
"by": "AI-generated illustration (1960s modernist illustration)",
"lic": "AI illustration",
"url": ""
},
"tim_cook": {
"who": "Tim Cook",
"file": "Glass campus ring at dusk, 2010s",
"by": "AI-generated illustration (2010s digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"paul_graham": {
"who": "Paul Graham",
"file": "Startup founders at a Silicon Valley dinner",
"by": "AI-generated illustration (Cinematic digital matte painting)",
"lic": "AI illustration",
"url": ""
},
"arthur_brisbane": {
"who": "Arthur Brisbane",
"file": "Newspaper presses at dawn, 1906",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"elizabeth_von_arnim": {
"who": "Elizabeth von Arnim",
"file": "German country garden, 1890s",
"by": "AI-generated illustration (French Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"a_g_gardiner": {
"who": "A. G. Gardiner (\"Alpha of the Plough\")",
"file": "Chiltern beechwoods morning, 1910s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"christopher_morley": {
"who": "Christopher Morley",
"file": "Book shop and pipe, 1920s",
"by": "AI-generated illustration (1920s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"sharafuddin_maneri": {
"who": "Sharafuddin Maneri",
"file": "Sufi teacher in a Bihar garden",
"by": "AI-generated illustration (Indo-Persian miniature painting)",
"lic": "AI illustration",
"url": ""
},
"robert_burton": {
"who": "Robert Burton",
"file": "Oxford college library, 1621",
"by": "AI-generated illustration (Jacobean engraving)",
"lic": "AI illustration",
"url": ""
},
"edna_st_vincent_millay": {
"who": "Edna St. Vincent Millay",
"file": "Maine hilltop over the sea, 1910s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"george_sand": {
"who": "George Sand",
"file": "Nohant country house, 1870s",
"by": "AI-generated illustration (French Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"g_s_weaver": {
"who": "G. S. Weaver",
"file": "American meadow and home, 1850s",
"by": "AI-generated illustration (Hudson River School oil)",
"lic": "AI illustration",
"url": ""
},
"gene_stratton_porter": {
"who": "Gene Stratton-Porter",
"file": "Indiana swamp woodland, Limberlost",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"e_nesbit": {
"who": "E. Nesbit",
"file": "Steam train in a valley, Edwardian",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"a_a_milne": {
"who": "A. A. Milne",
"file": "Ashdown Forest hilltop, 1920s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"laura_ingalls_wilder": {
"who": "Laura Ingalls Wilder",
"file": "Missouri Ozark wildflowers, 1917",
"by": "AI-generated illustration (1930s WPA mural)",
"lic": "AI illustration",
"url": ""
},
"jerome_k_jerome": {
"who": "Jerome K. Jerome",
"file": "Jerome K. Jerome 02.jpg",
"by": "George Grantham Bain Collection (Library of Congress)",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:Jerome_K._Jerome_02.jpg"
},
"john_greenleaf_whittier": {
"who": "John Greenleaf Whittier",
"file": "John Greenleaf Whittier portrait.jpg",
"by": "File:John Greenleaf Whittier LCCN2002722860.jpg: Miscellaneous Items in High Dem",
"lic": "Public domain",
"url": "https://commons.wikimedia.org/wiki/File:John_Greenleaf_Whittier_portrait.jpg"
},
"s_weir_mitchell": {
"who": "S. Weir Mitchell",
"file": "Philadelphia physician's study, 1880s",
"by": "AI-generated illustration (Victorian engraving)",
"lic": "AI illustration",
"url": ""
},
"kenyon_cox": {
"who": "Kenyon Cox",
"file": "Grand mural hall, American Renaissance",
"by": "AI-generated illustration (Art Nouveau poster)",
"lic": "AI illustration",
"url": ""
},
"knute_rockne": {
"who": "Knute Rockne",
"file": "College football stadium at dusk, 1920s",
"by": "AI-generated illustration (1920s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"jean_henri_fabre": {
"who": "Jean-Henri Fabre",
"file": "Provençal garden of insects",
"by": "AI-generated illustration (French Impressionist oil)",
"lic": "AI illustration",
"url": ""
},
"martha_graham": {
"who": "Martha Graham",
"file": "Modern dance stage, 1940s",
"by": "AI-generated illustration (1960s modernist illustration)",
"lic": "AI illustration",
"url": ""
},
"freya_stark": {
"who": "Freya Stark",
"file": "Arabian desert and ancient city",
"by": "AI-generated illustration (1950s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"enrico_caruso": {
"who": "Enrico Caruso",
"file": "Grand opera house stage",
"by": "AI-generated illustration (Art Nouveau poster)",
"lic": "AI illustration",
"url": ""
},
"teresa_carreno": {
"who": "Teresa Carreño",
"file": "Piano under Caracas mountains",
"by": "AI-generated illustration (Belle Époque oil painting)",
"lic": "AI illustration",
"url": ""
},
"louise_homer": {
"who": "Louise Homer",
"file": "Metropolitan Opera stage, 1910s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"norman_rockwell": {
"who": "Norman Rockwell",
"file": "Painter's studio in a New England town",
"by": "AI-generated illustration (1950s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"arturo_toscanini": {
"who": "Arturo Toscanini",
"file": "Radio orchestra in a great hall, 1940s",
"by": "AI-generated illustration (1930s Art Deco poster)",
"lic": "AI illustration",
"url": ""
},
"walter_camp": {
"who": "Walter Camp",
"file": "Yale athletic field, 1910s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"john_wesley_powell": {
"who": "John Wesley Powell",
"file": "Grand Canyon river expedition, 1869",
"by": "AI-generated illustration (Hudson River School oil)",
"lic": "AI illustration",
"url": ""
},
"ferruccio_busoni": {
"who": "Ferruccio Busoni",
"file": "Berlin music salon, 1910s",
"by": "AI-generated illustration (German Romantic oil painting)",
"lic": "AI illustration",
"url": ""
},
"christiaan_barnard": {
"who": "Christiaan Barnard",
"file": "Cape Town hospital and Table Mountain, 1967",
"by": "AI-generated illustration (1960s modernist illustration)",
"lic": "AI illustration",
"url": ""
},
"marcella_sembrich": {
"who": "Marcella Sembrich",
"file": "Metropolitan Opera soprano, 1900s",
"by": "AI-generated illustration (Belle Époque oil painting)",
"lic": "AI illustration",
"url": ""
},
"branch_rickey": {
"who": "Branch Rickey",
"file": "Baseball field at dusk, 1940s",
"by": "AI-generated illustration (1950s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"georgia_o_keeffe": {
"who": "Georgia O'Keeffe",
"file": "New Mexico red hills, Abiquiu",
"by": "AI-generated illustration (American Modernist painting)",
"lic": "AI illustration",
"url": ""
},
"anna_case": {
"who": "Anna Case",
"file": "Phonograph recording studio, 1910s",
"by": "AI-generated illustration (Edwardian poster illustration)",
"lic": "AI illustration",
"url": ""
},
"satchel_paige": {
"who": "Satchel Paige",
"file": "Negro League pitcher at sunset",
"by": "AI-generated illustration (1950s magazine illustration)",
"lic": "AI illustration",
"url": ""
},
"caesar": {
"who": "Julius Caesar",
"file": "Battle of Zela, 47 BC",
"by": "AI-generated illustration (Roman floor mosaic)",
"lic": "AI illustration",
"url": ""
}
};
