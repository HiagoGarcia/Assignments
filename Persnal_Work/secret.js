define(["backbone"], function (a) {
    var b = "0", c = "1", d = {};
    d[0] = c, d[1] = b;
    var e = {
        getNoticeData: function (a, b) {
            var c = [], d = [], e = [];
            return _.each(a, function (a, f) {
                var g = {
                    type: "news", position_num: f, id: a.id, date: a.date, title: a.title, prev_id: b
                };
                if (334 != a.id) switch (+a.importance) {
                    case 0: d.push(g); break; case 1: c.push(g); break; case 2: break; case 3: e.push(g)
                }
            }), { newsEventCampaign: c, newsUpdate: d, newsImportant: e }
        }, locationNotice: function (b) {
            var c = $(b.currentTarget), e = c.data("id"), f = c.data("prev-id"), g = d[$(".prt-2tabs-notice .btn-tabs-notice.active").data("position")], h = +$(".btn-prev").attr("page") + 1; if (h) var i = "news/detail/" + e + "/" + f + "/" + g + "/" + h; else if (g) var i = "news/detail/" + e + "/" + f + "/" + g + "/1"; else var i = "news/detail/" + e + "/" + f; this.content_close(), a.history.navigate(i, !0)
        }
    }; return e
});
