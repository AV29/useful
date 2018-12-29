import styled from 'styled-components';
import * as vars from '../../../styles/variables';

const checkboxSize = '16px';
const togglerSliderWidth = '40px';
const togglerSliderHeight = '24px';
const togglerSize = togglerSliderHeight;

export const StyledCheckBox = styled.div`
  display: block;
  position: relative;
  input[type="checkbox"] {
    position: absolute;
    width: 0;
    height: 0;
    left: -9999px;
  }
  .input-wrapper {
    &.left {
      label {
        flex-direction: row-reverse;
      }
    }
    label {
      display: flex;
      align-items: center;
      font-size: 14px;
      letter-spacing: 0.1px;
      line-height: ${checkboxSize}
      user-select: none;
    }
    &.toggler {
      display: inline-block;
      label {
        .toggler {
          position: relative;
          margin-right: 10px;
          display: inline-block;
          box-shadow: 0 0 3px ${({ theme: { color } }) => color};
          width: ${togglerSliderWidth};
          height: ${togglerSliderHeight};
          border-radius: 15px;
          background-color: ${({ theme: { bgColor } }) => bgColor};
          transition: all 300ms ${vars.transitionStyle};
          &:before {
            position: absolute;
            content: "";
            height: ${togglerSize};
            width: ${togglerSize};
            left: 0;
            bottom: 0;
            border-radius: 15px;
            border: 2px solid ${({ theme: { color } }) => color};
            background-color: ${({ theme: { bgColor } }) => bgColor};
            transition: all 300ms ${vars.transitionStyle};
            box-sizing: border-box;
          }
        }
        &:before {
          display: none;
        }
      }

      input[type="checkbox"] {
        &:focus + label {
          .toggler {
            box-shadow: 0 0 1px ${({ theme: { color } }) => color};
          }
        }
        &:checked + label {
          .toggler {
            background-color: ${({ theme: { bgColor } }) => bgColor};
            &:before {
              transform: translateX(100%) translateX(-8px);
              border-color: ${({ theme: { color } }) => color};
              content: "";
              background-color: ${({ theme: { bgColor } }) => bgColor};
            }
          }
        }
      }
      &.left {
        label {
          flex-direction: row-reverse;
          .toggler {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
