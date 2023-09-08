// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let verse = document.querySelector(".verse");

const quotes = [
    {
        quote: "And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
        verse: "Philippians 4: 19"
    },
    {
        quote: "for which I am an ambassador in chains; that in proclaiming it I may speak boldly, as I ought to speak.",
        verse: "Ephesians 6: 20"
    },
    {
        quote: "Greater love has no one than this, that someone lay down his life for his friends.",
        verse: "John 15: 13"
    },
    {
        quote: "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.",
        verse: "Matthew 6: 34"
    },
    {
        quote: "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.",
        verse: "Isaiah 40: 31"
    },
    {
        quote: "Jesus Christ is thesame yesterfay, today and forever",
        verse: "Hebrews 13: 8"
    },
    {
        quote: "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us, looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.",
        verse: "Hebrews 12: 1-2"
    },
    {
        quote: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.",
        verse: "Hebrews 8: 38-39"
    },
    {
        quote: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
        verse: "Lamentations 3: 22-23"
    },
    {
        quote: "The Lord says to my Lord: “Sit at My right hand Until I make Your enemies a footstool for Your feet.”",
        verse: "Psalms 110: 1"
    },
    {
        quote: "Listen, my people, to my instruction, incline your ears to the words of my mouth.",
        verse: "Psalm 78: 1"
    },
    {
        quote: "You are my hiding place and my shield;I hope in your word. Depart from me, you evildoers, that I may keep the commandments of my God.",
        verse: "Psalms 119: 114-115"
    }
];

btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    verse.innerText = quotes[random].verse;
})