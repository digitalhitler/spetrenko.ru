/**
* @Author: Sergey S Petrenko <getrix>
* @Date:   2016-05-24T06:09:15+03:00
* @Email:  spetrenko@me.com
* @Project: spetrenko.ru
* @Last modified by:   getrix
* @Last modified time: 2016-05-25T15:20:20+03:00
* @License: This software is licensed under the Creative Commons Attribution-NonCommercial 4.0
International License.
To view a copy of this license, visit: http://creativecommons.org/licenses/by-nc/4.0/.
In either words, you can do anything except any kind of commercial purposes without
a permission of author.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/


import riot from 'riot';
let bl = null;

const lpTemplate =
`
<img src="{ img }" class="{ imgclass }" />
`;

const lpController = function(opts) {
  'use strict';
  this.imgclass = opts.imgclass || '';
  this.img = `http://lorempixel.com/${opts.w}/${opts.h}/`;

  this.on('mount', () => {
    console.log(this.img);
  });
}

riot.tag('lorempixel', lpTemplate, lpController);
