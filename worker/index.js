// Cooper & Vale Heating & Cooling demo: static assets only.
export default {
  async fetch(req, env) {
    return env.ASSETS.fetch(req);
  },
};
