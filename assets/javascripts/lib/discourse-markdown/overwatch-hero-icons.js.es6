import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
	opts.features['overwatch-hero-icons'] = true;
});

function formatOverwatchHeroNames (text) {
	return text
		.replace(/\b(ana)\b/ig, "Ana&nbsp;<span class=\"ohi-ana\"></span>")
		.replace(/\b(basti(o|a|e)n)\b/ig, "Bastion&nbsp;<span class=\"ohi-bastion\"></span>")
		.replace(/\b(dva|d.va)\b/ig, "D.Va&nbps;<span class=\"ohi-dva\"></span>")
		.replace(/\b(genji)\b/ig, "Genji&nbsp;<span class=\"ohi-genji\"></span>")
		.replace(/\b(h(a|o)nzo)\b/ig, "Hanzo&nbsp;<span class=\"ohi-hanzo\"></span>")
		.replace(/\b(junk ?rat)\b/ig, "Junkrat&nbsp;<span class=\"ohi-junkrat\"></span>")
		.replace(/\b(l(u|ú)cio)\b/ig, "Lúcio&nbsp;<span class=\"ohi-lucio\"></span>")
		.replace(/\b(mcc?ree)\b/ig, "McCree&nbsp;<span class=\"ohi-mccree\"></span>")
		.replace(/\b(mei)\b/ig, "Mei&nbsp;<span class=\"ohi-mei\"></span>")
		.replace(/\b(Mercy)\b/g, "Mercy&nbsp;<span class=\"ohi-mercy\"></span>")
		.replace(/\b(pharr?ah)\b/ig, "Pharah&nbsp;<span class=\"ohi-pharah\"></span>")
		.replace(/\b(reaper)\b/ig, "Reaper&nbsp;<span class=\"ohi-reaper\"></span>")
		.replace(/\b(r(ei|ie)nhe?ar(dt?|td?))\b/ig, "Reinhardt&nbsp;<span class=\"ohi-reinhardt\"></span>")
		.replace(/\b(road ?hog)\b/ig, "Roadhog&nbsp;<span class=\"ohi-roadhog\"></span>")
		.replace(/\b(soldier:? ?76)\b/ig, "Soldier:&nbsp;76&nbsp;<span class=\"ohi-soldier76\"></span>")
		.replace(/\b(s(o|a)mbra)\b/ig, "Sombra&nbsp;<span class=\"ohi-sombra\"></span>")
		.replace(/\b(symm?etra)\b/ig, "Symmetra&nbsp;<span class=\"ohi-symmetra\"></span>")
		.replace(/\b(torb(j|y)(o|ö)rn)\b/ig, "Torbjörn&nbsp;<span class=\"ohi-torbjorn\"></span>")
		.replace(/\b(tracer)\b/ig, "Tracer&nbsp;<span class=\"ohi-tracer\"></span>")
		.replace(/\b(widd?ow ?maker)\b/ig, "Widowmaker&nbsp;<span class=\"ohi-widowmaker\"></span>")
		.replace(/\b(winston)\b/ig, "Winston&nbsp;<span class=\"ohi-winston\"></span>")
		.replace(/\b(zar(y|i)a)\b/ig, "Zarya&nbsp;<span class=\"ohi-zarya\"></span>")
		.replace(/\b(zenya(tt?|dd?)a)\b/ig, "Zenyatta&nbsp;<span class=\"ohi-zenyatta\"></span>");
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
}
