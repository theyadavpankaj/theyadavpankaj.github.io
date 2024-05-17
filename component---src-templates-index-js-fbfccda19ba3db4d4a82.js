(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        TRom: function(e, t, a) {
            "use strict";
            a.r(t);
            a("LJRI");
            var n = a("q1tI"),
                r = a.n(n),
                o = a("17x9"),
                p = a.n(o),
                s = a("vrFN"),
                c = a("Bl7J"),
                l = a("rgsX"),
                u = a("6cYQ"),
                i = function(e) {
                    var t = e.data,
                        a = e.pageContext,
                        n = a.nextPagePath,
                        o = a.previousPagePath,
                        p = t.allMarkdownRemark.edges;
                    return r.a.createElement(r.a.Fragment, null, r.a.createElement(s.a, null), r.a.createElement(c.a, null, p.map((function(e) {
                        var t = e.node,
                            a = t.id,
                            n = t.excerpt,
                            o = t.frontmatter,
                            p = o.title,
                            s = o.date,
                            c = o.path,
                            u = o.author,
                            i = o.coverImage,
                            g = o.excerpt,
                            d = o.tags,
                            h = o.contentType;
                        return r.a.createElement(l.a, {
                            key: a,
                            title: p,
                            date: s,
                            path: c,
                            author: u,
                            coverImage: i,
                            tags: d,
                            contentType: h,
                            excerpt: g || n
                        })
                    })), r.a.createElement(u.a, {
                        previousPath: o,
                        previousLabel: "Newer posts",
                        nextPath: n,
                        nextLabel: "Older posts"
                    })))
                };
            i.propTypes = {
                data: p.a.object.isRequired,
                pageContext: p.a.shape({
                    nextPagePath: p.a.string,
                    previousPagePath: p.a.string
                })
            };
            t.default = i
        }
    }
]);
//# sourceMappingURL=component---src-templates-index-js-fbfccda19ba3db4d4a82.js.map