/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : dev_db

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-12-30 14:13:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', '昵称');
INSERT INTO `test` VALUES ('2', '昵称');
INSERT INTO `test` VALUES ('3', 'test模块创建');
INSERT INTO `test` VALUES ('4', 'test1模块创建');
