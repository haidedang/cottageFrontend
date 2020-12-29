class Instagram {
    static getFeed(userName) {
      const mapMedia = (json) => {
        const thumbnailIndex = (node) => {
          node.thumbnail_resources.forEach((item, index) => {
            if (item.config_width === 640) {
              return index;
            }
          });
  
          return 4; // MAGIC
        };
  
        const url = (node) => {
          return "https://www.instagram.com/p/" + node.shortcode;
        };
  
        const src = (node) => {
          switch (node.__typename) {
            case "GraphVideo":
              return node.thumbnail_src;
            case "GraphSidecar":
            default:
              return node.thumbnail_resources[thumbnailIndex(node)].src;
          }
        };
  
        const alt = (node) => {
          if (
            node.edge_media_to_caption.edges[0] &&
            node.edge_media_to_caption.edges[0].node
          ) {
            return node.edge_media_to_caption.edges[0].node.text;
          } else if (node.accessibility_caption) {
            return node.accessibility_caption;
          } else {
            return "";
          }
        };
  
        const edges =
          json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media
            .edges;
  
        return edges.map((edge) => {
          return {
            alt: alt(edge.node),
            url: url(edge.node),
            src: src(edge.node),
          };
        });
      };
  
      const getJSON = (body) => {
        try {
          const data = body
            .split("window._sharedData = ")[1]
            .split("</script>")[0];
          return JSON.parse(data.substr(0, data.length - 1));
        } catch (err) {
          throw Error("Cannot parse response body");
        }
      };
  
      const url = "https://www.instagram.com/" + userName + "/";
  
      return fetch(url)
        .then((resp) => resp.text())
        .then((body) => getJSON(body))
        .then((json) => mapMedia(json))
        .catch((e)=>{
          console.log('FAIL')
          return [
            {
              url:'https://www.instagram.com/p/CJRTPdVAgLq/',
              src:"https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/132801542_384316789337553_9124116159899479528_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=bv8xB23BCx8AX_phCCe&tp=1&oh=b4730e56f5e024c443a076ae4907d5a0&oe=60139C7C",
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CI6Cdg4gZh0/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/131890489_307121423933837_1272206414944495714_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=uJFM4MiewoIAX_F61Bv&tp=1&oh=02255b137fe894c1ee28d7dabb9b1e1e&oe=60133879',
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CIdsO0eASg6/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/127396101_380311359967770_2549851783736050349_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=VZ83OClfVMYAX8B9l5H&tp=1&oh=ec29a338ea7433063cd57daa8eadc99d&oe=60133BC7',
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CHdVfl_gWmq/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/124403891_1057476038013573_605159378079199922_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=DSRgFQtHqQ8AX9b2lK6&tp=1&oh=c590450c5d2fdd3f8f6f7433862ec71d&oe=60133447',
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CHTCkbJgqUS/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/123711273_272983027484617_9002547781882629558_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Id5Mv_x49FwAX_hBMke&tp=1&oh=82ba7b87341df816489db108568bfb3a&oe=601192C8',
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CGpuWGBARFm/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/122399633_1045443422570081_8741175582775460500_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=9aouT7nJUqgAX_bslJt&tp=1&oh=98954a9939de54cc9da68fe89ffa72d0&oe=6013AABC',
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CGK0j0bgzHL/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/121198388_163068372122391_7877988801192753035_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=GPL-llhrSXYAX8qBUeq&tp=1&oh=2b06ea79820c167429364eb41f513f9d&oe=601232A6',
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CFnLsjVCQUA/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/120187157_183400956650263_6300585569298579826_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=ZZ92l74ZR6cAX_Lf5QG&tp=1&oh=2757514ec3c77838d0dafa1d905f21cf&oe=6012E73D',
              alt:' '
            },
            {
              url:'https://www.instagram.com/p/CFXUEaoiyyg/',
              src:'https://instagram.ftxl2-1.fna.fbcdn.net/v/t51.2885-15/e35/119981202_431556187818050_5365387223214342438_n.jpg?_nc_ht=instagram.ftxl2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=PowY0ceFQroAX81PvQ3&tp=1&oh=7dfdf8f0440956bdda13a2a0f3b9a9c3&oe=601221BD',
              alt:' '
            },
          ]
        });
    }
  }
  
  export default Instagram;
  