const questions = [
    {
        question: "How long did the flood cover the earth?",
        options: ["150 days", "40 days", "1 year", "200 days"],
        answer: 0
    },
    {
        question: "What are the names of Joseph’s two sons?",
        options: ["Manasseh and Ephraim", "David and Solomon", "Cain and Abel", "Jacob and Esau"],
        answer: 0
    },
    {
        question: "What was the name of Aaron’s wife?",
        options: ["Elisheba", "Miriam", "Deborah", "Sarah"],
        answer: 0
    },
    {
        question: "In which cave did David seek refuge from Saul?",
        options: ["Cave of Adullam", "Cave of Hinnom", "Mount Ebal", "Cave of Machpelah"],
        answer: 0
    },
    {
        question: "Who restored Paul’s sight?",
        options: ["Ananias", "Peter", "John", "Philip"],
        answer: 0
    },
    {
        question: "Upon what mountain was Israel cursed for disobedience?",
        options: ["Mount Ebal", "Mount Sinai", "Mount Carmel", "Mount Zion"],
        answer: 0
    },
    {
        question: "How were the children of Israel guided during their wandering?",
        options: ["Pillar of cloud and fire", "Angel", "Moses’ staff", "Voice from Heaven"],
        answer: 0
    },
    {
        question: "How long did the children of Israel journey in the wilderness of Shur before finding water?",
        options: ["3 days", "7 days", "40 days", "2 days"],
        answer: 0
    },
    {
        question: "By whom were the children of Israel carried captive into Assyria?",
        options: ["Tiglath-Pileser", "Nebuchadnezzar", "Pharaoh", "Sennacherib"],
        answer: 0
    },
    {
        question: "What did Achan take from the spoils of war that brought the curse upon Israel?",
        options: ["A beautiful mantle, silver, and gold", "Chariot and horses", "Golden calf", "Sacred scrolls"],
        answer: 0
    },
    {
        question: "What two kings disguised themselves before going into battle and were slain by archers?",
        options: ["Ahab and Jehoshaphat", "David and Solomon", "Saul and Jonathan", "Rehoboam and Jeroboam"],
        answer: 0
    },
    {
        question: "What king was killed by his own sons?",
        options: ["Sennacherib", "Solomon", "Manasseh", "Zedekiah"],
        answer: 0
    },
    {
        question: "What king’s name meant peaceable?",
        options: ["Solomon", "David", "Saul", "Hezekiah"],
        answer: 0
    },
    {
        question: "What king did God smite with leprosy?",
        options: ["Uzziah", "Ahab", "Manasseh", "Nebuchadnezzar"],
        answer: 0
    },
    {
        question: "What king of Judah had his eyes put out?",
        options: ["Zedekiah", "Jehoiakim", "Amaziah", "Rehoboam"],
        answer: 0
    },
    {
        question: "What prophet’s hands were upheld by two persons, causing Israel to win?",
        options: ["Moses", "Joshua", "Aaron", "Gideon"],
        answer: 0
    },
    {
        question: "Which prophet was sent as a missionary to the Ninevites?",
        options: ["Jonah", "Elijah", "Jeremiah", "Isaiah"],
        answer: 0
    },
    {
        question: "What prophet was suspended between earth and heaven by a lock of his hair?",
        options: ["Ezekiel", "Isaiah", "Elijah", "Daniel"],
        answer: 0
    },
    {
        question: "The destruction of Nineveh fulfilled whose prophecy?",
        options: ["Nahum", "Jonah", "Hosea", "Isaiah"],
        answer: 0
    },
    {
        question: "How many prophets did Obadiah save and where?",
        options: ["100 prophets, in two caves, food and water", "50 prophets, in a well, loaves and fish", "10 prophets, in a house, feed them nothing", "300 prophets, in the temple, gave them water"],
        answer: 0
    },
    {
        question: "Of whom did Jesus say, 'I will make you fishers of men?'",
        options: ["Peter and Andrew", "James and John", "Philip and Nathaniel", "Paul and Silas"],
        answer: 0
    },
    {
        question: "Who took Judas’s place among the twelve?",
        options: ["Matthias", "Paul", "Barnabas", "Stephen"],
        answer: 0
    },
    {
        question: "Which apostle first suffered martyrdom?",
        options: ["James", "Peter", "John", "Stephen"],
        answer: 0
    },
    {
        question: "What two promises did Jesus make to his disciples before leaving them?",
        options: ["The Holy Spirit and His return", "Healing and wealth", "Victory and success", "Wisdom and power"],
        answer: 0
    },
    {
        question: "Name the twelve disciples of Jesus.",
        options: ["Peter, Andrew, James, John, Philip, Bartholomew, Thomas, Matthew, James, Thaddaeus, Simon, Judas", "Peter, Paul, John, Andrew, Philip, Nathaniel, Thomas, Matthew, James, Timothy, Silas, Judas"],
        answer: 0
    },
    {
        question: "What weapon did Shamgar use to kill 600 Philistines?",
        options: ["An ox goad", "A sword", "A spear", "A jawbone"],
        answer: 0
    },
    {
        question: "Who ate a meal prepared by an angel and was sustained for 40 days?",
        options: ["Elijah", "Moses", "Daniel", "Jesus"],
        answer: 0
    },
    {
        question: "What is the whole duty of man according to Ecclesiastes?",
        options: ["Fear God and keep His commandments", "Worship God daily", "Love your neighbor", "Offer sacrifices"],
        answer: 0
    },
    {
        question: "Which three men stood alone in godliness among a crooked generation?",
        options: ["Noah, Daniel, Job", "Moses, Elijah, Jeremiah", "David, Solomon, Samuel", "Abraham, Isaac, Jacob"],
        answer: 0
    },
    {
        question: "Describe the woman who prayed day and night in the temple.",
        options: ["Anna, a prophetess, very old, from the tribe of Asher", "Martha, sister of Mary, a widow", "Mary, mother of Jesus", "Deborah, a judge in Israel"],
        answer: 0
    },
    {
        question: "Who lost their lives for using 'strange' fire?",
        options: ["Nadab and Abihu", "Korah, Dathan, and Abiram", "Ananias and Sapphira", "Balaam"],
        answer: 0
    },
    {
        question: "Which three men were swallowed alive in a pit?",
        options: ["Dathan, Abiram, and Korah", "Nadab, Abihu, and Eleazar", "Korah, Aaron, and Caleb", "Moses, Aaron, and Hur"],
        answer: 0
    },
    {
        question: "What tribe had no inheritance in the land of promise?",
        options: ["The tribe of Levi", "The tribe of Benjamin", "The tribe of Dan", "The tribe of Judah"],
        answer: 0
    },
    {
        question: "Which woman murdered her grandchildren and usurped the kingdom?",
        options: ["Athaliah", "Jezebel", "Delilah", "Michal"],
        answer: 0
    },
    {
        question: "Who was punished with death for touching the ark of God?",
        options: ["Uzzah", "Nadab", "Abihu", "Eleazar"],
        answer: 0
    },
    {
        question: "What city did Joshua take and burn, killing 12,000 men and women?",
        options: ["Ai", "Jericho", "Bethel", "Gibeon"],
        answer: 0
    },
    {
        question: "How many Philistines did Samson slay with a jawbone?",
        options: ["1,000", "100", "500", "600"],
        answer: 0
    },
    {
        question: "What warrior fought so long that his hand stuck to his sword?",
        options: ["Eleazar", "David", "Joshua", "Gideon"],
        answer: 0
    },
    {
        question: "How many men were in Asa's army and from which tribes?",
        options: ["580,000 men: 300,000 from Judah, 280,000 from Benjamin", "600,000 men: 400,000 from Israel, 200,000 from Judah", "450,000 men: 250,000 from Dan, 200,000 from Ephraim"],
        answer: 0
    },
    {
        question: "Which three cities came up against Jehoshaphat but fought among themselves?",
        options: ["Ammonites, Moabites, Mount Seir", "Philistines, Midianites, Amorites", "Hittites, Jebusites, Perizzites"],
        answer: 0
    },
    {
        question: "What miracle did Jesus perform in the synagogue in Capernaum?",
        options: ["Casting out an unclean spirit", "Healing a blind man", "Multiplying bread and fish", "Raising the dead"],
        answer: 0
    },
    {
        question: "What was the ailment of the man healed by Jesus who was carried by four men?",
        options: ["Paralysis", "Blindness", "Leprosy", "Deafness"],
        answer: 0
    },
    {
        question: "Who was the father of the daughter healed by Jesus, with Peter, James, and John present?",
        options: ["Jairus", "Zebedee", "Joseph", "Simon"],
        answer: 0
    },
    {
        question: "What was the Hebrew word used by Jesus to heal the deaf and mute man?",
        options: ["Ephphatha", "Talitha", "Shalom", "Abba"],
        answer: 0
    },
    {
        question: "How many waterpots were at the wedding feast, and how much did they hold?",
        options: ["6 pots, holding 20-30 gallons each", "3 pots, holding 10-15 gallons each", "7 pots, holding 40-50 gallons each", "5 pots, holding 15-20 gallons each"],
        answer: 0
    },
    {
        question: "What guarded the Garden of Eden to prevent access to the tree of life?",
        options: ["Cherubim and a flaming sword", "A wall of fire", "Angels with swords", "The voice of God"],
        answer: 0
    },
    {
        question: "What city did Lot escape to during the destruction of Sodom?",
        options: ["Zoar", "Bethel", "Hebron", "Jericho"],
        answer: 0
    },
    {
        question: "What is the longest name in the Bible?",
        options: ["Maher-shalal-hash-baz", "Mephibosheth", "Nebuchadnezzar", "Zerubbabel"],
        answer: 0
    },
    {
        question: "What is the longest chapter in the Bible and how many verses does it have?",
        options: ["Psalm 119, 176 verses", "Psalm 23, 50 verses", "Isaiah 66, 52 verses", "Genesis 1, 40 verses"],
        answer: 0
    },
    {
        question: "Who was the father-in-law of Moses?",
        options: ["Jethro", "Aaron", "Hobab", "Caleb"],
        answer: 0
    }
];


        let currentQuestion = 0;
        let score = 0;
        let shuffledOptions = [];

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function loadQuestion() {
            const q = questions[currentQuestion];
            document.querySelector('.question').textContent = q.question;

            // Clear previous options
            const optionsContainer = document.querySelector('.options');
            optionsContainer.innerHTML = '';

            // Shuffle options before displaying them
            shuffledOptions = [...q.options];
            shuffleArray(shuffledOptions);

            // Render options
            shuffledOptions.forEach((option, index) => {
                const label = document.createElement('label');
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'option';
                radio.value = index;
                label.appendChild(radio);
                label.appendChild(document.createTextNode(option));
                optionsContainer.appendChild(label);
            });

            document.querySelector('.result').textContent = '';
        }

        function submitAnswer() {
            const selectedOption = document.querySelector('input[name="option"]:checked');
            if (!selectedOption) {
                alert("Please select an answer!");
                return;
            }

            const selectedAnswer = shuffledOptions[parseInt(selectedOption.value)];
            const correctAnswer = questions[currentQuestion].options[questions[currentQuestion].answer];

            if (selectedAnswer === correctAnswer) {
                score++;
                document.querySelector('.result').textContent = "Correct!";
            } else {
                document.querySelector('.result').textContent = `Incorrect! Correct answer: ${correctAnswer}`;
            }

            currentQuestion++;
            if (currentQuestion < questions.length) {
                setTimeout(loadQuestion, 1000);
            } else {
                document.querySelector('.result').textContent = `Quiz completed! Your score: ${score}/${questions.length}`;
                document.querySelector('.btn').style.display = 'none';
            }
        }

        window.onload = loadQuestion;