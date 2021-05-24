const React = require('react');
const { AnimatePresence } = require('framer-motion');

exports.wrapPageElement = ({ element }) => {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
};