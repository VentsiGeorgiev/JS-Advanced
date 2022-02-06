const { expect } = require('chai');
const rgbToHexColor = require('./rgb');

describe('RGB Converter', () => {
  describe('path', () => {
    it('converts white', () => {
      expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
      expect(rgbToHexColor(255, 0, 0)).to.equal('#FFFFFF');
      expect(rgbToHexColor(0, 255, 0)).to.equal('#FFFFFF');
      expect(rgbToHexColor(0, 0, 255)).to.equal('#FFFFFF');
    });
    it('converts black', () => {
      expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');

    });
    it('converts SoftUni dark blue to #234465', () => {
      expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
    });
  });
  describe('Invalid parameter', () => {
    it('return undefined for missing parameters', () => {
      expect(rgbToHexColor(35, 68)).to.be.undefined;
    });
    it('return undefined for values out of range', () => {
      expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
      expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
      expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
      expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('return undefined for invalid parameter type', () => {
      expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
      expect(rgbToHexColor(0, 0, '0')).to.be.undefined;
      expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
      expect(rgbToHexColor('0', 0, 0)).to.be.undefined;
    });
  });
});
