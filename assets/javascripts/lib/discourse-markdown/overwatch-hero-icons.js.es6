import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
	opts.features['overwatch-hero-icons'] = true;
});

function formatOverwatchHeroNames (text) {
	return text
		.replace(/\b(ana)\b/ig, "<span class=\"ohi-ana\"></span>Ana")
		.replace(/\b(bash?ti(o|a|e)n)\b/ig, "<span class=\"ohi-bastion\"></span>Bastion")
		.replace(/\b(d.?va)\b/ig, "<span class=\"ohi-dva\"></span>D.Va")
		.replace(/\b(gen(j|g)i)\b/ig, "<span class=\"ohi-genji\"></span>Genji")
		.replace(/\b(h(a|o)nzo)\b/ig, "<span class=\"ohi-hanzo\"></span>Hanzo")
		.replace(/\b(junk ?rat)\b/ig, "<span class=\"ohi-junkrat\"></span>Junkrat")
		.replace(/\b(l(u|ú)(c|s)h?(i|e)o)\b/ig, "<span class=\"ohi-lucio\"></span>Lúcio")
		.replace(/\b(mcc?ree)\b/ig, "<span class=\"ohi-mccree\"></span>McCree")
		.replace(/\b(mei)\b/ig, "<span class=\"ohi-mei\"></span>Mei")
		.replace(/\b(Mer(c|s)e?y)\b/g, "<span class=\"ohi-mercy\"></span>Mercy")
		.replace(/\b(pharr?ah)\b/ig, "<span class=\"ohi-pharah\"></span>Pharah")
		.replace(/\b(reaper)\b/ig, "<span class=\"ohi-reaper\"></span>Reaper")
		.replace(/\b(r(ei|ie)nhe?ar(dt?|td?))\b/ig, "<span class=\"ohi-reinhardt\"></span>Reinhardt")
		.replace(/\b(road ?hog)\b/ig, "<span class=\"ohi-roadhog\"></span>Roadhog")
		.replace(/\b(soldier:? ?76)\b/ig, "<span class=\"ohi-soldier76\"></span>Soldier:&nbsp;76")
		.replace(/\b(s(o|a)mbra)\b/ig, "<span class=\"ohi-sombra\"></span>Sombra")
		.replace(/\b(symm?etra)\b/ig, "<span class=\"ohi-symmetra\"></span>Symmetra")
		.replace(/\b(torb(j|y)(o|ö)rn)\b/ig, "<span class=\"ohi-torbjorn\"></span>Torbjörn")
		.replace(/\b(tracer)\b/ig, "<span class=\"ohi-tracer\"></span>Tracer")
		.replace(/\b(widd?ow ?maker)\b/ig, "<span class=\"ohi-widowmaker\"></span>Widowmaker")
		.replace(/\b(winst(o|i)n)\b/ig, "<span class=\"ohi-winston\"></span>Winston")
		.replace(/\b(zar(y|i)a)\b/ig, "<span class=\"ohi-zarya\"></span>Zarya")
		.replace(/\b(zenya(tt?|dd?)a)\b/ig, "<span class=\"ohi-zenyatta\"></span>Zenyatta");
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
