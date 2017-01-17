/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        this.wxScrollSolve(document.querySelector('.app'))
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },
    wxScrollSolve(scrollWrapObj) {
        if (scrollWrapObj == "" || scrollWrapObj == undefined || scrollWrapObj == null) {
            return
        }
        var overscroll = function (el) {
            el.addEventListener('touchstart', function () {
                var top = el.scrollTop,
                    totalScroll = el.scrollHeight,
                    currentScroll = top + el.offsetHeight;
                if (top === 0) {
                    el.scrollTop = 1;
                } else if (currentScroll === totalScroll) {
                    el.scrollTop = top - 1;
                }
            });
            el.addEventListener('touchmove', function (evt) {
                if (el.offsetHeight < el.scrollHeight)
                    evt._isScroller = true;
            }
            )
        };
        overscroll(scrollWrapObj);/*document.querySelector('.MainCon')*/
        document.body.addEventListener('touchmove', function (evt) {
            if (!evt._isScroller) {
                evt.preventDefault();
            }
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();