import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
	opts.features['overwatch-hero-icons'] = true;
});

function formatOverwatchHeroNames (text) {
	return text
		.replace(/\b(anas?)\b/ig, "<span class=\"ohi-ana\"></span>Ana")
		.replace(/\b(bash?t[ioae]+ns?)\b/ig, "<span class=\"ohi-bastion\"></span>Bastion")
		.replace(/\b(d[-.\s]?vas?)\b/ig, "<span class=\"ohi-dva\"></span>D.Va")
		.replace(/\b(gen[jg][iy]s?)\b/ig, "<span class=\"ohi-genji\"></span>Genji")
		.replace(/\b(h[ao]nzos?)\b/ig, "<span class=\"ohi-hanzo\"></span>Hanzo")
		.replace(/\b(junk\s?rats?)\b/ig, "<span class=\"ohi-junkrat\"></span>Junkrat")
		.replace(/\b(l[uú][cs]h?[ie]os?)\b/ig, "<span class=\"ohi-lucio\"></span>Lúcio")
		.replace(/\b(mc+ri?e+s?)\b/ig, "<span class=\"ohi-mccree\"></span>McCree")
		.replace(/\b(me[iy]s?)\b/ig, "<span class=\"ohi-mei\"></span>Mei")
		.replace(/\b(Mer[cs](y|ey|ie)s?)\b/g, "<span class=\"ohi-mercy\"></span>Mercy")
		.replace(/\b(phar+ah?s?)\b/ig, "<span class=\"ohi-pharah\"></span>Pharah")
		.replace(/\b(re[ae]pers?)\b/ig, "<span class=\"ohi-reaper\"></span>Reaper")
		.replace(/\b(r(ei|ie)n(he?ar[dt]+)?s?)\b/ig, "<span class=\"ohi-reinhardt\"></span>Reinhardt")
		.replace(/\b(road\s?hog+s?)\b/ig, "<span class=\"ohi-roadhog\"></span>Roadhog")
		.replace(/\b(soldi?er:?\s?76(es|s)?)\b/ig, "<span class=\"ohi-soldier76\"></span>Soldier:&nbsp;76")
		.replace(/\b(s[oa]mbras?)\b/ig, "<span class=\"ohi-sombra\"></span>Sombra")
		.replace(/\b(s[yi]m+et+ras?)\b/ig, "<span class=\"ohi-symmetra\"></span>Symmetra")
		.replace(/\b(torb([jy][oö]rn)?s?)\b/ig, "<span class=\"ohi-torbjorn\"></span>Torbjörn")
		.replace(/\b(tra[cs]ers?)\b/ig, "<span class=\"ohi-tracer\"></span>Tracer")
		.replace(/\b(wid+ow\s?makers?)\b/ig, "<span class=\"ohi-widowmaker\"></span>Widowmaker")
		.replace(/\b(winst[oi]ns?)\b/ig, "<span class=\"ohi-winston\"></span>Winston")
		.replace(/\b(zar[yi]as?)\b/ig, "<span class=\"ohi-zarya\"></span>Zarya")
		.replace(/\b(zen+y[ao][td]+as?)\b/ig, "<span class=\"ohi-zenyatta\"></span>Zenyatta");
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
