import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #22b85b 
		"--color-primary-50": "222 244 230", // #def4e6
		"--color-primary-100": "211 241 222", // #d3f1de
		"--color-primary-200": "200 237 214", // #c8edd6
		"--color-primary-300": "167 227 189", // #a7e3bd
		"--color-primary-400": "100 205 140", // #64cd8c
		"--color-primary-500": "34 184 91", // #22b85b
		"--color-primary-600": "31 166 82", // #1fa652
		"--color-primary-700": "26 138 68", // #1a8a44
		"--color-primary-800": "20 110 55", // #146e37
		"--color-primary-900": "17 90 45", // #115a2d
		// secondary | #f2c57c 
		"--color-secondary-50": "253 246 235", // #fdf6eb
		"--color-secondary-100": "252 243 229", // #fcf3e5
		"--color-secondary-200": "252 241 222", // #fcf1de
		"--color-secondary-300": "250 232 203", // #fae8cb
		"--color-secondary-400": "246 214 163", // #f6d6a3
		"--color-secondary-500": "242 197 124", // #f2c57c
		"--color-secondary-600": "218 177 112", // #dab170
		"--color-secondary-700": "182 148 93", // #b6945d
		"--color-secondary-800": "145 118 74", // #91764a
		"--color-secondary-900": "119 97 61", // #77613d
		// tertiary | #B8227F 
		"--color-tertiary-50": "244 222 236", // #f4deec
		"--color-tertiary-100": "241 211 229", // #f1d3e5
		"--color-tertiary-200": "237 200 223", // #edc8df
		"--color-tertiary-300": "227 167 204", // #e3a7cc
		"--color-tertiary-400": "205 100 165", // #cd64a5
		"--color-tertiary-500": "184 34 127", // #B8227F
		"--color-tertiary-600": "166 31 114", // #a61f72
		"--color-tertiary-700": "138 26 95", // #8a1a5f
		"--color-tertiary-800": "110 20 76", // #6e144c
		"--color-tertiary-900": "90 17 62", // #5a113e
		// success | #05863a 
		"--color-success-50": "218 237 225", // #daede1
		"--color-success-100": "205 231 216", // #cde7d8
		"--color-success-200": "193 225 206", // #c1e1ce
		"--color-success-300": "155 207 176", // #9bcfb0
		"--color-success-400": "80 170 117", // #50aa75
		"--color-success-500": "5 134 58", // #05863a
		"--color-success-600": "5 121 52", // #057934
		"--color-success-700": "4 101 44", // #04652c
		"--color-success-800": "3 80 35", // #035023
		"--color-success-900": "2 66 28", // #02421c
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #d70032 
		"--color-error-50": "249 217 224", // #f9d9e0
		"--color-error-100": "247 204 214", // #f7ccd6
		"--color-error-200": "245 191 204", // #f5bfcc
		"--color-error-300": "239 153 173", // #ef99ad
		"--color-error-400": "227 77 112", // #e34d70
		"--color-error-500": "215 0 50", // #d70032
		"--color-error-600": "194 0 45", // #c2002d
		"--color-error-700": "161 0 38", // #a10026
		"--color-error-800": "129 0 30", // #81001e
		"--color-error-900": "105 0 25", // #690019
		// surface | #d8c4b5 
		"--color-surface-50": "249 246 244", // #f9f6f4
		"--color-surface-100": "247 243 240", // #f7f3f0
		"--color-surface-200": "245 240 237", // #f5f0ed
		"--color-surface-300": "239 231 225", // #efe7e1
		"--color-surface-400": "228 214 203", // #e4d6cb
		"--color-surface-500": "216 196 181", // #d8c4b5
		"--color-surface-600": "194 176 163", // #c2b0a3
		"--color-surface-700": "162 147 136", // #a29388
		"--color-surface-800": "130 118 109", // #82766d
		"--color-surface-900": "106 96 89", // #6a6059
		
	}
}
