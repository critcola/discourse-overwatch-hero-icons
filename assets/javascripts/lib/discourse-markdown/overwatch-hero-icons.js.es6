import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
	opts.features['overwatch-hero-icons'] = true;
});

function formatOverwatchHeroNames (text) {
	return text
		.replace(/\b(ana)\b/ig, "Ana<span class=\"ohi-ana\"></span>")
		.replace(/\b(basti(o|a|e)n)\b/ig, "Bastion<span class=\"ohi-bastion\"></span>")
		.replace(/\b(dva|d.va)\b/ig, "D.Va<span class=\"ohi-dva\"></span>")
		.replace(/\b(genji)\b/ig, "Genji<span class=\"ohi-genji\"></span>")
		.replace(/\b(h(a|o)nzo)\b/ig, "Hanzo<span class=\"ohi-hanzo\"></span>")
		.replace(/\b(junk ?rat)\b/ig, "Junkrat<span class=\"ohi-junkrat\"></span>")
		.replace(/\b(l(u|ú)cio)\b/ig, "Lúcio<span class=\"ohi-lucio\"></span>")
		.replace(/\b(mcc?ree)\b/ig, "McCree<span class=\"ohi-mccree\"></span>")
		.replace(/\b(mei)\b/ig, "Mei<span class=\"ohi-mei\"></span>")
		.replace(/\b(Mercy)\b/g, "Mercy<span class=\"ohi-mercy\"></span>")
		.replace(/\b(pharr?ah)\b/ig, "Pharah<span class=\"ohi-pharah\"></span>")
		.replace(/\b(reaper)\b/ig, "Reaper<span class=\"ohi-reaper\"></span>")
		.replace(/\b(r(ei|ie)nhe?ar(dt?|td?))\b/ig, "Reinhardt<span class=\"ohi-reinhardt\"></span>")
		.replace(/\b(road ?hog)\b/ig, "Roadhog<span class=\"ohi-roadhog\"></span>")
		.replace(/\b(soldier:? ?76)\b/ig, "Soldier:76<span class=\"ohi-soldier76\"></span>")
		.replace(/\b(s(o|a)mbra)\b/ig, "Sombra<span class=\"ohi-sombra\"></span>")
		.replace(/\b(symm?etra)\b/ig, "Symmetra<span class=\"ohi-symmetra\"></span>")
		.replace(/\b(torb(j|y)(o|ö)rn)\b/ig, "Torbjörn<span class=\"ohi-torbjorn\"></span>")
		.replace(/\b(tracer)\b/ig, "Tracer<span class=\"ohi-tracer\"></span>")
		.replace(/\b(widd?ow ?maker)\b/ig, "Widowmaker<span class=\"ohi-widowmaker\"></span>")
		.replace(/\b(winston)\b/ig, "Winston<span class=\"ohi-winston\"></span>")
		.replace(/\b(zar(y|i)a)\b/ig, "Zarya<span class=\"ohi-zarya\"></span>")
		.replace(/\b(zenya(tt?|dd?)a)\b/ig, "Zenyatta<span class=\"ohi-zenyatta\"></span>");
}

export function setup(helper) {
	helper.postProcessText(function (text) {
		text = [].concat(text);
		for (var i = 0; i < text.length; i++) {
			if (text[i].length > 0 && text[i][0] !== "<") {
				text[i] = formatOverwatchHeroNames(text[i]);
			}
		}
		return text;
	});

	helper.whiteList([
		'span.ohi-ana',
		'span.ohi-bastion',
		'span.ohi-dva',
		'span.ohi-genji',
		'span.ohi-hanzo',
		'span.ohi-junkrat',
		'span.ohi-lucio',
		'span.ohi-mccree',
		'span.ohi-mei',
		'span.ohi-mercy',
		'span.ohi-pharah',
		'span.ohi-reaper',
		'span.ohi-reinhardt',
		'span.ohi-roadhog',
		'span.ohi-soldier76',
		'span.ohi-sombra',
		'span.ohi-symmetra',
		'span.ohi-torbjorn',
		'span.ohi-tracer',
		'span.ohi-widowmaker',
		'span.ohi-winston',
		'span.ohi-zarya',
		'span.ohi-zenyatta'
	]);
}
